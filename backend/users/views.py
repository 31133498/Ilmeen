from rest_framework import status, generics, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import login
from django.utils import timezone
from datetime import timedelta
from .models import CustomUser, UserProfile, UserActivity
from .serializers import (
    UserRegistrationSerializer, UserLoginSerializer, UserSerializer,
    UserUpdateSerializer, PasswordChangeSerializer, UserStatsSerializer,
    UserActivitySerializer
)

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = [permissions.AllowAny]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        # Create initial activity
        UserActivity.objects.create(
            user=user,
            activity_type='lesson',
            description='Account created and started learning journey'
        )
        
        # Generate tokens
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'message': 'User registered successfully'
        }, status=status.HTTP_201_CREATED)

class UserLoginView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer
    permission_classes = [permissions.AllowAny]
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        
        # Update user profile streak
        user.profile.update_streak()
        
        # Create login activity
        UserActivity.objects.create(
            user=user,
            activity_type='lesson',
            description='User logged in'
        )
        
        # Generate tokens
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'message': 'Login successful'
        }, status=status.HTTP_200_OK)

class UserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self):
        return self.request.user

class UserUpdateView(generics.UpdateAPIView):
    serializer_class = UserUpdateSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_object(self):
        return self.request.user

class PasswordChangeView(generics.GenericAPIView):
    serializer_class = PasswordChangeSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = request.user
        
        # Check old password
        if not user.check_password(serializer.validated_data['old_password']):
            return Response(
                {'old_password': ['Wrong password.']}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Set new password
        user.set_password(serializer.validated_data['new_password'])
        user.save()
        
        # Create activity
        UserActivity.objects.create(
            user=user,
            activity_type='lesson',
            description='Password changed successfully'
        )
        
        return Response({'message': 'Password updated successfully'}, status=status.HTTP_200_OK)

class UserStatsView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request, *args, **kwargs):
        user = request.user
        profile = user.profile
        
        # Calculate activities this week
        week_ago = timezone.now() - timedelta(days=7)
        activities_this_week = UserActivity.objects.filter(
            user=user, 
            created_at__gte=week_ago
        ).count()
        
        # Calculate level progress (simplified)
        level_progress = min((profile.total_lessons_completed % 10) * 10, 100)
        
        stats_data = {
            'streak_count': profile.streak_count,
            'total_scans': profile.total_scans,
            'total_lessons_completed': profile.total_lessons_completed,
            'points': profile.points,
            'activities_this_week': activities_this_week,
            'level_progress': level_progress,
        }
        
        serializer = UserStatsSerializer(stats_data)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserActivitiesView(generics.ListAPIView):
    serializer_class = UserActivitySerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return UserActivity.objects.filter(user=self.request.user).order_by('-created_at')

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def track_activity(request):
    """Track user activity from various actions"""
    activity_type = request.data.get('type')
    description = request.data.get('description')
    metadata = request.data.get('metadata', {})
    
    if not activity_type or not description:
        return Response(
            {'error': 'Activity type and description are required'},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    # Create activity
    activity = UserActivity.objects.create(
        user=request.user,
        activity_type=activity_type,
        description=description,
        metadata=metadata
    )
    
    # Update user profile based on activity type
    profile = request.user.profile
    if activity_type == 'scan':
        profile.total_scans += 1
        profile.points += 5
    elif activity_type == 'lesson':
        profile.total_lessons_completed += 1
        profile.points += 10
    elif activity_type == 'vocabulary':
        profile.points += 2
    
    profile.save()
    
    return Response({
        'message': 'Activity tracked successfully',
        'activity': UserActivitySerializer(activity).data
    }, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def update_streak(request):
    """Manually update user streak (usually called daily)"""
    profile = request.user.profile
    profile.update_streak()
    
    return Response({
        'message': 'Streak updated successfully',
        'streak_count': profile.streak_count
    }, status=status.HTTP_200_OK)
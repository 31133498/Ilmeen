from django.urls import path
from . import views

urlpatterns = [
    # Authentication
    path('auth/register/', views.UserRegistrationView.as_view(), name='register'),
    path('auth/login/', views.UserLoginView.as_view(), name='login'),
    
    # User profile
    path('profile/', views.UserProfileView.as_view(), name='profile'),
    path('profile/update/', views.UserUpdateView.as_view(), name='update-profile'),
    path('profile/change-password/', views.PasswordChangeView.as_view(), name='change-password'),
    
    # User stats and activities
    path('stats/', views.UserStatsView.as_view(), name='user-stats'),
    path('activities/', views.UserActivitiesView.as_view(), name='user-activities'),
    path('activities/track/', views.track_activity, name='track-activity'),
    path('streak/update/', views.update_streak, name='update-streak'),
]
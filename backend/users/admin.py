from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, UserProfile, UserActivity

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'email', 'user_type', 'is_verified', 'is_active', 'created_at']
    list_filter = ['user_type', 'is_verified', 'is_active', 'created_at']
    search_fields = ['username', 'email', 'first_name', 'last_name']
    ordering = ['-created_at']
    
    fieldsets = UserAdmin.fieldsets + (
        ('Additional Information', {
            'fields': (
                'user_type', 'phone_number', 'date_of_birth', 'profile_picture', 
                'bio', 'is_verified', 'current_level', 'learning_goals', 'preferred_language'
            )
        }),
    )
    
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Additional Information', {
            'fields': (
                'email', 'user_type', 'phone_number', 'date_of_birth'
            )
        }),
    )

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'streak_count', 'total_scans', 'total_lessons_completed', 'points', 'last_active']
    list_filter = ['last_active']
    search_fields = ['user__username', 'user__email']
    readonly_fields = ['last_active']

@admin.register(UserActivity)
class UserActivityAdmin(admin.ModelAdmin):
    list_display = ['user', 'activity_type', 'description', 'created_at']
    list_filter = ['activity_type', 'created_at']
    search_fields = ['user__username', 'description']
    readonly_fields = ['created_at']
    date_hierarchy = 'created_at'
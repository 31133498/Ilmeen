from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

class CustomUser(AbstractUser):
    """Custom user model with additional fields"""
    
    USER_TYPE_CHOICES = (
        ('student', 'Student'),
        ('teacher', 'Teacher'),
        ('admin', 'Administrator'),
    )
    
    email = models.EmailField(unique=True)
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES, default='student')
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    bio = models.TextField(max_length=500, blank=True)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # Arabic learning specific fields
    current_level = models.CharField(max_length=50, default='beginner', blank=True)
    learning_goals = models.TextField(blank=True)
    preferred_language = models.CharField(max_length=10, default='en', blank=True)  # en, ar, yo
    
    def __str__(self):
        return f"{self.username} ({self.get_user_type_display()})"
    
    class Meta:
        db_table = 'users'
        verbose_name = 'User'
        verbose_name_plural = 'Users'

class UserProfile(models.Model):
    """Extended profile information for users"""
    
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='profile')
    streak_count = models.IntegerField(default=0)
    total_scans = models.IntegerField(default=0)
    total_lessons_completed = models.IntegerField(default=0)
    points = models.IntegerField(default=0)
    
    # Progress tracking
    vocabulary_learned = models.JSONField(default=dict, blank=True)  # Store learned words
    grammar_topics_mastered = models.JSONField(default=list, blank=True)
    last_active = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"Profile of {self.user.username}"
    
    def update_streak(self):
        """Update user streak based on last activity"""
        today = timezone.now().date()
        last_active_date = self.last_active.date()
        
        if last_active_date == today:
            return  # Already updated today
        
        if last_active_date == today - timezone.timedelta(days=1):
            self.streak_count += 1
        else:
            self.streak_count = 1
        
        self.last_active = timezone.now()
        self.save()
    
    class Meta:
        db_table = 'user_profiles'

class UserActivity(models.Model):
    """Track user activities and progress"""
    
    ACTIVITY_TYPES = (
        ('scan', 'Text Scan'),
        ('lesson', 'Lesson Completed'),
        ('vocabulary', 'Vocabulary Learned'),
        ('grammar', 'Grammar Exercise'),
        ('chat', 'AI Chat'),
    )
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='activities')
    activity_type = models.CharField(max_length=20, choices=ACTIVITY_TYPES)
    description = models.TextField()
    metadata = models.JSONField(default=dict, blank=True)  # Additional data about the activity
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.get_activity_type_display()} - {self.created_at}"
    
    class Meta:
        db_table = 'user_activities'
        verbose_name_plural = 'User Activities'
        ordering = ['-created_at']
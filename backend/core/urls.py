from django.urls import path
from . import views

urlpatterns = [
    # Core functionality endpoints
    path('ocr', views.ocr_extract, name='ocr_extract'),
    path('explain', views.explain_text, name='explain_text'),
    path('tts', views.text_to_speech, name='text_to_speech'),
    path('chat', views.ai_chat, name='ai_chat'),
    
    # Data retrieval endpoints
    path('scans/', views.UserScansListView.as_view(), name='user-scans'),
    path('analysis/<int:pk>/', views.ScanAnalysisView.as_view(), name='scan-analysis'),
    path('chats/', views.ChatHistoryView.as_view(), name='chat-history'),
    path('progress/', views.UserProgressView.as_view(), name='user-progress'),
    path('dashboard/', views.user_dashboard, name='user-dashboard'),
    
    # Health check
    path('health', views.health_check, name='health_check'),
]
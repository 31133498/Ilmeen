from django.contrib import admin
from .models import (
    OCRScan, TextAnalysis, AudioTTS, ChatInteraction, 
    VocabularyWord, UserProgress, GrammarRule, Lesson
)

@admin.register(OCRScan)
class OCRScanAdmin(admin.ModelAdmin):
    list_display = ['user', 'original_text', 'confidence_score', 'created_at']
    list_filter = ['created_at', 'user']
    search_fields = ['original_text', 'user__username']
    readonly_fields = ['created_at']
    date_hierarchy = 'created_at'

@admin.register(TextAnalysis)
class TextAnalysisAdmin(admin.ModelAdmin):
    list_display = ['scan', 'difficulty_level', 'created_at']
    list_filter = ['difficulty_level', 'created_at']
    readonly_fields = ['created_at']

@admin.register(AudioTTS)
class AudioTTSAdmin(admin.ModelAdmin):
    list_display = ['analysis', 'language', 'duration_seconds', 'created_at']
    list_filter = ['language', 'created_at']
    readonly_fields = ['created_at']

@admin.register(ChatInteraction)
class ChatInteractionAdmin(admin.ModelAdmin):
    list_display = ['user', 'message_type', 'created_at']
    list_filter = ['message_type', 'created_at', 'user']
    search_fields = ['content', 'user__username']
    readonly_fields = ['created_at']
    date_hierarchy = 'created_at'

@admin.register(VocabularyWord)
class VocabularyWordAdmin(admin.ModelAdmin):
    list_display = ['arabic_word', 'transliteration', 'word_type', 'difficulty_level', 'is_verified']
    list_filter = ['word_type', 'difficulty_level', 'is_verified', 'created_at']
    search_fields = ['arabic_word', 'transliteration', 'english_meaning']
    readonly_fields = ['created_at']

@admin.register(UserProgress)
class UserProgressAdmin(admin.ModelAdmin):
    list_display = ['user', 'vocabulary_word', 'mastery_level', 'times_encountered', 'last_reviewed']
    list_filter = ['mastery_level', 'last_reviewed']
    search_fields = ['user__username', 'vocabulary_word__arabic_word']
    readonly_fields = ['last_reviewed']

@admin.register(GrammarRule)
class GrammarRuleAdmin(admin.ModelAdmin):
    list_display = ['title', 'rule_type', 'difficulty_level', 'created_at']
    list_filter = ['rule_type', 'difficulty_level', 'created_at']
    search_fields = ['title', 'arabic_description', 'english_description']
    readonly_fields = ['created_at']

@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ['title', 'lesson_type', 'difficulty_level', 'order', 'is_active']
    list_filter = ['lesson_type', 'difficulty_level', 'is_active', 'created_at']
    search_fields = ['title', 'description']
    readonly_fields = ['created_at']
    filter_horizontal = ['vocabulary_words', 'grammar_rules']
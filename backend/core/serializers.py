from rest_framework import serializers
from .models import (
    OCRScan, TextAnalysis, AudioTTS, ChatInteraction,
    VocabularyWord, UserProgress, GrammarRule, Lesson
)

class OCRScanSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    
    class Meta:
        model = OCRScan
        fields = [
            'id', 'user', 'image', 'original_text', 'processed_text', 
            'confidence_score', 'created_at'
        ]
        read_only_fields = ['id', 'user', 'original_text', 'processed_text', 'confidence_score', 'created_at']

class TextAnalysisSerializer(serializers.ModelSerializer):
    scan = OCRScanSerializer(read_only=True)
    
    class Meta:
        model = TextAnalysis
        fields = [
            'id', 'scan', 'word_breakdown', 'english_translation', 
            'yoruba_translation', 'grammar_points', 'vocabulary_highlight',
            'difficulty_level', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']

class AudioTTSSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudioTTS
        fields = ['id', 'audio_file', 'audio_base64', 'duration_seconds', 'language', 'created_at']
        read_only_fields = ['id', 'created_at']

class ChatInteractionSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    
    class Meta:
        model = ChatInteraction
        fields = [
            'id', 'user', 'scan', 'message_type', 'content', 
            'context_data', 'tokens_used', 'created_at'
        ]
        read_only_fields = ['id', 'user', 'tokens_used', 'created_at']

class VocabularyWordSerializer(serializers.ModelSerializer):
    class Meta:
        model = VocabularyWord
        fields = [
            'id', 'arabic_word', 'transliteration', 'english_meaning',
            'yoruba_meaning', 'word_type', 'root_letters', 'grammar_notes',
            'examples', 'difficulty_level', 'is_verified', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']

class UserProgressSerializer(serializers.ModelSerializer):
    vocabulary_word = VocabularyWordSerializer(read_only=True)
    
    class Meta:
        model = UserProgress
        fields = [
            'id', 'vocabulary_word', 'times_encountered', 'times_correct',
            'mastery_level', 'last_reviewed', 'next_review'
        ]
        read_only_fields = ['id', 'last_reviewed']

class GrammarRuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarRule
        fields = [
            'id', 'title', 'rule_type', 'arabic_description', 
            'english_description', 'yoruba_description', 'examples',
            'difficulty_level', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']

class LessonSerializer(serializers.ModelSerializer):
    vocabulary_words = VocabularyWordSerializer(many=True, read_only=True)
    grammar_rules = GrammarRuleSerializer(many=True, read_only=True)
    
    class Meta:
        model = Lesson
        fields = [
            'id', 'title', 'lesson_type', 'description', 'content',
            'difficulty_level', 'estimated_duration', 'vocabulary_words',
            'grammar_rules', 'is_active', 'order', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']

# Request/Response Serializers
class OCRRequestSerializer(serializers.Serializer):
    image = serializers.ImageField()

class ExplainRequestSerializer(serializers.Serializer):
    text = serializers.CharField()
    include_yoruba = serializers.BooleanField(default=True)

class TTSRequestSerializer(serializers.Serializer):
    text = serializers.CharField()
    language = serializers.CharField(default='ar')

class ChatRequestSerializer(serializers.Serializer):
    message = serializers.CharField()
    context = serializers.CharField(required=False, allow_blank=True)
    scan_id = serializers.IntegerField(required=False)

class AnalysisResponseSerializer(serializers.Serializer):
    success = serializers.BooleanField()
    original_text = serializers.CharField()
    explanation = serializers.DictField()
    scan_id = serializers.IntegerField(required=False)
    analysis_id = serializers.IntegerField(required=False)

class TTSResponseSerializer(serializers.Serializer):
    success = serializers.BooleanField()
    audio_base64 = serializers.CharField(required=False, allow_null=True)
    text = serializers.CharField(required=False)
    message = serializers.CharField()
    fallback_reason = serializers.CharField(required=False, allow_null=True)

class ChatResponseSerializer(serializers.Serializer):
    success = serializers.BooleanField()
    user_message = serializers.CharField()
    ai_response = serializers.CharField()
    context_used = serializers.BooleanField()
    chat_id = serializers.IntegerField(required=False)
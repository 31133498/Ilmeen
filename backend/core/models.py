from django.db import models
from django.conf import settings
from django.utils import timezone

class OCRScan(models.Model):
    """Model to store OCR scan results"""
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='scans')
    image = models.ImageField(upload_to='ocr_scans/')
    original_text = models.TextField()  # Extracted Arabic text
    processed_text = models.TextField(blank=True)  # Cleaned text
    confidence_score = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Scan by {self.user.username} - {self.created_at}"
    
    class Meta:
        db_table = 'ocr_scans'
        ordering = ['-created_at']

class TextAnalysis(models.Model):
    """Model to store text analysis results"""
    
    scan = models.OneToOneField(OCRScan, on_delete=models.CASCADE, related_name='analysis')
    word_breakdown = models.JSONField()  # Store word-by-word analysis
    english_translation = models.TextField()
    yoruba_translation = models.TextField(blank=True)
    grammar_points = models.JSONField(default=list)  # Key grammar rules
    vocabulary_highlight = models.JSONField(default=list)  # Important vocabulary
    difficulty_level = models.CharField(max_length=20, default='beginner')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Analysis for {self.scan.id}"
    
    class Meta:
        db_table = 'text_analyses'
        verbose_name_plural = 'Text Analyses'

class AudioTTS(models.Model):
    """Model to store TTS audio files"""
    
    analysis = models.OneToOneField(TextAnalysis, on_delete=models.CASCADE, related_name='audio')
    audio_file = models.FileField(upload_to='tts_audio/')
    audio_base64 = models.TextField(blank=True)  # Store base64 for quick access
    duration_seconds = models.FloatField(default=0)
    language = models.CharField(max_length=10, default='ar')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Audio for {self.analysis.scan.id}"
    
    class Meta:
        db_table = 'audio_tts'
        verbose_name_plural = 'Audio TTS'

class ChatInteraction(models.Model):
    """Model to store AI chat interactions"""
    
    MESSAGE_TYPES = (
        ('user', 'User Message'),
        ('ai', 'AI Response'),
    )
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='chats')
    scan = models.ForeignKey(OCRScan, on_delete=models.CASCADE, null=True, blank=True, related_name='chats')
    message_type = models.CharField(max_length=10, choices=MESSAGE_TYPES)
    content = models.TextField()
    context_data = models.JSONField(default=dict, blank=True)  # Context from OCR scan
    tokens_used = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.get_message_type_display()} by {self.user.username}"
    
    class Meta:
        db_table = 'chat_interactions'
        ordering = ['created_at']

class VocabularyWord(models.Model):
    """Model to store vocabulary words from analyses"""
    
    WORD_TYPES = (
        ('noun', 'Noun'),
        ('verb', 'Verb'),
        ('adjective', 'Adjective'),
        ('adverb', 'Adverb'),
        ('preposition', 'Preposition'),
        ('conjunction', 'Conjunction'),
        ('particle', 'Particle'),
        ('phrase', 'Phrase'),
    )
    
    arabic_word = models.CharField(max_length=255)
    transliteration = models.CharField(max_length=255)
    english_meaning = models.TextField()
    yoruba_meaning = models.TextField(blank=True)
    word_type = models.CharField(max_length=20, choices=WORD_TYPES)
    root_letters = models.CharField(max_length=50, blank=True)
    grammar_notes = models.TextField(blank=True)
    examples = models.JSONField(default=list, blank=True)  # Example sentences
    difficulty_level = models.CharField(max_length=20, default='beginner')
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.arabic_word} - {self.english_meaning}"
    
    class Meta:
        db_table = 'vocabulary_words'
        unique_together = ['arabic_word', 'transliteration']
        ordering = ['arabic_word']

class UserProgress(models.Model):
    """Track user progress with vocabulary and grammar"""
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='progress')
    vocabulary_word = models.ForeignKey(VocabularyWord, on_delete=models.CASCADE)
    times_encountered = models.IntegerField(default=1)
    times_correct = models.IntegerField(default=0)
    mastery_level = models.IntegerField(default=0)  # 0-100 percentage
    last_reviewed = models.DateTimeField(auto_now=True)
    next_review = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"{self.user.username} - {self.vocabulary_word.arabic_word}"
    
    class Meta:
        db_table = 'user_progress'
        unique_together = ['user', 'vocabulary_word']
        verbose_name_plural = 'User Progress'

class GrammarRule(models.Model):
    """Store Arabic grammar rules"""
    
    RULE_TYPES = (
        ('nahw', 'Syntax'),
        ('sarf', 'Morphology'),
        ('balagha', 'Rhetoric'),
    )
    
    title = models.CharField(max_length=255)
    rule_type = models.CharField(max_length=20, choices=RULE_TYPES)
    arabic_description = models.TextField()
    english_description = models.TextField()
    yoruba_description = models.TextField(blank=True)
    examples = models.JSONField(default=list)
    difficulty_level = models.CharField(max_length=20, default='beginner')
    related_vocabulary = models.ManyToManyField(VocabularyWord, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.title} ({self.get_rule_type_display()})"
    
    class Meta:
        db_table = 'grammar_rules'
        ordering = ['difficulty_level', 'title']

class Lesson(models.Model):
    """Structured lessons for Arabic learning"""
    
    LESSON_TYPES = (
        ('vocabulary', 'Vocabulary'),
        ('grammar', 'Grammar'),
        ('reading', 'Reading'),
        ('listening', 'Listening'),
    )
    
    title = models.CharField(max_length=255)
    lesson_type = models.CharField(max_length=20, choices=LESSON_TYPES)
    description = models.TextField()
    content = models.JSONField()  # Structured lesson content
    difficulty_level = models.CharField(max_length=20, default='beginner')
    estimated_duration = models.IntegerField(default=15)  # in minutes
    vocabulary_words = models.ManyToManyField(VocabularyWord, blank=True)
    grammar_rules = models.ManyToManyField(GrammarRule, blank=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.title} - {self.get_lesson_type_display()}"
    
    class Meta:
        db_table = 'lessons'
        ordering = ['order', 'created_at']
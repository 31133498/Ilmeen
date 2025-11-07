import os
import base64
import tempfile
import json
import requests
from gtts import gTTS
import pytesseract
from PIL import Image, ImageEnhance
from rest_framework import status, generics, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.conf import settings
from django.utils import timezone

# Try to import AI services
try:
    import google.generativeai as genai
    GEMINI_AVAILABLE = True
    if settings.GEMINI_API_KEY:
        genai.configure(api_key=settings.GEMINI_API_KEY)
except ImportError:
    GEMINI_AVAILABLE = False

try:
    from openai import OpenAI
    OPENAI_AVAILABLE = True
    if settings.OPENAI_API_KEY:
        openai_client = OpenAI(api_key=settings.OPENAI_API_KEY)
except ImportError:
    OPENAI_AVAILABLE = False

# Import models (you'll need to create these or remove references if they don't exist yet)
try:
    from .models import OCRScan, TextAnalysis, ChatInteraction, UserProgress
    MODELS_AVAILABLE = True
except ImportError:
    MODELS_AVAILABLE = False
    print("Models not available yet - run migrations first")

# Import serializers
try:
    from .serializers import (
        OCRScanSerializer, TextAnalysisSerializer, ChatInteractionSerializer, 
        UserProgressSerializer
    )
    SERIALIZERS_AVAILABLE = True
except ImportError:
    SERIALIZERS_AVAILABLE = False
    print("Serializers not available yet")

def preprocess_image_pil(image):
    """Preprocess image using PIL only (no OpenCV)"""
    # Convert to grayscale
    if image.mode != 'L':
        image = image.convert('L')
    
    # Enhance contrast
    enhancer = ImageEnhance.Contrast(image)
    image = enhancer.enhance(2.0)
    
    # Enhance sharpness
    enhancer = ImageEnhance.Sharpness(image)
    image = enhancer.enhance(2.0)
    
    return image

def call_ai_api(prompt):
    """Call AI API with fallback options"""
    if GEMINI_AVAILABLE and settings.GEMINI_API_KEY:
        try:
            model = genai.GenerativeModel('gemini-pro')
            response = model.generate_content(prompt)
            return response.text
        except Exception as e:
            print(f"Gemini error: {e}")
    
    if OPENAI_AVAILABLE and settings.OPENAI_API_KEY:
        try:
            response = openai_client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are an Arabic learning assistant."},
                    {"role": "user", "content": prompt}
                ]
            )
            return response.choices[0].message.content
        except Exception as e:
            print(f"OpenAI error: {e}")
    
    return "AI service currently unavailable. Please check API configuration."

# Core Functionality Views
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def ocr_extract(request):
    """
    Extract Arabic text from uploaded image
    """
    try:
        if 'image' not in request.FILES:
            return Response({'error': 'No image provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        image_file = request.FILES['image']
        
        # Read and preprocess image using PIL only
        image = Image.open(image_file)
        processed_image = preprocess_image_pil(image)
        
        # Extract Arabic text using Tesseract
        custom_config = r'--oem 3 --psm 6 -l ara'
        extracted_text = pytesseract.image_to_string(processed_image, config=custom_config).strip()
        
        # Clean up text
        extracted_text = ' '.join(extracted_text.split())
        
        # Calculate confidence score (simplified)
        confidence_score = min(len(extracted_text) / 100, 1.0) if extracted_text else 0.0
        
        # Save to database if models are available
        scan_data = {
            'success': True,
            'extracted_text': extracted_text,
            'confidence_score': confidence_score,
            'message': 'Text extracted successfully'
        }
        
        if MODELS_AVAILABLE:
            try:
                scan = OCRScan.objects.create(
                    user=request.user,
                    image=image_file,
                    original_text=extracted_text,
                    processed_text=extracted_text,
                    confidence_score=confidence_score
                )
                scan_data['scan_id'] = scan.id
                
                # Update user profile
                if hasattr(request.user, 'profile'):
                    request.user.profile.total_scans += 1
                    request.user.profile.points += 5
                    request.user.profile.save()
                    
            except Exception as e:
                print(f"Error saving to database: {e}")
        
        return Response(scan_data)
        
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def explain_text(request):
    """
    Get grammar breakdown and translations for Arabic text
    """
    try:
        data = request.data
        arabic_text = data.get('text', '').strip()
        
        if not arabic_text:
            return Response({'error': 'No Arabic text provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Create prompt for AI
        prompt = f"""
        Analyze this Arabic text and provide a comprehensive breakdown:
        
        Arabic Text: "{arabic_text}"
        
        Please provide the following in JSON format:
        1. Word-by-word analysis with:
           - Original Arabic word
           - Transliteration
           - English meaning
           - Yoruba meaning
           - Grammar analysis (part of speech, case, etc.)
        2. Overall English translation
        3. Overall Yoruba translation
        4. Key grammar points
        5. Difficulty level (beginner, intermediate, advanced)
        
        Format the response as valid JSON.
        """
        
        # Call AI API
        response_text = call_ai_api(prompt)
        
        # Parse the response
        try:
            response_text = response_text.replace('```json', '').replace('```', '').strip()
            explanation_data = json.loads(response_text)
        except json.JSONDecodeError:
            explanation_data = {
                'analysis': response_text,
                'english_translation': 'Translation not available',
                'yoruba_translation': 'Translation not available',
                'word_breakdown': [],
                'grammar_points': [],
                'difficulty_level': 'unknown'
            }
        
        response_data = {
            'success': True,
            'original_text': arabic_text,
            'explanation': explanation_data,
            'message': 'Text analyzed successfully'
        }
        
        # Save to database if models are available
        if MODELS_AVAILABLE:
            try:
                scan_id = data.get('scan_id')
                scan = None
                if scan_id:
                    scan = OCRScan.objects.get(id=scan_id, user=request.user)
                
                analysis = TextAnalysis.objects.create(
                    scan=scan,
                    word_breakdown=explanation_data.get('word_breakdown', []),
                    english_translation=explanation_data.get('english_translation', ''),
                    yoruba_translation=explanation_data.get('yoruba_translation', ''),
                    grammar_points=explanation_data.get('grammar_points', []),
                    vocabulary_highlight=explanation_data.get('vocabulary_highlight', []),
                    difficulty_level=explanation_data.get('difficulty_level', 'beginner')
                )
                response_data['analysis_id'] = analysis.id
                
            except Exception as e:
                print(f"Error saving analysis to database: {e}")
        
        return Response(response_data)
        
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def text_to_speech(request):
    """
    Convert Arabic text to speech
    """
    try:
        data = request.data
        arabic_text = data.get('text', '').strip()
        
        if not arabic_text:
            return Response({'error': 'No Arabic text provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Create temporary file for audio
        with tempfile.NamedTemporaryFile(delete=False, suffix='.mp3') as temp_audio:
            # Generate Arabic TTS
            tts = gTTS(text=arabic_text, lang='ar', slow=False)
            tts.save(temp_audio.name)
            
            # Read audio file and encode to base64
            with open(temp_audio.name, 'rb') as audio_file:
                audio_base64 = base64.b64encode(audio_file.read()).decode('utf-8')
            
            # Clean up temporary file
            os.unlink(temp_audio.name)
        
        return Response({
            'success': True,
            'audio_base64': audio_base64,
            'message': 'Audio generated successfully'
        })
        
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def ai_chat(request):
    """
    AI chat endpoint for student questions
    """
    try:
        data = request.data
        user_message = data.get('message', '').strip()
        context = data.get('context', '')  # Previous conversation or OCR text
        
        if not user_message:
            return Response({'error': 'No message provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Create context-aware prompt
        prompt = f"""
        You are Ilmeen, an AI Arabic learning assistant. Help students learn Arabic in a friendly, educational manner.
        
        Context from current learning session: {context}
        
        Student's question: {user_message}
        
        Please provide a helpful, educational response that:
        1. Answers the question clearly
        2. Provides examples if relevant
        3. Encourages further learning
        4. If it's about Arabic grammar or vocabulary, provide clear explanations
        
        Respond in the same language the student used, or in English if mixed.
        """
        
        # Call AI API
        ai_response = call_ai_api(prompt)
        
        response_data = {
            'success': True,
            'user_message': user_message,
            'ai_response': ai_response,
            'context_used': bool(context)
        }
        
        # Save to database if models are available
        if MODELS_AVAILABLE:
            try:
                scan_id = data.get('scan_id')
                scan = None
                if scan_id:
                    scan = OCRScan.objects.get(id=scan_id, user=request.user)
                    context = scan.original_text
                
                # Save user message
                user_chat = ChatInteraction.objects.create(
                    user=request.user,
                    scan=scan,
                    message_type='user',
                    content=user_message,
                    context_data={'context_text': context}
                )
                
                # Save AI response
                ai_chat = ChatInteraction.objects.create(
                    user=request.user,
                    scan=scan,
                    message_type='ai',
                    content=ai_response,
                    context_data={'user_message_id': user_chat.id},
                    tokens_used=len(ai_response.split())
                )
                
                response_data['user_chat_id'] = user_chat.id
                response_data['ai_chat_id'] = ai_chat.id
                
            except Exception as e:
                print(f"Error saving chat to database: {e}")
        
        return Response(response_data)
        
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# Data Retrieval Views (Class-Based)
class UserScansListView(generics.ListAPIView):
    """Get user's OCR scan history"""
    permission_classes = [permissions.IsAuthenticated]
    
    def get_serializer_class(self):
        if SERIALIZERS_AVAILABLE:
            return OCRScanSerializer
        return None
    
    def get_queryset(self):
        if MODELS_AVAILABLE:
            return OCRScan.objects.filter(user=self.request.user).order_by('-created_at')
        return []
    
    def list(self, request, *args, **kwargs):
        if not MODELS_AVAILABLE:
            return Response({
                'message': 'Scan history not available yet. Run migrations to enable this feature.',
                'scans': []
            })
        return super().list(request, *args, **kwargs)

class ScanAnalysisView(generics.RetrieveAPIView):
    """Get analysis for a specific scan"""
    permission_classes = [permissions.IsAuthenticated]
    
    def get_serializer_class(self):
        if SERIALIZERS_AVAILABLE:
            return TextAnalysisSerializer
        return None
    
    def get_queryset(self):
        if MODELS_AVAILABLE:
            return TextAnalysis.objects.filter(scan__user=self.request.user)
        return []
    
    def retrieve(self, request, *args, **kwargs):
        if not MODELS_AVAILABLE:
            return Response({
                'message': 'Analysis not available yet. Run migrations to enable this feature.'
            }, status=status.HTTP_404_NOT_FOUND)
        return super().retrieve(request, *args, **kwargs)

class ChatHistoryView(generics.ListAPIView):
    """Get user's chat history"""
    permission_classes = [permissions.IsAuthenticated]
    
    def get_serializer_class(self):
        if SERIALIZERS_AVAILABLE:
            return ChatInteractionSerializer
        return None
    
    def get_queryset(self):
        if MODELS_AVAILABLE:
            return ChatInteraction.objects.filter(user=self.request.user).order_by('-created_at')
        return []
    
    def list(self, request, *args, **kwargs):
        if not MODELS_AVAILABLE:
            return Response({
                'message': 'Chat history not available yet. Run migrations to enable this feature.',
                'chats': []
            })
        return super().list(request, *args, **kwargs)

class UserProgressView(generics.ListAPIView):
    """Get user's vocabulary progress"""
    permission_classes = [permissions.IsAuthenticated]
    
    def get_serializer_class(self):
        if SERIALIZERS_AVAILABLE:
            return UserProgressSerializer
        return None
    
    def get_queryset(self):
        if MODELS_AVAILABLE:
            return UserProgress.objects.filter(user=self.request.user).select_related('vocabulary_word')
        return []
    
    def list(self, request, *args, **kwargs):
        if not MODELS_AVAILABLE:
            return Response({
                'message': 'Progress tracking not available yet. Run migrations to enable this feature.',
                'progress': []
            })
        return super().list(request, *args, **kwargs)

# Dashboard View
@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def user_dashboard(request):
    """Get dashboard data for the user"""
    user = request.user
    
    # Basic progress stats
    progress_stats = {
        'total_scans': 0,
        'streak_count': 0,
        'total_lessons': 0,
        'points': 0,
        'user_level': getattr(user, 'current_level', 'beginner'),
    }
    
    # Enhanced stats if models are available
    if MODELS_AVAILABLE:
        try:
            # Recent scans
            recent_scans = OCRScan.objects.filter(user=user).order_by('-created_at')[:5]
            recent_chats = ChatInteraction.objects.filter(user=user).order_by('-created_at')[:10]
            
            # Update stats from user profile
            if hasattr(user, 'profile'):
                progress_stats.update({
                    'total_scans': user.profile.total_scans,
                    'streak_count': user.profile.streak_count,
                    'total_lessons': user.profile.total_lessons_completed,
                    'points': user.profile.points,
                })
            
            response_data = {
                'recent_scans': OCRScanSerializer(recent_scans, many=True).data if SERIALIZERS_AVAILABLE else [],
                'recent_chats': ChatInteractionSerializer(recent_chats, many=True).data if SERIALIZERS_AVAILABLE else [],
                'progress_stats': progress_stats,
                'user_level': user.current_level
            }
            
        except Exception as e:
            print(f"Error fetching dashboard data: {e}")
            response_data = {
                'progress_stats': progress_stats,
                'message': 'Basic dashboard data loaded (some features require migrations)'
            }
    else:
        response_data = {
            'progress_stats': progress_stats,
            'message': 'Basic dashboard data loaded. Run migrations for enhanced features.'
        }
    
    return Response(response_data)

# Health Check
@api_view(['GET'])
def health_check(request):
    """
    Health check endpoint
    """
    services = {
        'gemini_available': GEMINI_AVAILABLE and bool(settings.GEMINI_API_KEY),
        'openai_available': OPENAI_AVAILABLE and bool(settings.OPENAI_API_KEY),
        'tesseract_available': True,
        'models_available': MODELS_AVAILABLE,
        'serializers_available': SERIALIZERS_AVAILABLE,
    }
    
    return Response({
        'status': 'healthy',
        'service': 'Ilmeen Backend API',
        'version': '1.0.0',
        'ai_services': services
    })
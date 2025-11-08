import React, { useState, useRef } from 'react';
import { Camera, Upload, Mic, Volume2, VolumeX, FileText, Play, Square, Trash2, X } from 'lucide-react';

type PageType = 
  | 'landing' 
  | 'dashboard' 
  | 'scanner' 
  | 'analysis' 
  | 'audio' 
  | 'grammar' 
  | 'progress' 
  | 'library' 
  | 'settings'
  | 'practice'
  | 'challenges'
  | 'memorization'
  | 'tafsir';

interface ScannerProps {
  onNavigate: (page: PageType) => void;
}

export const Scanner: React.FC<ScannerProps> = ({ onNavigate }) => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysis, setAnalysis] = useState<string>('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [arabicText, setArabicText] = useState<string>('');
  const [recordedAudio, setRecordedAudio] = useState<{ blob: Blob; url: string } | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  const groqApiUrl = "https://api.groq.com/openai/v1/chat/completions";
  const groqVoiceApiUrl = "https://api.groq.com/openai/v1/audio/transcriptions";
  const model = "llama-3.3-70b-versatile";
  const voiceModel = "whisper-large-v3";
  const pdfVisionModel = "llama-3.2-90b-vision-preview";

  const universalPrompt = `You are an Arabic language learning assistant that helps students understand Arabic text using English and Yoruba explanations.

CURRENT ARABIC TEXT:
"""
${arabicText || 'No text uploaded yet'}
"""

YOUR CAPABILITIES:
1. Translate Arabic to English and Yoruba
2. Explain Arabic grammar (verb forms, cases, sentence structure, particles)
3. Define individual words with trilingual meanings (Arabic → English → Yoruba)
4. Provide pronunciation guidance using transliteration
5. Explain cultural and religious context when relevant
6. Answer general Arabic language questions
7. Break down complex sentences word-by-word

HOW TO RESPOND:
- Answer the user's question directly and specifically
- If they ask about the text above, reference it
- If they ask "explain", provide: translation (English + Yoruba) + grammar analysis + key vocabulary
- If they ask about a specific word, give its meaning in both languages
- If they ask about pronunciation, use English transliteration (e.g., "as-salaam" for السلام)
- If they ask about grammar, explain the rule with examples
- Keep responses clear, educational, and encouraging
- Use simple language suitable for learners

User's question: ${userQuestion}`;

  const handleTakePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      alert('Camera access denied or not available');
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(video, 0, 0);
      const imageData = canvas.toDataURL('image/jpeg');
      setCapturedImage(imageData);
      
      // Stop camera
      const stream = video.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
      
      processImage(imageData);
    }
  };

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setUploadedFile(file);
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageData = e.target?.result as string;
          setCapturedImage(imageData);
          processImage(imageData);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const analyzeWithGroq = async (content: string, type: 'image' | 'text', prompt?: string) => {
    if (!apiKey) {
      return 'API key not found. Please check your environment variables.';
    }

    try {
      const requestBody = {
        model: type === 'image' ? pdfVisionModel : model,
        messages: [{
          role: 'user',
          content: type === 'image' 
            ? [{ type: 'text', text: prompt || 'Analyze this image and extract any Arabic text, then explain it in detail.' }, { type: 'image_url', image_url: { url: content } }]
            : prompt || universalPrompt
        }],
        max_tokens: 1000,
        temperature: 0.7
      };

      console.log('Sending request to Groq API:', { type, hasContent: !!content, promptLength: prompt?.length });

      const response = await fetch(groqApiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      return data.choices?.[0]?.message?.content || 'No analysis available.';
    } catch (error) {
      console.error('Groq API Error:', error);
      if (error instanceof Error) {
        return `Error: ${error.message}. Please check your connection and try again.`;
      }
      return 'Error analyzing content. Please check your API key and try again.';
    }
  };

  const processImage = async (imageData: string) => {
    setIsProcessing(true);
    const result = await analyzeWithGroq(imageData, 'image');
    setAnalysis(result);
    setIsProcessing(false);
  };

  const processText = async (text: string) => {
    setIsProcessing(true);
    setArabicText(text);
    const result = await analyzeWithGroq(text, 'text', universalPrompt);
    setAnalysis(result);
    setIsProcessing(false);
  };

  const processPDF = async (pdfFile: File) => {
    setIsProcessing(true);
    try {
      // For now, treat PDF as a text analysis request since direct PDF processing may be too large
      const result = await analyzeWithGroq('', 'text', `I have uploaded a PDF file named "${pdfFile.name}". Please provide guidance on how to analyze Arabic text from PDF documents, including:

1. Best practices for extracting Arabic text from PDFs
2. Common Arabic grammar patterns to look for
3. Translation techniques for Arabic to English and Yoruba
4. Vocabulary analysis methods

Please provide educational content about Arabic language learning from PDF sources.`);
      setAnalysis(result);
      setIsProcessing(false);
    } catch (error) {
      console.error('PDF processing error:', error);
      setAnalysis('Error processing PDF. The file may be too large or in an unsupported format. Please try extracting the text manually and pasting it in the text area below.');
      setIsProcessing(false);
    }
  };

  const processAudio = async (audioFile: File) => {
    setIsProcessing(true);
    console.log('Starting audio processing...');
    
    try {
      const formData = new FormData();
      formData.append('file', audioFile, audioFile.name);
      formData.append('model', voiceModel);
      formData.append('response_format', 'json');
      
      console.log('Sending audio to Groq API...');
      
      const response = await fetch(groqVoiceApiUrl, {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${apiKey}`
        },
        body: formData
      });
      
      console.log('Audio API response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Audio API Error Response:', errorText);
        throw new Error(`Audio API Error: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      console.log('Transcription result:', data);
      
      const transcribedText = data.text || 'No transcription available.';
      console.log('Transcribed text:', transcribedText);
      
      // Set the transcribed text as Arabic text for context
      setArabicText(transcribedText);
      
      // Create a custom prompt for voice questions
      const voicePrompt = `You are an Arabic language learning assistant. The user asked via voice: "${transcribedText}"

Please provide a helpful response about Arabic language learning. If they asked about a specific word or phrase:
1. Provide the Arabic translation
2. Give the English meaning
3. Provide the Yoruba translation if possible
4. Explain pronunciation using transliteration
5. Give grammar context if relevant

Be educational and encouraging in your response.`;
      
      const result = await analyzeWithGroq(transcribedText, 'text', voicePrompt);
      setAnalysis(result);
      setIsProcessing(false);
    } catch (error) {
      console.error('Audio processing error:', error);
      setAnalysis(`Error processing audio: ${error instanceof Error ? error.message : 'Unknown error'}. Please check your connection and try again.`);
      setIsProcessing(false);
    }
  };

  const handleQuestionSubmit = async () => {
    if (!userQuestion.trim()) return;
    
    setIsProcessing(true);
    const result = await analyzeWithGroq('', 'text', universalPrompt);
    setAnalysis(result);
    setIsProcessing(false);
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(analysis);
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
        
        // Store recorded audio for preview
        setRecordedAudio({ blob: audioBlob, url: audioUrl });
      };
      
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      alert('Microphone access denied');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        {/* Main Scanner Area */}
        <div className="text-center mb-8">
          {!capturedImage ? (
            <div className="bg-gray-800 rounded-2xl p-12 mb-6 border-2 border-dashed border-gray-600">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Position your textbook</h1>
              <p className="text-gray-400">Ensure the text is clear and well-lit</p>
              
              {/* Camera Video */}
              <video 
                ref={videoRef} 
                className="w-full max-w-md mx-auto mt-4 rounded-lg" 
                style={{ display: videoRef.current?.srcObject ? 'block' : 'none' }}
              />
              <canvas ref={canvasRef} style={{ display: 'none' }} />
            </div>
          ) : (
            <div className="bg-gray-800 rounded-2xl p-6 mb-6">
              <div className="relative">
                <img src={capturedImage} alt="Captured" className="w-full max-w-md mx-auto rounded-lg mb-4" />
                <button
                  onClick={() => setCapturedImage(null)}
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {isProcessing ? (
                <div className="text-white">
                  <div className="animate-spin w-8 h-8 border-4 border-teal-400 border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p>Processing image...</p>
                </div>
              ) : (
                <p className="text-green-400">✓ Text detected and analyzed</p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {!capturedImage && (
              <>
                {videoRef.current?.srcObject ? (
                  <button onClick={capturePhoto} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2">
                    <Camera className="w-5 h-5" /> Capture
                  </button>
                ) : (
                  <button onClick={handleTakePhoto} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2">
                    <Camera className="w-5 h-5" /> Camera
                  </button>
                )}
                <button onClick={() => fileInputRef.current?.click()} className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2">
                  <Upload className="w-5 h-5" /> Upload
                </button>
              </>
            )}
            

            
            <button 
              onClick={isRecording ? stopRecording : startRecording}
              className={`${isRecording ? 'bg-red-600 hover:bg-red-700 animate-pulse' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2`}
            >
              {isRecording ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              {isRecording ? 'Stop Recording' : 'Record Voice'}
            </button>
          </div>
          
          <input ref={fileInputRef} type="file" accept="image/*,application/pdf" onChange={handleUploadImage} className="hidden" />

        </div>

        {/* Audio Recording Section */}
        {recordedAudio && (
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Voice Recording Ready</h2>
              <button
                onClick={() => {
                  URL.revokeObjectURL(recordedAudio.url);
                  setRecordedAudio(null);
                }}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="mb-4">
              <audio 
                controls 
                src={recordedAudio.url}
                className="w-full mb-4"
                style={{ filter: 'invert(1)' }}
              >
                Your browser does not support the audio element.
              </audio>
            </div>
            <button
              onClick={async () => {
                const audioFile = new File([recordedAudio.blob], 'voice-recording.wav', { type: 'audio/wav' });
                console.log('Processing audio file:', audioFile.name, audioFile.size, 'bytes');
                await processAudio(audioFile);
              }}
              disabled={isProcessing}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4" />
              {isProcessing ? 'Processing...' : 'Analyze Audio'}
            </button>
          </div>
        )}

        {/* PDF Analysis Section */}
        {uploadedFile && (
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">PDF Ready for Analysis</h2>
              <button
                onClick={() => setUploadedFile(null)}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-300 mb-4">File: {uploadedFile.name}</p>
            <button
              onClick={() => processPDF(uploadedFile)}
              disabled={isProcessing}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Analyze PDF
            </button>
          </div>
        )}



        {/* Text Input Section */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6" /> Arabic Text Analysis
          </h2>
          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Paste your Arabic text here for analysis..."
            className="w-full h-32 p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-teal-400 focus:outline-none resize-none mb-4"
          />
          <button
            onClick={() => textInput.trim() && processText(textInput)}
            disabled={!textInput.trim() || isProcessing}
            className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Analyze Text
          </button>
        </div>

        {/* Question Input Section */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Ask a Question</h2>
          <textarea
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            placeholder="Ask about Arabic grammar, vocabulary, pronunciation, or any specific question..."
            className="w-full h-24 p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-teal-400 focus:outline-none resize-none mb-4"
          />
          <button
            onClick={handleQuestionSubmit}
            disabled={!userQuestion.trim() || isProcessing}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Get Answer
          </button>
        </div>

        {/* Analysis Results */}
        {analysis && (
          <div className="bg-white rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">AI Analysis</h2>
              <button
                onClick={toggleSpeech}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                {isSpeaking ? 'Stop' : 'Read Aloud'}
              </button>
            </div>
            <div className="text-gray-700 whitespace-pre-wrap">{analysis}</div>
          </div>
        )}
      </div>
    </div>
  );
};
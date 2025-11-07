import React, { useState, useRef } from 'react';
import { Camera, Upload } from 'lucide-react';

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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        setCapturedImage(imageData);
        processImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = (_imageData: string) => {
    setIsProcessing(true);
    
    // Simulate OCR processing
    setTimeout(() => {
      setIsProcessing(false);
      // Read out the detected text
      const utterance = new SpeechSynthesisUtterance('Arabic text detected: الحمد لله رب العالمين');
      utterance.lang = 'ar';
      speechSynthesis.speak(utterance);
      
      // Navigate to analysis after processing
      setTimeout(() => onNavigate('analysis'), 2000);
    }, 3000);
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
              <img src={capturedImage} alt="Captured" className="w-full max-w-md mx-auto rounded-lg mb-4" />
              {isProcessing ? (
                <div className="text-white">
                  <div className="animate-spin w-8 h-8 border-4 border-teal-400 border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p>Processing image...</p>
                </div>
              ) : (
                <p className="text-green-400">✓ Text detected and read aloud</p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          {!capturedImage && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {videoRef.current?.srcObject ? (
                <button
                  onClick={capturePhoto}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Camera className="w-5 h-5" />
                  <span>Capture Photo</span>
                </button>
              ) : (
                <button
                  onClick={handleTakePhoto}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Camera className="w-5 h-5" />
                  <span>Take Photo</span>
                </button>
              )}
              
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              >
                <Upload className="w-5 h-5" />
                <span>Upload Image</span>
              </button>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleUploadImage}
                className="hidden"
              />
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📸</span>
            <span>Tips for Best Results</span>
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Use good lighting - natural light works best</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Keep the camera steady and parallel to the page</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Ensure text is in focus and not blurry</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Avoid shadows and glare on the page</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Capture one page at a time for best accuracy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
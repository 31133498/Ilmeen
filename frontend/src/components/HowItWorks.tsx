import React, { useState, useEffect } from 'react';
import { Camera, Bot, Sparkles, Headphones, Globe } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    {
      title: "Scan Your Page",
      description: "Point your camera at any Arabic text",
      icon: Camera,
      mockup: <ScanMockup />
    },
    {
      title: "AI Recognizes Text", 
      description: "Advanced OCR detects Arabic with 99% accuracy",
      icon: Bot,
      mockup: <RecognitionMockup />
    },
    {
      title: "Add Vowel Marks",
      description: "Automatic diacritization enhances readability", 
      icon: Sparkles,
      mockup: <DiacriticsMockup />
    },
    {
      title: "Hear It Read Aloud",
      description: "Native pronunciation with adjustable speed",
      icon: Headphones, 
      mockup: <AudioMockup />
    },
    {
      title: "Learn in Your Language",
      description: "Translations in English and Yoruba",
      icon: Globe,
      mockup: <TranslationMockup />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works: Technology Meets Faith
          </h2>
          <p className="text-teal-200 text-lg max-w-2xl mx-auto">
            Experience the seamless journey from scanning to understanding Arabic text
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    {steps[activeStep].mockup}
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-[3.5rem] opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Steps Navigation */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-white text-teal-900 shadow-xl scale-105'
                      : 'bg-teal-800/50 text-white hover:bg-teal-700/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${
                      activeStep === index ? 'bg-teal-100' : 'bg-teal-700'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className={`${activeStep === index ? 'text-teal-700' : 'text-teal-200'}`}>
                        {step.description}
                      </p>
                    </div>
                    <div className={`ml-auto text-2xl transition-transform ${
                      activeStep === index ? 'rotate-90' : ''
                    }`}>
                      →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index ? 'bg-yellow-400 w-8' : 'bg-teal-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ScanMockup: React.FC = () => (
  <div className="h-full bg-gray-900 flex flex-col items-center justify-center relative">
    <div className="absolute top-4 left-4 right-4 bg-black/50 text-white p-3 rounded-lg text-center">
      <p className="text-sm">Position your textbook</p>
    </div>
    
    <div className="relative">
      <div className="w-48 h-32 border-2 border-yellow-400 rounded-lg bg-white/10 flex items-center justify-center">
        <div className="text-right text-lg" style={{fontFamily: 'Amiri, serif'}}>
          الحمد لله رب العالمين
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-yellow-400 rounded-lg animate-pulse"></div>
    </div>
    
    <div className="mt-6 flex items-center gap-2 text-white">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <span className="text-sm">Scanning...</span>
    </div>
  </div>
);

const RecognitionMockup: React.FC = () => (
  <div className="h-full bg-white p-6 flex flex-col">
    <div className="bg-teal-50 p-4 rounded-lg mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-teal-600">AI Recognition</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">99% Accuracy</span>
      </div>
      <div className="text-right text-xl mb-2" style={{fontFamily: 'Amiri, serif'}}>
        الحمد لله رب العالمين
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-teal-600 h-2 rounded-full w-full animate-pulse"></div>
      </div>
    </div>
    
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-sm text-gray-600">Text detected</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-sm text-gray-600">Language: Arabic</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-gray-600">Processing...</span>
      </div>
    </div>
  </div>
);

const DiacriticsMockup: React.FC = () => (
  <div className="h-full bg-white p-6 flex flex-col">
    <h3 className="text-lg font-bold text-gray-800 mb-4">Adding Diacritics</h3>
    
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-xs text-gray-500 mb-2">Before</p>
        <div className="text-right text-lg opacity-60" style={{fontFamily: 'Amiri, serif'}}>
          الحمد لله رب العالمين
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="text-2xl animate-bounce">↓</div>
      </div>
      
      <div className="bg-teal-50 p-4 rounded-lg border-2 border-teal-200">
        <p className="text-xs text-teal-600 mb-2">After</p>
        <div className="text-right text-lg" style={{fontFamily: 'Amiri, serif'}}>
          الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
        </div>
      </div>
    </div>
    
    <div className="mt-4 flex items-center gap-2">
      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">✨ Enhanced</span>
    </div>
  </div>
);

const AudioMockup: React.FC = () => (
  <div className="h-full bg-white p-6 flex flex-col">
    <div className="text-center mb-6">
      <div className="text-right text-xl mb-4" style={{fontFamily: 'Amiri, serif'}}>
        الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
      </div>
    </div>
    
    <div className="bg-teal-50 p-6 rounded-xl text-center">
      <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-teal-700 transition-colors">
        <span className="text-white text-2xl">▶️</span>
      </div>
      
      <div className="flex items-center justify-center gap-1 mb-4">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`w-1 bg-teal-400 rounded-full animate-pulse`}
            style={{
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
      
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>0:00</span>
        <span>0:15</span>
      </div>
      
      <div className="flex justify-center gap-2">
        <button className="bg-gray-200 px-3 py-1 rounded-full text-xs">0.5x</button>
        <button className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs">1x</button>
        <button className="bg-gray-200 px-3 py-1 rounded-full text-xs">1.5x</button>
      </div>
    </div>
  </div>
);

const TranslationMockup: React.FC = () => (
  <div className="h-full bg-white p-6 flex flex-col">
    <div className="text-center mb-4">
      <div className="text-right text-lg mb-2" style={{fontFamily: 'Amiri, serif'}}>
        الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">🇬🇧 English</span>
        </div>
        <p className="text-sm text-gray-800">
          "All praise is due to Allah, Lord of the worlds"
        </p>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">🇳🇬 Yorùbá</span>
        </div>
        <p className="text-sm text-gray-800">
          "Gbogbo ìyìn jẹ́ ti Ọlọ́hun, Olúwa àwọn ìhín gbogbo"
        </p>
      </div>
      
      <div className="bg-yellow-50 p-3 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">💡 Grammar</span>
        </div>
        <p className="text-xs text-gray-600 mt-1">
          الْحَمْدُ - Nominative case, definite article
        </p>
      </div>
    </div>
  </div>
);
import React, { useState } from 'react';
import { Mic, Play, Pause, RotateCcw, Volume2, Zap } from 'lucide-react';

export const Practice: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [selectedWord, setSelectedWord] = useState<number | null>(null);

  const arabicText = "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ";
  const words = arabicText.split(' ');

  const tajweedColors = {
    ghunnah: 'bg-green-200 text-green-800',
    idgham: 'bg-blue-200 text-blue-800',
    ikhfa: 'bg-yellow-200 text-yellow-800',
    iqlab: 'bg-purple-200 text-purple-800'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Practice & Learning</h1>

        {/* Arabic Text with Tajweed */}
        <div className="bg-white p-8 rounded-xl mb-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Tajweed Practice</h2>
          <div className="text-3xl leading-relaxed mb-6" style={{fontFamily: 'Amiri, serif'}} dir="rtl">
            {words.map((word, index) => (
              <span
                key={index}
                onClick={() => setSelectedWord(index)}
                className={`cursor-pointer px-2 py-1 rounded transition-colors ${
                  selectedWord === index ? 'bg-teal-100 text-teal-800' : 'hover:bg-gray-100'
                } ${index === 1 ? tajweedColors.ghunnah : index === 3 ? tajweedColors.idgham : ''}`}
              >
                {word}
              </span>
            ))}
          </div>
          
          {/* Tajweed Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-200 rounded"></div>
              <span className="text-sm">Ghunnah</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-200 rounded"></div>
              <span className="text-sm">Idgham</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-200 rounded"></div>
              <span className="text-sm">Ikhfa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-200 rounded"></div>
              <span className="text-sm">Iqlab</span>
            </div>
          </div>
        </div>

        {/* Practice Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Repeat After Me */}
          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Mic className="w-5 h-5" />
              Repeat After Me
            </h3>
            <div className="space-y-4">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  isRecording 
                    ? 'bg-red-600 text-white' 
                    : 'bg-teal-600 hover:bg-teal-700 text-white'
                }`}
              >
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </button>
              
              {isRecording && (
                <div className="flex items-center justify-center gap-2 text-red-600">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                  <span className="text-sm">Recording...</span>
                </div>
              )}
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Pronunciation Score</span>
                  <span className="text-sm font-semibold text-green-600">85%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Speed Control */}
          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Speed Control
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button className="p-2 text-gray-600 hover:text-teal-600 transition-colors">
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Speed: {speed}x</span>
                  <span>For {speed < 1 ? 'Beginners' : speed === 1 ? 'Normal' : 'Advanced'}</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.25"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0.5x</span>
                  <span>1x</span>
                  <span>2x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Word Analysis */}
        {selectedWord !== null && (
          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Word Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2" style={{fontFamily: 'Amiri, serif'}}>
                  {words[selectedWord]}
                </div>
                <button className="flex items-center justify-center gap-2 mx-auto text-teal-600 hover:text-teal-700">
                  <Volume2 className="w-4 h-4" />
                  <span className="text-sm">Play Word</span>
                </button>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Root Analysis</h4>
                <p className="text-sm text-gray-600 mb-1">Root: ح-م-د</p>
                <p className="text-sm text-gray-600">Meaning: To praise</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Related Words</h4>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">حَمِدَ - He praised</p>
                  <p className="text-sm text-gray-600">مَحْمُود - Praised</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
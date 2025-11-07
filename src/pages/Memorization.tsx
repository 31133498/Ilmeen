import React, { useState } from 'react';
import { Eye, EyeOff, SkipForward, RotateCcw, BookOpen, Target } from 'lucide-react';

export const Memorization: React.FC = () => {
  const [showDiacritics, setShowDiacritics] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [memorizationMode, setMemorizationMode] = useState<'progressive' | 'line-by-line'>('progressive');

  const verses = [
    {
      withDiacritics: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      withoutDiacritics: "الحمد لله رب العالمين",
      translation: "All praise is due to Allah, Lord of the worlds"
    },
    {
      withDiacritics: "الرَّحْمَٰنِ الرَّحِيمِ",
      withoutDiacritics: "الرحمن الرحيم", 
      translation: "The Most Gracious, the Most Merciful"
    },
    {
      withDiacritics: "مَالِكِ يَوْمِ الدِّينِ",
      withoutDiacritics: "مالك يوم الدين",
      translation: "Master of the Day of Judgment"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Memorization Practice</h1>

        {/* Mode Selection */}
        <div className="bg-white p-6 rounded-xl mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Memorization Mode</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setMemorizationMode('progressive')}
              className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                memorizationMode === 'progressive'
                  ? 'border-teal-500 bg-teal-50 text-teal-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Target className="w-6 h-6 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Progressive Mode</h3>
              <p className="text-sm text-gray-600">Hide diacritics gradually as you improve</p>
            </button>
            
            <button
              onClick={() => setMemorizationMode('line-by-line')}
              className={`flex-1 p-4 rounded-lg border-2 transition-colors ${
                memorizationMode === 'line-by-line'
                  ? 'border-teal-500 bg-teal-50 text-teal-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <BookOpen className="w-6 h-6 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Line by Line</h3>
              <p className="text-sm text-gray-600">Focus on one verse at a time</p>
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white p-6 rounded-xl mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowDiacritics(!showDiacritics)}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                {showDiacritics ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showDiacritics ? 'Hide Diacritics' : 'Show Diacritics'}
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>

            {memorizationMode === 'line-by-line' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentLine(Math.max(0, currentLine - 1))}
                  disabled={currentLine === 0}
                  className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-sm text-gray-600">
                  {currentLine + 1} / {verses.length}
                </span>
                <button
                  onClick={() => setCurrentLine(Math.min(verses.length - 1, currentLine + 1))}
                  disabled={currentLine === verses.length - 1}
                  className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Text Display */}
        <div className="bg-white p-8 rounded-xl mb-8">
          {memorizationMode === 'progressive' ? (
            <div className="space-y-6">
              {verses.map((verse, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-2xl leading-relaxed mb-2"
                    style={{fontFamily: 'Amiri, serif'}}
                    dir="rtl"
                  >
                    {showDiacritics ? verse.withDiacritics : verse.withoutDiacritics}
                  </div>
                  <div className="text-sm text-gray-600 italic">
                    {verse.translation}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <div 
                className="text-3xl leading-relaxed mb-4"
                style={{fontFamily: 'Amiri, serif'}}
                dir="rtl"
              >
                {showDiacritics 
                  ? verses[currentLine].withDiacritics 
                  : verses[currentLine].withoutDiacritics
                }
              </div>
              <div className="text-lg text-gray-600 italic mb-6">
                {verses[currentLine].translation}
              </div>
              
              {/* Progress Indicator */}
              <div className="flex justify-center gap-2">
                {verses.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentLine ? 'bg-teal-600' : 
                      index < currentLine ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Practice Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-2xl font-bold text-teal-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Verses Memorized</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-2xl font-bold text-teal-600 mb-2">85%</div>
            <div className="text-sm text-gray-600">Accuracy Rate</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-2xl font-bold text-teal-600 mb-2">45</div>
            <div className="text-sm text-gray-600">Minutes Today</div>
          </div>
        </div>
      </div>
    </div>
  );
};
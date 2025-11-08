import React, { useState } from 'react';
import { mockTextAnalysis } from '../data/mockData';

export const Audio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(45);
  const [duration] = useState(150);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [selectedTranslation, setSelectedTranslation] = useState<'english' | 'yoruba'>('english');

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Arabic Text Display */}
        <div className="bg-white p-8 rounded-xl mb-8 text-center">
          <div 
            className="text-3xl leading-relaxed mb-6"
            style={{ fontFamily: "'Amiri', serif" }}
            dir="rtl"
          >
            {mockTextAnalysis.withTashkeel}
          </div>
        </div>

        {/* Audio Player Control Panel */}
        <div className="bg-white p-8 rounded-xl mb-8">
          <div className="flex flex-col items-center gap-6">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center text-3xl transition-colors"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>

            {/* Progress Bar */}
            <div className="w-full max-w-md">
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {[0.5, 1, 1.5, 2].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => setPlaybackSpeed(speed)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      playbackSpeed === speed
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
              <button className="p-2 text-gray-600 hover:text-teal-600 transition-colors">
                🔁
              </button>
              <button className="p-2 text-gray-600 hover:text-teal-600 transition-colors">
                📥
              </button>
            </div>
          </div>
        </div>

        {/* Translation Section */}
        <div className="bg-white p-6 rounded-xl mb-8">
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setSelectedTranslation('english')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedTranslation === 'english'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setSelectedTranslation('yoruba')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedTranslation === 'yoruba'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Yorùbá
            </button>
          </div>
          <div className="text-lg leading-relaxed text-gray-800">
            {mockTextAnalysis.translation[selectedTranslation]}
          </div>
        </div>

        {/* Word-by-Word Breakdown */}
        <div className="bg-white p-6 rounded-xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Word-by-Word Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockTextAnalysis.wordBreakdown.map((word, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div 
                    className="text-xl font-semibold"
                    style={{ fontFamily: "'Amiri', serif" }}
                    dir="rtl"
                  >
                    {word.arabic}
                  </div>
                  <button className="text-teal-600 hover:text-teal-700 transition-colors">
                    ▶️
                  </button>
                </div>
                <div className="text-sm text-gray-600 mb-1">{word.transliteration}</div>
                <div className="text-sm text-gray-800">{word.english}</div>
                {selectedTranslation === 'yoruba' && (
                  <div className="text-sm text-gray-600 mt-1">{word.yoruba}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
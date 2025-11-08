import React from 'react';
import { mockTextAnalysis } from '../data/mockData';

type PageType = 
  | 'landing' 
  | 'dashboard' 
  | 'scanner' 
  | 'analysis' 
  | 'audio' 
  | 'grammar' 
  | 'progress' 
  | 'library' 
  | 'settings';

interface AnalysisProps {
  onNavigate: (page: PageType) => void;
}

export const Analysis: React.FC<AnalysisProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Analysis Results</h1>
          <div className="flex gap-3">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors">
              Download
            </button>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
              Save
            </button>
          </div>
        </div>

        {/* Split-Screen Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Original Text */}
          <div className="bg-gray-100 p-6 rounded-xl">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span>📄</span>
              <span>Original Text</span>
            </h2>
            <div 
              className="text-2xl leading-relaxed text-right p-4 bg-white rounded-lg"
              style={{ fontFamily: "'Amiri', serif" }}
              dir="rtl"
            >
              {mockTextAnalysis.original}
            </div>
          </div>

          {/* With Tashkeel */}
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span>✨</span>
              <span>With Tashkeel (Diacritics)</span>
            </h2>
            <div 
              className="text-2xl leading-relaxed text-right p-4 bg-white rounded-lg"
              style={{ fontFamily: "'Amiri', serif" }}
              dir="rtl"
            >
              {mockTextAnalysis.withTashkeel}
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => onNavigate('audio')}
            className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl hover:scale-105 transition-transform duration-200 text-left"
          >
            <div className="text-3xl mb-3">🎧</div>
            <h3 className="text-xl font-bold mb-2">Listen & Translate</h3>
            <p className="text-green-100">Hear pronunciation and get translations</p>
          </button>

          <button
            onClick={() => onNavigate('grammar')}
            className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl hover:scale-105 transition-transform duration-200 text-left"
          >
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-xl font-bold mb-2">Grammar Analysis</h3>
            <p className="text-orange-100">Deep dive into Nahw, Sarf & Loghat</p>
          </button>

          <button className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl hover:scale-105 transition-transform duration-200 text-left">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="text-xl font-bold mb-2">Practice Quiz</h3>
            <p className="text-purple-100">Test your understanding</p>
          </button>
        </div>
      </div>
    </div>
  );
};
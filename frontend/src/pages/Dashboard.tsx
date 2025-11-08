import React from 'react';
import { Camera, Headphones, BookOpen, BarChart3 } from 'lucide-react';
import { mockUser, mockStatistics, mockRecentActivity, mockGrammarProgress } from '../data/mockData';

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

interface DashboardProps {
  onNavigate: (page: PageType) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {mockUser.name}! 👋
          </h1>
          <p className="text-gray-600">Continue your Arabic learning journey</p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <button
            onClick={() => onNavigate('scanner')}
            className="bg-teal-600 text-white p-6 rounded-xl hover:bg-teal-700 transition-colors duration-200 text-left"
          >
            <Camera className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Scan New Text</h3>
            <p className="text-teal-100">Capture Arabic text instantly</p>
          </button>

          <button
            onClick={() => onNavigate('practice')}
            className="bg-teal-600 text-white p-6 rounded-xl hover:bg-teal-700 transition-colors duration-200 text-left"
          >
            <Headphones className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Practice Mode</h3>
            <p className="text-teal-100">Tajweed & pronunciation practice</p>
          </button>

          <button
            onClick={() => onNavigate('memorization')}
            className="bg-teal-600 text-white p-6 rounded-xl hover:bg-teal-700 transition-colors duration-200 text-left"
          >
            <BookOpen className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Memorization</h3>
            <p className="text-teal-100">Hifz practice & learning</p>
          </button>

          <button
            onClick={() => onNavigate('challenges')}
            className="bg-teal-600 text-white p-6 rounded-xl hover:bg-teal-700 transition-colors duration-200 text-left"
          >
            <BarChart3 className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Challenges</h3>
            <p className="text-teal-100">Quizzes & competitions</p>
          </button>
        </div>

        {/* Secondary Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => onNavigate('tafsir')}
            className="bg-white border-2 border-teal-200 text-teal-700 p-4 rounded-xl hover:bg-teal-50 transition-colors duration-200 text-left"
          >
            <BookOpen className="w-6 h-6 mb-2" />
            <h3 className="text-lg font-bold mb-1">Tafsir & Context</h3>
            <p className="text-teal-600 text-sm">Verse interpretations</p>
          </button>

          <button
            onClick={() => onNavigate('audio')}
            className="bg-white border-2 border-teal-200 text-teal-700 p-4 rounded-xl hover:bg-teal-50 transition-colors duration-200 text-left"
          >
            <Headphones className="w-6 h-6 mb-2" />
            <h3 className="text-lg font-bold mb-1">Audio Library</h3>
            <p className="text-teal-600 text-sm">Recitation collection</p>
          </button>

          <button
            onClick={() => onNavigate('grammar')}
            className="bg-white border-2 border-teal-200 text-teal-700 p-4 rounded-xl hover:bg-teal-50 transition-colors duration-200 text-left"
          >
            <BookOpen className="w-6 h-6 mb-2" />
            <h3 className="text-lg font-bold mb-1">Grammar Review</h3>
            <p className="text-teal-600 text-sm">Nahw, Sarf & Loghat</p>
          </button>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-teal-600">{mockStatistics.textsScanned}</div>
            <div className="text-sm text-gray-600">Texts Scanned</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-teal-600">{mockStatistics.hoursStudied}</div>
            <div className="text-sm text-gray-600">Hours Studied</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-teal-600">{mockStatistics.wordsMastered}</div>
            <div className="text-sm text-gray-600">Words Mastered</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="text-2xl font-bold text-teal-600">{mockStatistics.overallCompletion}%</div>
            <div className="text-sm text-gray-600">Overall Completion</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {mockRecentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.timeAgo}</p>
                  </div>
                  <div className="w-24">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${activity.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{activity.progress}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grammar Mastery Panel */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Grammar Mastery</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Nahw (Syntax)</span>
                  <span className="text-sm text-gray-600">{mockGrammarProgress.nahw}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${mockGrammarProgress.nahw}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Sarf (Morphology)</span>
                  <span className="text-sm text-gray-600">{mockGrammarProgress.sarf}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${mockGrammarProgress.sarf}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Loghat (Linguistics)</span>
                  <span className="text-sm text-gray-600">{mockGrammarProgress.loghat}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${mockGrammarProgress.loghat}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
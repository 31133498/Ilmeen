import React from 'react';
import { Flame, Clock, Trophy, Target, Calendar, Award, TrendingUp } from 'lucide-react';
import { mockStatistics, mockGrammarProgress, weeklyActivity, dayLabels } from '../data/mockData';

export const Progress: React.FC = () => {
  const achievements = [
    { title: 'First Text Scanned', icon: Target, earned: true },
    { title: '7-Day Streak', icon: Flame, earned: true },
    { title: '100 Words Mastered', icon: Trophy, earned: true },
    { title: 'Grammar Expert', icon: Award, earned: false },
    { title: 'Speed Reader', icon: TrendingUp, earned: false },
    { title: 'Perfect Week', icon: Calendar, earned: false }
  ];

  const milestones = [
    { date: '2024-01-15', event: 'Started Arabic Learning Journey', type: 'start', icon: Target },
    { date: '2024-01-20', event: 'First 50 Words Mastered', type: 'milestone', icon: Trophy },
    { date: '2024-01-25', event: 'Completed Nahw Basics', type: 'achievement', icon: Award },
    { date: '2024-02-01', event: 'Reached 7-Day Streak', type: 'streak', icon: Flame }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Top Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  strokeDashoffset={`${2 * Math.PI * 36 * (1 - mockStatistics.overallCompletion / 100)}`}
                  className="text-teal-600"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-teal-600">{mockStatistics.overallCompletion}%</span>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900">Overall Completion</h3>
          </div>

          <div className="bg-white p-6 rounded-xl text-center">
            <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-teal-600 mb-1">7</div>
            <h3 className="font-semibold text-gray-900">Current Streak</h3>
          </div>

          <div className="bg-white p-6 rounded-xl text-center">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-teal-600 mb-1">12</div>
            <h3 className="font-semibold text-gray-900">Hours This Week</h3>
          </div>

          <div className="bg-white p-6 rounded-xl text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-teal-600 mb-1">15</div>
            <h3 className="font-semibold text-gray-900">Achievements</h3>
          </div>
        </div>

        {/* Weekly Activity Graph */}
        <div className="bg-white p-6 rounded-xl mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Activity</h2>
          <div className="flex items-end justify-between h-40 gap-2">
            {weeklyActivity.map((value, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className="bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-lg w-full transition-all duration-500 hover:from-teal-600 hover:to-teal-500"
                  style={{ height: `${(value / 100) * 100}%` }}
                />
                <div className="text-xs text-gray-600 mt-2">{dayLabels[index]}</div>
                <div className="text-xs font-semibold text-gray-800">{value}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Grammar Mastery Section */}
          <div className="bg-white p-6 rounded-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Grammar Mastery</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">Nahw (Syntax)</h3>
                    <p className="text-sm text-gray-600">Topics completed: 12/25 • Level: Intermediate</p>
                  </div>
                  <span className="text-lg font-bold text-orange-600">{mockGrammarProgress.nahw}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${mockGrammarProgress.nahw}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Next milestone: Conditional Sentences</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">Sarf (Morphology)</h3>
                    <p className="text-sm text-gray-600">Forms mastered: 7/10 • Level: Advanced</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">{mockGrammarProgress.sarf}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${mockGrammarProgress.sarf}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Next milestone: Irregular Verbs</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">Loghat (Linguistics)</h3>
                    <p className="text-sm text-gray-600">Vocabulary: 342 words • Level: Beginner-Intermediate</p>
                  </div>
                  <span className="text-lg font-bold text-purple-600">{mockGrammarProgress.loghat}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${mockGrammarProgress.loghat}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Next milestone: 500 Words</p>
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white p-6 rounded-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Achievements</h2>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border-2 text-center transition-all duration-200 ${
                      achievement.earned 
                        ? 'border-teal-200 bg-teal-50 hover:bg-teal-100' 
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}
                  >
                    <IconComponent className={`w-6 h-6 mx-auto mb-2 ${
                      achievement.earned ? 'text-teal-600' : 'text-gray-400'
                    }`} />
                    <h3 className="text-sm font-semibold text-gray-900">{achievement.title}</h3>
                    {achievement.earned && (
                      <div className="text-xs text-teal-600 mt-1">✓ Earned</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline/History */}
        <div className="bg-white p-6 rounded-xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Learning Timeline</h2>
          <div className="space-y-4">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${
                    milestone.type === 'start' ? 'bg-blue-100' :
                    milestone.type === 'milestone' ? 'bg-green-100' :
                    milestone.type === 'achievement' ? 'bg-yellow-100' :
                    'bg-red-100'
                  }`}>
                    <IconComponent className={`w-4 h-4 ${
                      milestone.type === 'start' ? 'text-blue-600' :
                      milestone.type === 'milestone' ? 'text-green-600' :
                      milestone.type === 'achievement' ? 'text-yellow-600' :
                      'text-red-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{milestone.event}</h3>
                    <p className="text-sm text-gray-600">{milestone.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
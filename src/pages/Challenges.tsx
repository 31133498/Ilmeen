import React, { useState } from 'react';
import { Trophy, Users, Clock, Target, Star, Play, CheckCircle } from 'lucide-react';

export const Challenges: React.FC = () => {
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const challenges = [
    {
      id: 1,
      title: "Daily Vocabulary",
      description: "Learn 5 new Arabic words",
      progress: 3,
      total: 5,
      timeLeft: "2h 30m",
      reward: "50 XP",
      type: "daily"
    },
    {
      id: 2,
      title: "Pronunciation Master",
      description: "Perfect pronunciation on 10 verses",
      progress: 7,
      total: 10,
      timeLeft: "5 days",
      reward: "Achievement Badge",
      type: "weekly"
    },
    {
      id: 3,
      title: "Tajweed Expert",
      description: "Identify tajweed rules correctly",
      progress: 15,
      total: 20,
      timeLeft: "12 days",
      reward: "Premium Feature",
      type: "monthly"
    }
  ];

  const quiz = {
    question: "What is the meaning of 'الْحَمْدُ'?",
    arabicText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    options: [
      "Peace",
      "Praise",
      "Prayer", 
      "Power"
    ],
    correct: 1
  };

  const leaderboard = [
    { rank: 1, name: "Ahmed", score: 2450, avatar: "A" },
    { rank: 2, name: "Fatima", score: 2380, avatar: "F" },
    { rank: 3, name: "Omar", score: 2250, avatar: "O" },
    { rank: 4, name: "You", score: 2100, avatar: "Y", isUser: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Challenges & Quizzes</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Challenges */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Challenges</h2>
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">{challenge.title}</h3>
                        <p className="text-sm text-gray-600">{challenge.description}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        challenge.type === 'daily' ? 'bg-green-100 text-green-800' :
                        challenge.type === 'weekly' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {challenge.type}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex-1 mr-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{challenge.progress}/{challenge.total}</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {challenge.timeLeft}
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="w-4 h-4" />
                          {challenge.reward}
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm">
                        Continue
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Quiz */}
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Quiz</h2>
              
              <div className="text-center mb-6">
                <div 
                  className="text-2xl mb-4"
                  style={{fontFamily: 'Amiri, serif'}}
                  dir="rtl"
                >
                  {quiz.arabicText}
                </div>
                <p className="text-lg text-gray-700">{quiz.question}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {quiz.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAnswer(index)}
                    className={`p-4 text-left border-2 rounded-lg transition-colors ${
                      selectedAnswer === index
                        ? selectedAnswer === quiz.correct
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : 'border-red-500 bg-red-50 text-red-800'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {selectedAnswer === index && (
                        <CheckCircle className={`w-5 h-5 ${
                          selectedAnswer === quiz.correct ? 'text-green-600' : 'text-red-600'
                        }`} />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {selectedAnswer !== null && (
                <div className="text-center">
                  <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                    Next Question
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Leaderboard
              </h3>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div 
                    key={user.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      user.isUser ? 'bg-teal-50 border border-teal-200' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                      user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                      user.rank === 3 ? 'bg-orange-100 text-orange-800' :
                      'bg-teal-100 text-teal-800'
                    }`}>
                      {user.rank}
                    </div>
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm text-gray-600">{user.score} XP</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Circle */}
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                Study Circle
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    SC
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Surah Al-Fatiha Circle</div>
                    <div className="text-sm text-gray-600">5 members • Active now</div>
                  </div>
                </div>
                <button className="w-full py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Join Study Circle
                </button>
              </div>
            </div>

            {/* Daily Streak */}
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-bold text-teal-600 mb-1">7</div>
              <div className="text-sm text-gray-600">Day Streak</div>
              <div className="mt-3 text-xs text-gray-500">
                Keep it up! You're on fire!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
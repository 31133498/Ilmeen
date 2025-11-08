import React, { useState } from 'react';
import { BookOpen, Search, Bookmark, MessageSquare, ExternalLink } from 'lucide-react';

export const Tafsir: React.FC = () => {
  const [selectedVerse, setSelectedVerse] = useState(0);
  const [activeTab, setActiveTab] = useState<'tafsir' | 'context' | 'notes'>('tafsir');

  const verses = [
    {
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "All praise is due to Allah, Lord of the worlds",
      tafsir: "This opening verse establishes the fundamental principle of praising Allah. The word 'الحمد' encompasses all forms of praise, gratitude, and commendation. 'رب العالمين' indicates Allah's lordship over all creation, emphasizing His sovereignty and care for all beings.",
      wordAnalysis: [
        { word: "الْحَمْدُ", root: "ح-م-د", meaning: "Praise, gratitude" },
        { word: "لِلَّهِ", root: "أ-ل-ه", meaning: "To Allah" },
        { word: "رَبِّ", root: "ر-ب-ب", meaning: "Lord, Sustainer" },
        { word: "الْعَالَمِينَ", root: "ع-ل-م", meaning: "The worlds, all creation" }
      ],
      contextualVerses: [
        "وَلِلَّهِ الْحَمْدُ رَبِّ السَّمَاوَاتِ وَرَبِّ الْأَرْضِ رَبِّ الْعَالَمِينَ",
        "فَلِلَّهِ الْحَمْدُ رَبِّ السَّمَاوَاتِ وَرَبِّ الْأَرْضِ"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Tafsir & Context</h1>

        {/* Verse Selection */}
        <div className="bg-white p-6 rounded-xl mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search verses or topics..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          
          <div className="text-center">
            <div 
              className="text-3xl leading-relaxed mb-4 cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
              style={{fontFamily: 'Amiri, serif'}}
              dir="rtl"
            >
              {verses[selectedVerse].arabic}
            </div>
            <div className="text-lg text-gray-600 italic">
              {verses[selectedVerse].translation}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('tafsir')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'tafsir'
                  ? 'bg-teal-50 text-teal-700 border-b-2 border-teal-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <BookOpen className="w-5 h-5 mx-auto mb-1" />
              Tafsir
            </button>
            <button
              onClick={() => setActiveTab('context')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'context'
                  ? 'bg-teal-50 text-teal-700 border-b-2 border-teal-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <ExternalLink className="w-5 h-5 mx-auto mb-1" />
              Context
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'notes'
                  ? 'bg-teal-50 text-teal-700 border-b-2 border-teal-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <MessageSquare className="w-5 h-5 mx-auto mb-1" />
              Notes
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'tafsir' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Interpretation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {verses[selectedVerse].tafsir}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Word Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {verses[selectedVerse].wordAnalysis.map((word, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-xl mb-2" style={{fontFamily: 'Amiri, serif'}} dir="rtl">
                          {word.word}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">Root: {word.root}</div>
                        <div className="text-sm text-gray-800">{word.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'context' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Related Verses</h3>
                  <p className="text-gray-600 mb-4">
                    Similar phrases and concepts found elsewhere in the Qur'an:
                  </p>
                  <div className="space-y-4">
                    {verses[selectedVerse].contextualVerses.map((verse, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div 
                          className="text-lg mb-2"
                          style={{fontFamily: 'Amiri, serif'}}
                          dir="rtl"
                        >
                          {verse}
                        </div>
                        <div className="text-sm text-gray-600">
                          Surah {index + 2}, Verse {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Historical Context</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This verse was revealed as part of Surah Al-Fatiha, which serves as the opening chapter of the Qur'an. 
                    It establishes the fundamental relationship between the believer and Allah, emphasizing gratitude and recognition of divine sovereignty.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">Personal Notes</h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                    <Bookmark className="w-4 h-4" />
                    Bookmark
                  </button>
                </div>

                <textarea
                  placeholder="Add your personal notes and reflections..."
                  className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                />

                <div className="space-y-3">
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-gray-800">
                          "This verse reminds me to start each day with gratitude..."
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Added 2 days ago</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
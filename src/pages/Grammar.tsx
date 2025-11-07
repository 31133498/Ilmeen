import React from 'react';
import { mockGrammarAnalysis, mockTextAnalysis } from '../data/mockData';

export const Grammar: React.FC = () => {
  const analysis = mockGrammarAnalysis[0]; // Using first word as example

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Top Section */}
        <div className="bg-white p-6 rounded-xl mb-8 text-center">
          <div 
            className="text-3xl leading-relaxed mb-4"
            style={{ fontFamily: "'Amiri', serif" }}
            dir="rtl"
          >
            {mockTextAnalysis.withTashkeel}
          </div>
          <p className="text-gray-600">Grammar Analysis</p>
        </div>

        {/* Three-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* NAHW (SYNTAX) - Orange Theme */}
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span>📖</span>
                <span>Nahw (النحو)</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div 
                  className="text-2xl font-bold mb-3 text-right"
                  style={{ fontFamily: "'Amiri', serif" }}
                  dir="rtl"
                >
                  {analysis.word}
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-orange-700">Position:</span>
                    <span className="ml-2 text-gray-700">{analysis.nahw.position}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-orange-700">I'rab:</span>
                    <span className="ml-2 text-gray-700">{analysis.nahw.irab}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-orange-700">Sign:</span>
                    <span className="ml-2 text-gray-700">{analysis.nahw.sign}</span>
                  </div>
                </div>
              </div>

              {/* Additional Nahw examples */}
              <div className="mt-4 space-y-3">
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <div className="text-lg font-semibold text-right mb-2" style={{ fontFamily: "'Amiri', serif" }} dir="rtl">
                    لِلَّهِ
                  </div>
                  <div className="text-xs space-y-1">
                    <div><span className="font-semibold">Position:</span> Khabar Muqaddam</div>
                    <div><span className="font-semibold">I'rab:</span> Majrur</div>
                    <div><span className="font-semibold">Sign:</span> Kasrah</div>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <div className="text-lg font-semibold text-right mb-2" style={{ fontFamily: "'Amiri', serif" }} dir="rtl">
                    رَبِّ
                  </div>
                  <div className="text-xs space-y-1">
                    <div><span className="font-semibold">Position:</span> Mudaf Ilayh</div>
                    <div><span className="font-semibold">I'rab:</span> Majrur</div>
                    <div><span className="font-semibold">Sign:</span> Kasrah</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SARF (MORPHOLOGY) - Green Theme */}
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span>✨</span>
                <span>Sarf (الصرف)</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div 
                  className="text-2xl font-bold mb-3 text-right"
                  style={{ fontFamily: "'Amiri', serif" }}
                  dir="rtl"
                >
                  {analysis.word}
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-green-700">Root:</span>
                    <span className="ml-2 text-gray-700">{analysis.sarf.root}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-700">Pattern:</span>
                    <span className="ml-2 text-gray-700">{analysis.sarf.pattern}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-700">Type:</span>
                    <span className="ml-2 text-gray-700">{analysis.sarf.type}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-700">Form:</span>
                    <span className="ml-2 text-gray-700">{analysis.sarf.form}</span>
                  </div>
                </div>
              </div>

              {/* Additional Sarf examples */}
              <div className="mt-4 space-y-3">
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="text-lg font-semibold text-right mb-2" style={{ fontFamily: "'Amiri', serif" }} dir="rtl">
                    لِلَّهِ
                  </div>
                  <div className="text-xs space-y-1">
                    <div><span className="font-semibold">Root:</span> أ-ل-ه</div>
                    <div><span className="font-semibold">Pattern:</span> فَعَل</div>
                    <div><span className="font-semibold">Type:</span> Ism Jalala</div>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="text-lg font-semibold text-right mb-2" style={{ fontFamily: "'Amiri', serif" }} dir="rtl">
                    الْعَالَمِينَ
                  </div>
                  <div className="text-xs space-y-1">
                    <div><span className="font-semibold">Root:</span> ع-ل-م</div>
                    <div><span className="font-semibold">Pattern:</span> فَاعِل</div>
                    <div><span className="font-semibold">Type:</span> Ism Fa'il</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LOGHAT (LINGUISTICS) - Purple Theme */}
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span>📚</span>
                <span>Loghat (اللغة)</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div 
                  className="text-2xl font-bold mb-3 text-right"
                  style={{ fontFamily: "'Amiri', serif" }}
                  dir="rtl"
                >
                  {analysis.word}
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-purple-700">Meaning:</span>
                    <p className="text-gray-700 mt-1">{analysis.loghat.meaning}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-700">Context:</span>
                    <p className="text-gray-700 mt-1">{analysis.loghat.context}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-700">Etymology:</span>
                    <p className="text-gray-700 mt-1">{analysis.loghat.etymology}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-700">Related Words:</span>
                    <div className="mt-1 space-y-1">
                      {analysis.loghat.examples.map((example, index) => (
                        <div 
                          key={index}
                          className="text-right text-gray-700"
                          style={{ fontFamily: "'Amiri', serif" }}
                          dir="rtl"
                        >
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
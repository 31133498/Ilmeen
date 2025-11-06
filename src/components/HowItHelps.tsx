import React from 'react';

const HowItHelps: React.FC = () => {
  return (
    <div className="dark bg-background-light dark:bg-background-dark font-display">
      <script dangerouslySetInnerHTML={{
        __html: `
          tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "primary": "#12d3a3",
                  "background-light": "#f6f8f7",
                  "background-dark": "#10221d",
                },
                fontFamily: {
                  "display": ["Lexend", "sans-serif"]
                },
              },
            },
          }
        `
      }} />
      
      <div className="py-12">
        <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight px-4 text-center pb-2 pt-6">
          How Ilmeen Helps You Learn
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-8 pt-1 px-4 text-center">
          Follow our simple, powerful steps to unlock the beauty of Arabic.
        </p>
        
        <div className="grid grid-cols-[auto_1fr] gap-x-4 px-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined">photo_camera</span>
            </div>
            <div className="w-px bg-slate-200 dark:bg-slate-700 h-full"></div>
          </div>
          <div className="flex flex-1 flex-col pb-10 pt-1">
            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Scan Your Textbook</p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Instantly capture any page from your Arabic texts.</p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined">auto_fix</span>
            </div>
            <div className="w-px bg-slate-200 dark:bg-slate-700 h-full"></div>
          </div>
          <div className="flex flex-1 flex-col pb-10 pt-1">
            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">AI Analysis</p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Our AI reads the text and adds precise diacritics (tashkeel).</p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined">volume_up</span>
            </div>
            <div className="w-px bg-slate-200 dark:bg-slate-700 h-full"></div>
          </div>
          <div className="flex flex-1 flex-col pb-10 pt-1">
            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Audio & Translation</p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Listen to clear pronunciations with Yoruba/English explanations.</p>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined">search</span>
            </div>
            <div className="w-px bg-slate-200 dark:bg-slate-700 h-full"></div>
          </div>
          <div className="flex flex-1 flex-col pb-10 pt-1">
            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Deep Grammar Insights</p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Understand the rules of Nahw, Sarf, and Loghat.</p>
          </div>
          
          {/* Step 5 */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col pb-3 pt-1">
            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Track Your Mastery</p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Monitor your progress and solidify your learning.</p>
          </div>
        </div>
        
        <div className="mt-12 px-4">
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed pb-3 pt-1 px-4 text-center">
            From confusion to comprehension — powered by AI, inspired by Qur'anic methodology: Iqra' and Tadabbur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItHelps;
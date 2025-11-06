import React from 'react';

const WhyIlmeen: React.FC = () => {
  return (
    <div className="bg-white dark:bg-background-dark font-display">
      <script dangerouslySetInnerHTML={{
        __html: `
          tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "primary": "#C49B5C",
                  "background-light": "#FFFFFF",
                  "background-dark": "#101010",
                  "text-light-primary": "#000000",
                  "text-light-secondary": "#6D6D6D",
                  "text-dark-primary": "#FFFFFF",
                  "text-dark-secondary": "#A0A0A0",
                },
                fontFamily: {
                  "display": ["Lexend", "sans-serif"]
                },
              },
            },
          }
        `
      }} />
      
      <section className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-3xl font-bold text-center pb-8 pt-6 font-display">
          Why Ilmeen?
        </h1>
        
        <div className="flex w-full @container">
          <div className="w-full gap-2 grid grid-cols-2">
            <div 
              className="w-full bg-center bg-no-repeat bg-cover aspect-[3/4] rounded-lg grayscale"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCLXwXdySDqExnPuDHOwDORKIZ0iKP5_5PgInY-mmw7Pyyo7xaqfdSjLMMiD4A_lUG_V7-cT4caWNEO3d2kSxqttRwG7HdlIHPDNbaqAhR5EL50wRtfsRc-I1b1UpOi9KPmowvEGXzKsIClZr_1tSlH_wmtPFn0RJ0sP6T2p5Cpp38q-giRkP1ZMhCLClbywx2dKpfKs5Dvs5gulmzimU6ise7hEh8GfEX_kfXLYQpG6SrQwovoCNEMzUXcPRYUKhPcqclmzmW8Us")`
              }}
            />
            <div 
              className="w-full bg-center bg-no-repeat bg-cover aspect-[3/4] rounded-lg"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBf4DUkz9fBnuaAPtRKYfupgfiAH3qTqp38LuB3YDF3imJMXbgL1D-ZYru10kcuHbiKEqqaaBpaK8zdzP2qfbgfnO7lwqZ1m-51_QllRzTFOuA4Z16-WfHRrqlrEG10mDrHl020ocxf1Ow4jF5GDsZ1_1qPQkVDiXBucJ1lf2SEIHXtoAnkED0j0-GgVjH_Bc3ZinfbbylFd8Ep43e4lGonp2nhMxxqd5SuZ5nuhxKy8q2nGNtBNSo1uvyt_uoAay5XnyNawNy3o8M")`
              }}
            />
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-text-light-primary dark:text-text-dark-primary tracking-tight text-2xl font-bold leading-tight text-left pb-3 pt-5 font-display">
            Struggling with Arabic?
          </h2>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-relaxed pb-3 pt-1 font-display">
            Many non-native Arabic learners struggle to understand, memorize, and pronounce Arabic correctly.
          </p>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-relaxed pb-3 pt-1 font-display">
            In Nigeria and West Africa, most schools lack qualified teachers and digital tools — causing frustration and lost motivation.
          </p>
          <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-relaxed pb-3 pt-1 font-display">
            Ilmeen brings ease and independence to Arabic learning.
          </p>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="w-full max-w-sm flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-bold text-white shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary font-display">
            <span>Start Learning for Free</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
        
        <div className="flex justify-center items-center py-12">
          <div className="w-20 h-px bg-text-light-secondary/20 dark:bg-text-dark-secondary/20"></div>
          <div className="mx-4">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 100 100">
              <path d="M50 0L61.226 38.774L100 50L61.226 61.226L50 100L38.774 61.226L0 50L38.774 38.774L50 0Z"></path>
            </svg>
          </div>
          <div className="w-20 h-px bg-text-light-secondary/20 dark:bg-text-dark-secondary/20"></div>
        </div>
      </section>
    </div>
  );
};

export default WhyIlmeen;
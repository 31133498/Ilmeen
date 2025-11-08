import React from 'react';

const ImpactVision: React.FC = () => {
  return (
    <div className="dark bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-gray-200">
      <script dangerouslySetInnerHTML={{
        __html: `
          tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "primary": "#D4AF37",
                  "background-light": "#FDFBF5",
                  "background-dark": "#221e10",
                  "emerald-dark": "#0D5D4D",
                  "charcoal": "#2E2E2E"
                },
                fontFamily: {
                  "display": ["Manrope", "sans-serif"]
                },
              },
            },
          }
        `
      }} />
      
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Impact & Vision Section */}
        <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-charcoal dark:text-white text-3xl font-bold leading-tight tracking-tighter text-center">
              Our Journey, Our Vision
            </h2>
            <p className="mt-4 text-center text-base font-normal leading-normal text-charcoal/80 dark:text-gray-300">
              Our mission is to make Arabic learning accessible to every Muslim youth — from Lagos to Dakar, Cairo to Kuala Lumpur.
            </p>
            
            <div className="mt-12 grid grid-cols-[auto_1fr] gap-x-4">
              {/* Timeline Item 1 */}
              <div className="flex flex-col items-center gap-1 pt-2">
                <span className="material-symbols-outlined text-primary text-2xl">radio_button_checked</span>
                <div className="w-px grow bg-primary/40"></div>
              </div>
              <div className="flex flex-1 flex-col pb-8">
                <p className="text-charcoal dark:text-white text-lg font-bold leading-normal">Nigerian Classrooms</p>
                <p className="text-charcoal/80 dark:text-gray-300 text-sm">Laying the foundation for accessible learning, one classroom at a time.</p>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-2 bg-primary/40"></div>
                <span className="material-symbols-outlined text-primary text-2xl">radio_button_checked</span>
                <div className="w-px grow bg-primary/40"></div>
              </div>
              <div className="flex flex-1 flex-col pb-8">
                <p className="text-charcoal dark:text-white text-lg font-bold leading-normal">Across Africa</p>
                <p className="text-charcoal/80 dark:text-gray-300 text-sm">Expanding our reach to empower youth across the continent.</p>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-2 bg-primary/40"></div>
                <span className="material-symbols-outlined text-primary text-2xl">radio_button_checked</span>
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-charcoal dark:text-white text-lg font-bold leading-normal">Global Ummah</p>
                <p className="text-charcoal/80 dark:text-gray-300 text-sm">Connecting the global community through the language of the Qur'an.</p>
              </div>
            </div>
            
            <p className="mt-12 text-center text-base font-normal leading-normal text-charcoal/80 dark:text-gray-300">
              By 2030, Ilmeen aims to help 10 million students reconnect with Arabic fluency and Qur'anic understanding.
            </p>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="@container w-full bg-emerald-dark">
          <div className="relative flex flex-col items-center justify-center gap-8 px-4 py-20 text-center @[480px]:gap-10 @[480px]:px-10 @[480px]:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                alt="Abstract glowing gold lines forming the shape of a turning page"
                className="w-full h-full object-cover opacity-20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRWfEItnZb7efUDkarfkpz-TI25puSnGETRN3Q_dEYhkc8phiinYuqiSsPFWDUDkldq0TjIQvs4uhpv2MDXVCWvHowQQ92desbBUkipEB8XGxifjPm5KmSH5ycdWcYRWARJI_hcyH8Hm3bbNiERedjAd4X4XW0bLEDiZFJzEtWlDkIwU3FDYCVaVV_b0VJtdzXjS_bq5Gww-l4gMs3f6pxL4oilRcp3ublt3LgxJTD4Ik1WR4emmmIeM64xyHRqQJmTPH27yjy6dQ"
              />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tighter @[480px]:text-5xl max-w-2xl">
                Let's illuminate the path of knowledge — together.
              </h1>
              <div className="flex w-full max-w-sm flex-col gap-3">
                <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-primary text-charcoal text-base font-bold leading-normal tracking-wide transition-opacity hover:opacity-90">
                  <span>Join the Waitlist</span>
                </button>
                <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-white/10 text-white text-base font-bold leading-normal tracking-wide transition-colors hover:bg-white/20">
                  <span>Become a Pilot School</span>
                </button>
                <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-transparent text-white text-base font-bold leading-normal tracking-wide transition-colors hover:bg-white/10">
                  <span>Support the Mission</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer Section */}
        <footer className="w-full bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <img 
                alt="Ilmeen Logo"
                className="h-10 w-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdApUmI4e6kRAxrTiXMRmdMZXsmad7tQ-lTwPVAQ-6oHXV5fH5SVbKbaPEJXBIz77rfg0f3yDZsUmuOO1meXyw4yWm9li-5IIWsxGWz1SKfkierMZ2nIiaTLDDRnTMNVeC3ApZNwh48c59K9Se6wTdhJO3fagFrnbFdSBQ0msWJIdhzoaoFe8xFbPVgDHyoQAZGKNtbNu2ZbYMaOrQNAQ-P6rgmAj896Gz8p63MYryc8UxeBjGXm0n20NugFfhFb74a-aprYVmLH0"
              />
              <p className="text-charcoal/80 dark:text-gray-300 text-sm font-semibold tracking-wider">AI. Arabic. Imaan.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-charcoal/80 dark:text-gray-300">
              <a className="hover:text-primary dark:hover:text-primary" href="#">About</a>
              <a className="hover:text-primary dark:hover:text-primary" href="#">Contact</a>
              <a className="hover:text-primary dark:hover:text-primary" href="#">Privacy</a>
              <a className="hover:text-primary dark:hover:text-primary" href="#">Support</a>
            </div>
            
            <div className="flex justify-center gap-6">
              <a aria-label="Instagram" href="#">
                <img 
                  alt="Instagram Icon"
                  className="h-6 w-6 text-charcoal/70 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUSo1UKwxIw563fAiqf1MucT2rmkKlS0FqbXo4jV9-uPfKz4DBt3LR7nFafiDmxC8Q8TMw1HIEO9DEHOFvP8RyJaRgFyw5kHRveOudWPFClKZ36d2i7i9jOXG4k31NydVA6pQlxZUVTINTIzDWqQj5YhGr8dwkYXqDTAXDZTXjQAAUhTdYMb8G_08rMw_yUsvXfZGTUTJij628AycugCWrG3klYBf2sFqAGMKi7mBItOZ0S8ELnU6Iq12B5qySynKy2_9VYVS25sk"
                />
              </a>
              <a aria-label="TikTok" href="#">
                <img 
                  alt="TikTok Icon"
                  className="h-6 w-6 text-charcoal/70 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0h6Tk9o_qN8-ZU8JjIQgED3WQug_PjrXR2_oXCMEYNMVpsWCCdngfvtt6B_6zoXSDiiuMoCM_wkQOrokLOJ5UJM8EwADSrUGrg8cIvRtAFs058XEDVBcfdpNl8VV8VAqau_DD9axtjxUdlFCJ15V5sDMudfkXwIPgVUMPTfLhbQDd12IpXN7CsvcQYqglukDLoynCmyZZeslLe0xle0UZVZ_YGcvDIm6FY4cPt9k1j2EOIG3YQhFKP_pze1cQaUFG3ehaeraaMI0"
                />
              </a>
              <a aria-label="LinkedIn" href="#">
                <img 
                  alt="LinkedIn Icon"
                  className="h-6 w-6 text-charcoal/70 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCqV18ylFXAbTf5ycoBxdcPZ-qsjM42rNpjqfmbNSXDWlnsI-vzSXPQ0B6ptL44q7grC__vyIUhANyR65yc4ZrSmlBtRULouWWWmvvOCWMvwH2qFzsUP0bN8FC3OT4K9Aqix4vzFvU3iQTacSrM1HEQ-DDrpbJ_OsucoAfNQmDYc435TolNPuuSjalAN6ZfTn5i75PJ2o0sEKeONrTHR75SC5LMBRqhripyjxRH-qFRB0WHhIaXMd5TFZfORkpQh-yuSDHdDNLbPs"
                />
              </a>
            </div>
            
            <p className="text-xs text-charcoal/60 dark:text-gray-400 leading-relaxed max-w-xs">
              May Allah make knowledge light in our hearts and barakah in our tools.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ImpactVision;
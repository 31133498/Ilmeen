import React from 'react';

const AppPreview: React.FC = () => {
  return (
    <div className="dark bg-background-light dark:bg-background-dark font-display text-[#005B41] dark:text-[#FDFDFD]">
      <script dangerouslySetInnerHTML={{
        __html: `
          tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "primary": "#14ebb5",
                  "background-light": "#FDFDFD",
                  "background-dark": "#10221d",
                },
                fontFamily: {
                  "display": ["Lexend"]
                },
              },
            },
          }
        `
      }} />
      
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <h2 className="text-[#005B41] dark:text-[#FDFDFD] text-[22px] text-center font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-12">
          See How Ilmeen Transforms Your Learning
        </h2>
        
        <div className="relative px-4 py-8">
          <div className="relative aspect-[3/4] max-w-sm mx-auto">
            {/* After Image - Base Layer */}
            <div 
              className="absolute inset-0 w-full h-full rounded-xl p-1.5 bg-gradient-to-br from-[#D4AF37] to-[#b89529] shadow-2xl shadow-black/20 dark:shadow-[#D4AF37]/10"
              style={{transform: "rotate(-2deg) translateY(10px) translateX(-5px)"}}
            >
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3hOuuzZXuzfBNfXf24CQndC_sH2-LAABuHbZP3w6kW3kZ35zgoeheH89Ye26KpmUEqIdDwrmTFgqQEehDXa2b2GMjCv6C8eh7SvwaaXVve5dlxWTZlftgH8AtddIt_OoL5B_MZSsY-Wrly4sXjuACO323rqP-O4LDKA5K6Es05xah73AYOKFpbwMasRKbKsYjAPVhj5al_k4qwJo29a2cfdTwiWGVJ5Q5xHhyJBZYTxS6UCDUBT1bcMp-D82O6o2KvvYjCXTj4cY")`
                }}
              />
            </div>
            
            {/* Before Image - Top Layer with Slider */}
            <div 
              className="absolute inset-0 w-full h-full rounded-xl p-1.5 bg-gradient-to-br from-[#D4AF37] to-[#b89529] shadow-2xl shadow-black/30 dark:shadow-[#D4AF37]/20"
              style={{transform: "rotate(3deg) translateY(-10px) translateX(5px)"}}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <div 
                  className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqsx1L04tZxftZu3wwVokt_hXu4-NRkKR69DkeudsosBduE6Fv-PjzwD8652N1fPm0u50-4stYt1058HnA02BijuoMrnf7MI9JavvvzVCmABa9dRTH-7EJKWT_hl6F2DeAloks1a55i1rsczHLAAfHRMpLoI48gdizCPlbpa5rY-uTH2bMGUK0gM1v7N4s4VTAjPH2sdDdYsteg9_hjj7g1C0tKaAYm3ZhF5ic75rCPNjgiYvbC3STsRCHJ-4sJlsHd1kuFI-AMAU")`
                  }}
                />
                <div 
                  className="absolute inset-0 w-1/2 h-full bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4JH9g9ZouJyI69EdrBvl--sDs8CXr39-zXZLGcN7zOFtcbP8W8F2vTeoj1H3zFJUNYfhFniwqrCK2tnN1Zh0bjaK-zGayqJp5tCrg_V5iaimkqLp6oRRYbcqZFkxH_RtN7YjsyG2YBYHvafaYZVjD_eYbDGeqt1cpQKvdclwcKSwwnEEsvwz4k2sKvg2WyGxLuotLGWghvK9DVrTonspRwiv3fd5SGB4ivKCbL7Otlmvau2w-PhuPCyLMEJ6bBXYzghz216z2f8o")`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 pt-10 pb-4">
          <div className="@container">
            <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row @[480px]:items-center">
              <div className="flex w-full shrink-[3] items-center justify-between">
                <p className="text-[#005B41] dark:text-[#FDFDFD] text-base font-medium leading-normal">Slide to see the transformation</p>
                <p className="text-[#005B41] dark:text-[#FDFDFD] text-sm font-normal leading-normal @[480px]:hidden">50%</p>
              </div>
              <div className="flex h-4 w-full items-center gap-4">
                <div className="flex h-1.5 flex-1 rounded-full bg-[#005B41]/20 dark:bg-[#FDFDFD]/20">
                  <div className="h-full w-[50%] rounded-full bg-[#D4AF37]"></div>
                  <div className="relative">
                    <div className="absolute -left-3.5 -top-3 flex items-center justify-center size-7 rounded-full bg-[#FDFDFD] dark:bg-[#005B41] border-2 border-[#D4AF37] shadow-lg">
                      <span className="material-symbols-outlined text-[#005B41] dark:text-[#D4AF37] text-base">unfold_more</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#005B41] dark:text-[#FDFDFD] text-sm font-normal leading-normal hidden @[480px]:block">50%</p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-[#005B41] dark:text-[#FDFDFD] text-base font-normal leading-relaxed pb-12 pt-1 px-6 text-center">
          Ilmeen doesn't just translate — it teaches, guides, and helps you understand.
        </p>
      </div>
    </div>
  );
};

export default AppPreview;
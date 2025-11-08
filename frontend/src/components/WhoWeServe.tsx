import React from 'react';

const WhoWeServe: React.FC = () => {
  return (
    <div className="dark bg-background-light dark:bg-background-dark">
      <script dangerouslySetInnerHTML={{
        __html: `
          tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "primary": "#144bb8",
                  "background-light": "#FDFCF6",
                  "background-dark": "#111621",
                  "brand-gold": "#D4AF37",
                  "text-light-primary": "#333333",
                  "text-light-secondary": "#757575",
                  "text-dark-primary": "#EAEAEA",
                  "text-dark-secondary": "#A0A0A0",
                },
                fontFamily: {
                  "display": ["Noto Serif"]
                },
              },
            },
          }
        `
      }} />
      
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
        {/* Section: Who We Serve */}
        <div className="py-12 px-4 sm:px-6">
          <h2 className="font-sans-manrope text-2xl font-bold leading-tight tracking-tight text-center text-text-light-primary dark:text-text-dark-primary" style={{fontFamily: "'Manrope', sans-serif"}}>
            For Every Seeker of Knowledge
          </h2>
          <p className="font-serif-lora text-text-light-secondary dark:text-text-dark-secondary text-base leading-relaxed mt-4 text-center max-w-xl mx-auto" style={{fontFamily: "'Lora', serif"}}>
            From Markaz to University, Ilmeen empowers every student to learn Arabic with confidence and independence.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div 
              className="bg-cover bg-center flex flex-col rounded-xl justify-end p-3 aspect-square"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiziCy_gpwXUcJLXb08A2fttlug1XDJJ6rGHBeJDQnWU4053fd5KZBUT9pl8_3GK1-NivJXlxGp_r56hZg0TIQHCTDhe0FwMnvTFTcJ8erFZFlb4LTW6RQFHbgXRDY8ba-S4n_l8R4r5HSvt3u3ouyM5G4fJ8Fiosd0ms0fP0hxN4F5Mud_Siqe7Vt6aoxK274upCC4OSCTncMqvOiSg9r3FDbcBK64WeK9FoKLBAT6Xp34czEyMDHXogIXkzIxcg1soGKirjji_k")`
              }}
            >
              <p className="font-sans-manrope text-white text-sm font-bold leading-tight line-clamp-2" style={{fontFamily: "'Manrope', sans-serif"}}>
                Madrasah Students
              </p>
            </div>
            
            <div 
              className="bg-cover bg-center flex flex-col rounded-xl justify-end p-3 aspect-square"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnPjjKX1xWKcSir7nboiYnOkqVBGYN0Rigvw_w2I99QhEf4hQo2wnqqjTvIOd-kzDWzwVVO3G91DmOBgo-ud__FQr7e-lGL2tVJLSdTU_E5BhosbdP6Wjbw4NERaHDScck21NLALHOFu_BMgtVmRDYiD22LR-13ltiu7MFPSVbV-srH21umvhx1FjlxbreLDjUc9VVPu7yE8X9O1uDZxn_Hts8z9Jk-5XSMid3hHY_ktg55XRZ-MYprRCU1x2DtzyaqDtimMKsPYo")`
              }}
            >
              <p className="font-sans-manrope text-white text-sm font-bold leading-tight line-clamp-2" style={{fontFamily: "'Manrope', sans-serif"}}>
                University Learners
              </p>
            </div>
            
            <div 
              className="bg-cover bg-center flex flex-col rounded-xl justify-end p-3 aspect-square"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQkF0shhL3rMkbdot0DrQnMrJri7_ESXMnzKHIV6giw819KQAqZecZ65kvOc3seYV4xOKwQr2BGk2dDNmLP-N_uaiiszyiyu_VcSX3HgffMmZH4a7kAKHoUzwkoYw1-Ka3NP97Wx1qjN_zMcFeNlgxROQMgH42vYyHYdbddVuuWiq03aU3Lt8TItWQZknI9dXCodbQdt_e-axVSlI5O4HxFueMUexROiUwnCKXlGe8d_8ANIAWc_hwI2Xs-u1qt2_sLN1dSCOK0EQ")`
              }}
            >
              <p className="font-sans-manrope text-white text-sm font-bold leading-tight line-clamp-2" style={{fontFamily: "'Manrope', sans-serif"}}>
                Self-Learners
              </p>
            </div>
            
            <div 
              className="bg-cover bg-center flex flex-col rounded-xl justify-end p-3 aspect-square"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOeEItnwgYPyHcGho3uZ2HjcXQM89DabaBg1yauCOZNBDE-n9p2p6BlAvH_GgHiDAWJ62kqf69auzjH-2ACAXByxKhYQ_OHJjU63GM6_LgUx0g54mZKbRO2kJgy6QjuZGU05eEAJ9N2tWnrFY7JaT5R0gVAbwj3FOfdMkKm6YycABzn4dgKrHfmuhGYP9PEOUb8J48d-STChzaY1_clTnLd9OEAOaa_Y_4x5q6JgL_Vw1bOEIJzdn7ID8tRfXKRVHYLnlA_mKbHAs")`
              }}
            >
              <p className="font-sans-manrope text-white text-sm font-bold leading-tight line-clamp-2" style={{fontFamily: "'Manrope', sans-serif"}}>
                Teachers
              </p>
            </div>
          </div>
        </div>
        
        {/* Section: Faith Meets Technology */}
        <div className="relative py-16 px-4 sm:px-6 mt-8 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 bg-brand-gold/20 dark:bg-brand-gold/10 rounded-full blur-3xl opacity-50"></div>
          </div>
          <div className="relative flex flex-col items-center justify-center text-center">
            <div 
              className="w-full flex justify-center bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHYtqCNE7uWfNxYvntoAyUfFp9QqqN5V8BIKCKJL4CnEu5Qd-nwVL1QUwpvcsNZZyOPzDRAVZX2O-zCIj2GYAIi1HsI9c_yGYDK2OwDy9haJzoQUwe1ot3uTpzOZeW7uP2Be5kyK3EEvjAU274WdI2fpjDSGehehgILPsYfHzGBBiR447hPNWn9_tsqGMCgPnUIA_bVmthUVaN3nF3uFeYLx42b7WD3xxx5mxp3pwcFeuovomMLcVk03xavMhwAnnoWODOVzrOSlQ")`,
                height: "80px"
              }}
            />
            <p className="font-serif-lora text-text-light-secondary dark:text-text-dark-secondary text-base leading-relaxed mt-8 max-w-xl mx-auto" style={{fontFamily: "'Lora', serif"}}>
              Ilmeen is built on the values of Tarbiyyah and Tadabbur. Every line of code honors the sanctity of the Arabic language and the ethics of halal innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
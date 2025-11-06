import React, { useState } from 'react';

const App: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="dark min-h-screen">
      {/* Hero Section */}
      <div className="@container">
        <div 
          className="flex min-h-screen flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4 relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 77, 64, 0.7) 0%, rgba(0, 56, 46, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfKtvLMS2d18NdcS_P8zq9rtPUN9Mvho6YPqkIEBJY0DjpLtWWdJUU_xhTnxKmaIsKYtS9jq9IRp2NjmTYWRuZAL0E9Y0y9bp2HAS09WitZErppwyqp7dnizXNcK0qeM11NmzwJ72YbxD7A2bmoBSm8Rg2IDqKbMc3vCRt_5gmbiFhEDHMXFkrJRrO7v8nj9kpx-uVO03pvVm8fen0i4B7gas8k8wBXC0FdVaKBJOtTk9iKK9H_jXUtQAq8aXBnBx49LPFr5F4t00")`
          }}
        >
          {/* Arabic Calligraphy Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
            <div className="relative flex items-center justify-center">
              <h1 className="text-8xl font-black text-yellow-400" style={{fontFamily: "'Amiri', serif"}}>
                العِلمُ نُورٌ
              </h1>
              <div className="absolute text-5xl font-bold text-yellow-100/80">Ilmeen</div>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <img 
            alt="Ilmeen app interface showing Arabic text scanning"
            className="w-full max-w-xs mx-auto z-10 drop-shadow-2xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxqPpmqyunWpmpaKz7-MswbVaKN5bxsaPXfuSU5GOMQTdy7aXT4DBuZuGNMt775peQp1HkrVNM-q8O3qAi-nILa8LDfboY0xvP1EQEWmcZjYFIV9XkfCb6GG1_RJWNftAUFmVm2JNvXON5PHej7-i3WMtZTqQ4uKMT4uUPBcj_DTsug2w_o60U9p0YdM7U9g6whRtoBVImzKWeIEw6196HQV9qW-t7f6GBrbI39oshremSsOqAZ8Vc2193W_o8RUjcbweBiS7VnEs"
          />
          
          {/* Hero Content */}
          <div className="flex flex-col gap-4 text-center z-10 max-w-4xl">
            <h1 className="text-yellow-100 text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Revolutionizing Arabic Learning — The Smart Way to Connect with the Language of Revelation.
            </h1>
            <h2 className="text-yellow-100/90 text-base md:text-lg font-normal leading-normal">
              AI-powered Arabic learning for African Muslims. Scan, understand, and master Arabic — anytime, anywhere.
            </h2>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center z-10">
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-yellow-400 text-teal-900 text-base font-bold leading-normal tracking-wide hover:bg-yellow-300 transition-colors">
              <span>Join the Waitlist</span>
            </button>
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-transparent text-yellow-100 text-base font-bold leading-normal tracking-wide border-2 border-yellow-100/80 gap-2 hover:bg-yellow-100/10 transition-colors">
              <span className="material-symbols-outlined">play_circle</span>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 text-4xl md:text-5xl font-black leading-tight mb-4">
              Unlock the Quranic Language
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Our innovative features are designed to make learning Arabic intuitive, engaging, and deeply connected to your faith.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <span className="material-symbols-outlined text-yellow-500 text-4xl mb-4 block">photo_camera</span>
              <h3 className="text-gray-900 text-xl font-bold mb-2">Instant Scan & Translate</h3>
              <p className="text-gray-600">Point your camera at any Arabic text and get instant translations and contextual understanding.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <span className="material-symbols-outlined text-yellow-500 text-4xl mb-4 block">smart_toy</span>
              <h3 className="text-gray-900 text-xl font-bold mb-2">AI-Powered Tutors</h3>
              <p className="text-gray-600">Practice pronunciation and grammar with our intelligent tutors that provide real-time feedback.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <span className="material-symbols-outlined text-yellow-500 text-4xl mb-4 block">auto_stories</span>
              <h3 className="text-gray-900 text-xl font-bold mb-2">Interactive Lessons</h3>
              <p className="text-gray-600">Master the language through lessons tailored for African Muslims, focusing on Quranic and daily-use Arabic.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Ilmeen Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-gray-900 text-3xl font-bold text-center mb-8">Why Ilmeen?</h1>
          
          <div className="grid grid-cols-2 gap-2 mb-8">
            <div 
              className="aspect-[3/4] rounded-lg grayscale bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCLXwXdySDqExnPuDHOwDORKIZ0iKP5_5PgInY-mmw7Pyyo7xaqfdSjLMMiD4A_lUG_V7-cT4caWNEO3d2kSxqttRwG7HdlIHPDNbaqAhR5EL50wRtfsRc-I1b1UpOi9KPmowvEGXzKsIClZr_1tSlH_wmtPFn0RJ0sP6T2p5Cpp38q-giRkP1ZMhCLClbywx2dKpfKs5Dvs5gulmzimU6ise7hEh8GfEX_kfXLYQpG6SrQwovoCNEMzUXcPRYUKhPcqclmzmW8Us")`
              }}
            />
            <div 
              className="aspect-[3/4] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBf4DUkz9fBnuaAPtRKYfupgfiAH3qTqp38LuB3YDF3imJMXbgL1D-ZYru10kcuHbiKEqqaaBpaK8zdzP2qfbgfnO7lwqZ1m-51_QllRzTFOuA4Z16-WfHRrqlrEG10mDrHl020ocxf1Ow4jF5GDsZ1_1qPQkVDiXBucJ1lf2SEIHXtoAnkED0j0-GgVjH_Bc3ZinfbbylFd8Ep43e4lGonp2nhMxxqd5SuZ5nuhxKy8q2nGNtBNSo1uvyt_uoAay5XnyNawNy3o8M")`
              }}
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-gray-900 text-2xl font-bold">Struggling with Arabic?</h2>
            <p className="text-gray-600">Many non-native Arabic learners struggle to understand, memorize, and pronounce Arabic correctly.</p>
            <p className="text-gray-600">In Nigeria and West Africa, most schools lack qualified teachers and digital tools — causing frustration and lost motivation.</p>
            <p className="text-gray-900 font-medium">Ilmeen brings ease and independence to Arabic learning.</p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="w-full max-w-sm flex items-center justify-center gap-2 rounded-lg bg-yellow-600 px-6 py-3.5 text-base font-bold text-white shadow-sm transition-transform duration-200 hover:scale-105">
              <span>Start Learning for Free</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* How It Helps Section */}
      <div className="bg-teal-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-3xl font-bold text-center mb-4">How Ilmeen Helps You Learn</h1>
          <p className="text-teal-200 text-center mb-12">Follow our simple, powerful steps to unlock the beauty of Arabic.</p>
          
          <div className="space-y-8">
            {[
              { icon: 'photo_camera', title: 'Scan Your Textbook', desc: 'Instantly capture any page from your Arabic texts.' },
              { icon: 'auto_fix', title: 'AI Analysis', desc: 'Our AI reads the text and adds precise diacritics (tashkeel).' },
              { icon: 'volume_up', title: 'Audio & Translation', desc: 'Listen to clear pronunciations with Yoruba/English explanations.' },
              { icon: 'search', title: 'Deep Grammar Insights', desc: 'Understand the rules of Nahw, Sarf, and Loghat.' },
              { icon: 'trending_up', title: 'Track Your Mastery', desc: 'Monitor your progress and solidify your learning.' }
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-400/20 text-teal-400">
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  {index < 4 && <div className="w-px bg-teal-700 h-8 mt-2"></div>}
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-white text-base font-medium">{step.title}</p>
                  <p className="text-teal-300 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-teal-200 text-center mt-12">
            From confusion to comprehension — powered by AI, inspired by Qur'anic methodology: Iqra' and Tadabbur.
          </p>
        </div>
      </div>

      {/* App Preview Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-900 text-3xl font-bold mb-12">See How Ilmeen Transforms Your Learning</h2>
          
          <div className="relative max-w-sm mx-auto mb-8">
            <div 
              className="absolute inset-0 rounded-xl p-1.5 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl"
              style={{transform: "rotate(-2deg) translateY(10px) translateX(-5px)"}}
            >
              <div 
                className="w-full aspect-[3/4] bg-center bg-cover rounded-lg"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3hOuuzZXuzfBNfXf24CQndC_sH2-LAABuHbZP3w6kW3kZ35zgoeheH89Ye26KpmUEqIdDwrmTFgqQEehDXa2b2GMjCv6C8eh7SvwaaXVve5dlxWTZlftgH8AtddIt_OoL5B_MZSsY-Wrly4sXjuACO323rqP-O4LDKA5K6Es05xah73AYOKFpbwMasRKbKsYjAPVhj5al_k4qwJo29a2cfdTwiWGVJ5Q5xHhyJBZYTxS6UCDUBT1bcMp-D82O6o2KvvYjCXTj4cY")`
                }}
              />
            </div>
            
            <div 
              className="relative rounded-xl p-1.5 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl"
              style={{transform: "rotate(3deg) translateY(-10px) translateX(5px)"}}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                <div 
                  className="absolute inset-0 bg-center bg-cover"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqsx1L04tZxftZu3wwVokt_hXu4-NRkKR69DkeudsosBduE6Fv-PjzwD8652N1fPm0u50-4stYt1058HnA02BijuoMrnf7MI9JavvvzVCmABa9dRTH-7EJKWT_hl6F2DeAloks1a55i1rsczHLAAfHRMpLoI48gdizCPlbpa5rY-uTH2bMGUK0gM1v7N4s4VTAjPH2sdDdYsteg9_hjj7g1C0tKaAYm3ZhF5ic75rCPNjgiYvbC3STsRCHJ-4sJlsHd1kuFI-AMAU")`
                  }}
                />
                <div 
                  className="absolute inset-0 w-1/2 bg-center bg-cover"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4JH9g9ZouJyI69EdrBvl--sDs8CXr39-zXZLGcN7zOFtcbP8W8F2vTeoj1H3zFJUNYfhFniwqrCK2tnN1Zh0bjaK-zGayqJp5tCrg_V5iaimkqLp6oRRYbcqZFkxH_RtN7YjsyG2YBYHvafaYZVjD_eYbDGeqt1cpQKvdclwcKSwwnEEsvwz4k2sKvg2WyGxLuotLGWghvK9DVrTonspRwiv3fd5SGB4ivKCbL7Otlmvau2w-PhuPCyLMEJ6bBXYzghz216z2f8o")`
                  }}
                />
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">Slide to see the transformation</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-2 bg-gray-200 rounded-full max-w-xs">
              <div className="h-full w-1/2 bg-yellow-500 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-500">50%</span>
          </div>
          
          <p className="text-gray-600">Ilmeen doesn't just translate — it teaches, guides, and helps you understand.</p>
        </div>
      </div>

      {/* Who We Serve Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gray-900 text-3xl font-bold text-center mb-4">For Every Seeker of Knowledge</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From Markaz to University, Ilmeen empowers every student to learn Arabic with confidence and independence.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-12">
            {[
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiziCy_gpwXUcJLXb08A2fttlug1XDJJ6rGHBeJDQnWU4053fd5KZBUT9pl8_3GK1-NivJXlxGp_r56hZg0TIQHCTDhe0FwMnvTFTcJ8erFZFlb4LTW6RQFHbgXRDY8ba-S4n_l8R4r5HSvt3u3ouyM5G4fJ8Fiosd0ms0fP0hxN4F5Mud_Siqe7Vt6aoxK274upCC4OSCTncMqvOiSg9r3FDbcBK64WeK9FoKLBAT6Xp34czEyMDHXogIXkzIxcg1soGKirjji_k", title: "Madrasah Students" },
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnPjjKX1xWKcSir7nboiYnOkqVBGYN0Rigvw_w2I99QhEf4hQo2wnqqjTvIOd-kzDWzwVVO3G91DmOBgo-ud__FQr7e-lGL2tVJLSdTU_E5BhosbdP6Wjbw4NERaHDScck21NLALHOFu_BMgtVmRDYiD22LR-13ltiu7MFPSVbV-srH21umvhx1FjlxbreLDjUc9VVPu7yE8X9O1uDZxn_Hts8z9Jk-5XSMid3hHY_ktg55XRZ-MYprRCU1x2DtzyaqDtimMKsPYo", title: "University Learners" },
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQkF0shhL3rMkbdot0DrQnMrJri7_ESXMnzKHIV6giw819KQAqZecZ65kvOc3seYV4xOKwQr2BGk2dDNmLP-N_uaiiszyiyu_VcSX3HgffMmZH4a7kAKHoUzwkoYw1-Ka3NP97Wx1qjN_zMcFeNlgxROQMgH42vYyHYdbddVuuWiq03aU3Lt8TItWQZknI9dXCodbQdt_e-axVSlI5O4HxFueMUexROiUwnCKXlGe8d_8ANIAWc_hwI2Xs-u1qt2_sLN1dSCOK0EQ", title: "Self-Learners" },
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOeEItnwgYPyHcGho3uZ2HjcXQM89DabaBg1yauCOZNBDE-n9p2p6BlAvH_GgHiDAWJ62kqf69auzjH-2ACAXByxKhYQ_OHJjU63GM6_LgUx0g54mZKbRO2kJgy6QjuZGU05eEAJ9N2tWnrFY7JaT5R0gVAbwj3FOfdMkKm6YycABzn4dgKrHfmuhGYP9PEOUb8J48d-STChzaY1_clTnLd9OEAOaa_Y_4x5q6JgL_Vw1bOEIJzdn7ID8tRfXKRVHYLnlA_mKbHAs", title: "Teachers" }
            ].map((item, index) => (
              <div 
                key={index}
                className="aspect-square rounded-xl bg-cover bg-center flex items-end p-3"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url("${item.img}")`
                }}
              >
                <p className="text-white text-sm font-bold">{item.title}</p>
              </div>
            ))}
          </div>
          
          {/* Faith Meets Technology */}
          <div className="text-center py-16">
            <div className="relative mb-8">
              <div className="w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl opacity-50 mx-auto"></div>
              <div 
                className="absolute inset-0 flex justify-center items-center bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHYtqCNE7uWfNxYvntoAyUfFp9QqqN5V8BIKCKJL4CnEu5Qd-nwVL1QUwpvcsNZZyOPzDRAVZX2O-zCIj2GYAIi1HsI9c_yGYDK2OwDy9haJzoQUwe1ot3uTpzOZeW7uP2Be5kyK3EEvjAU274WdI2fpjDSGehehgILPsYfHzGBBiR447hPNWn9_tsqGMCgPnUIA_bVmthUVaN3nF3uFeYLx42b7WD3xxx5mxp3pwcFeuovomMLcVk03xavMhwAnnoWODOVzrOSlQ")`,
                  height: "80px"
                }}
              />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ilmeen is built on the values of Tarbiyyah and Tadabbur. Every line of code honors the sanctity of the Arabic language and the ethics of halal innovation.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-900 text-4xl md:text-5xl font-black mb-4">
            Be the First to Experience Ilmeen
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Join our waitlist for early access and exclusive updates. Your journey to mastering Arabic begins here.
          </p>
          
          <div className="flex w-full justify-center">
            <div className="flex w-full max-w-md h-14">
              <input 
                className="flex-1 px-4 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="px-6 bg-yellow-500 text-white font-bold rounded-r-xl hover:bg-yellow-600 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a className="hover:text-yellow-400 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-yellow-400 transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-yellow-400 transition-colors" href="#">Contact Us</a>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a className="hover:text-yellow-400 transition-colors" href="#">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a className="hover:text-yellow-400 transition-colors" href="#">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a className="hover:text-yellow-400 transition-colors" href="#">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.802 2.013 10.156 2 12.315 2z" />
              </svg>
            </a>
          </div>
          
          <p className="text-center text-gray-400">© 2024 Ilmeen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
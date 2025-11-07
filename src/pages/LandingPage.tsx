import React, { useState } from 'react';
import { Camera, Bot, BookOpen, Play } from 'lucide-react';
import { HowItWorks } from '../components/HowItWorks';

type PageType = 
  | 'landing' 
  | 'dashboard' 
  | 'scanner' 
  | 'analysis' 
  | 'audio' 
  | 'grammar' 
  | 'progress' 
  | 'library' 
  | 'settings';

interface LandingPageProps {
  onNavigate: (page: PageType) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
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
            <button 
              onClick={() => onNavigate('dashboard')}
              className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-yellow-400 text-teal-900 text-base font-bold leading-normal tracking-wide hover:bg-yellow-300 transition-colors"
            >
              <span>Get Started</span>
            </button>
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-transparent text-yellow-100 text-base font-bold leading-normal tracking-wide border-2 border-yellow-100/80 gap-2 hover:bg-yellow-100/10 transition-colors">
              <Play className="w-4 h-4" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorks />

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
              <Camera className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-gray-900 text-xl font-bold mb-2">Instant Scan & Translate</h3>
              <p className="text-gray-600">Point your camera at any Arabic text and get instant translations and contextual understanding.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <Bot className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-gray-900 text-xl font-bold mb-2">AI-Powered Tutors</h3>
              <p className="text-gray-600">Practice pronunciation and grammar with our intelligent tutors that provide real-time feedback.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <BookOpen className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-gray-900 text-xl font-bold mb-2">Interactive Lessons</h3>
              <p className="text-gray-600">Master the language through lessons tailored for African Muslims, focusing on Quranic and daily-use Arabic.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
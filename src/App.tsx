import React from 'react';
import './App.css';
import Showcase from './Showcase';

const heroBg = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80';
const classroomBefore = 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80';
const classroomAfter = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80';
const phoneMock = 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60';

const App: React.FC = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Ilmeen</div>
        <ul>
          <li>Features</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <header className="hero" style={{backgroundImage: `url(${heroBg})`}}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-left">
            <div className="logo-calligraphy" aria-hidden>
              العِلمُ نُورٌ
            </div>
            <h1>
              Revolutionizing Arabic Learning — The Smart Way to Connect with the Language of Revelation.
            </h1>
            <p className="lead">AI-powered Arabic learning for African Muslims. Scan, understand, and master Arabic — anytime, anywhere.</p>
            <div className="cta-buttons">
              <a className="cta-button primary" href="#waitlist">Join the Waitlist</a>
              <a className="cta-button secondary" href="#how">Watch How It Works ▷</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="phone-mockup">
              <img src={phoneMock} alt="App mockup" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="problem" id="why">
          <h2>Why Ilmeen?</h2>
          <div className="problem-split">
            <div className="problem-side before">
              <img src={classroomBefore} alt="students before Ilmeen" />
              <h3>Before Ilmeen</h3>
              <p>Many non-native Arabic learners struggle to understand, memorize, and pronounce Arabic correctly.</p>
              <p>In Nigeria and West Africa, most schools lack qualified teachers and digital tools — causing frustration and lost motivation.</p>
            </div>
            <div className="problem-side after">
              <img src={classroomAfter} alt="students after Ilmeen" />
              <h3>With Ilmeen</h3>
              <p>Ilmeen brings ease and independence to Arabic learning. Diacritization, audio, and grammar insights — all in one app.</p>
            </div>
          </div>
        </section>

        <section className="solution" id="how">
          <h2>How Ilmeen Helps</h2>
          <div className="solution-steps">
            <div className="step-card">
              <div className="step-icon">📖</div>
              <h3>Scan Arabic Textbook Page</h3>
            </div>
            <div className="step-card">
              <div className="step-icon">🤖</div>
              <h3>AI Reads & Adds Diacritics</h3>
            </div>
            <div className="step-card">
              <div className="step-icon">🔊</div>
              <h3>Audio Pronunciation + Yoruba/English Explanation</h3>
            </div>
            <div className="step-card">
              <div className="step-icon">🧠</div>
              <h3>Grammar Insights (Nahw, Sarf, Loghat)</h3>
            </div>
            <div className="step-card">
              <div className="step-icon">💫</div>
              <h3>Mastery Tracking</h3>
            </div>
          </div>
          <p className="solution-tagline">From confusion to comprehension — powered by AI, inspired by Qur’anic methodology: Iqra’ and Tadabbur.</p>
        </section>

        <section className="showcase">
          <h2>Ilmeen in Action</h2>
          <p>Ilmeen doesn’t just translate — it teaches, guides, and helps you understand.</p>
            <div className="showcase-mockup">
              <div className="mockup-card">
                <Showcase before={classroomBefore} after={classroomAfter} altBefore="Before Ilmeen" altAfter="After Ilmeen" />
              </div>
            </div>
        </section>

        <section className="audience">
          <h2>Who We Serve</h2>
          <div className="audience-grid">
            <div className="audience-card"><h3>Madrasah Students</h3></div>
            <div className="audience-card"><h3>University Arabic Learners</h3></div>
            <div className="audience-card"><h3>Self-Learners</h3></div>
            <div className="audience-card"><h3>Teachers</h3></div>
          </div>
          <p>From Markaz to University, Ilmeen empowers every student to learn Arabic with confidence and independence.</p>
        </section>

        <section className="ethos">
          <h2>Faith Meets Technology</h2>
          <div className="quranic-verse">Iqra’ bismi rabbika allathee khalaq</div>
          <p>Ilmeen is built on the values of Tarbiyyah and Tadabbur. Every line of code honors the sanctity of the Arabic language and the ethics of halal innovation.</p>
        </section>

        <section className="impact">
          <h2>Our Mission & Vision</h2>
          <p>Our mission is to make Arabic learning accessible to every Muslim youth — from Lagos to Dakar, Cairo to Kuala Lumpur.</p>
          <p>By 2030, Ilmeen aims to help 10 million students reconnect with Arabic fluency and Qur’anic understanding.</p>
          <div className="timeline"><div className="timeline-item">Nigerian Classrooms → Africa → Global Ummah</div></div>
        </section>

        <section className="cta-final">
          <h2>Let’s Illuminate the Path of Knowledge — Together.</h2>
          <div className="cta-buttons">
            <a className="cta-button primary" href="#waitlist">Join the Waitlist</a>
            <a className="cta-button secondary" href="#pilot">Become a Pilot School</a>
            <a className="cta-button secondary" href="#support">Support the Mission</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Ilmeen — AI. Arabic. Imaan.</div>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
            <li>Support</li>
          </ul>
          <div className="socials">
            <span>Instagram</span>
            <span>TikTok</span>
            <span>LinkedIn</span>
          </div>
          <p>May Allah make knowledge light in our hearts and barakah in our tools.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

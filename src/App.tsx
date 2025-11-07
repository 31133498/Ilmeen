import React from 'react';
import { useNavigation } from './hooks/useNavigation';
import { Navigation } from './components/Navigation';
import { MobileNavigation } from './components/MobileNavigation';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { Scanner } from './pages/Scanner';
import { Analysis } from './pages/Analysis';
import { Audio } from './pages/Audio';
import { Grammar } from './pages/Grammar';
import { Progress } from './pages/Progress';
import { Library } from './pages/Library';
import { Settings } from './pages/Settings';
import { Practice } from './pages/Practice';
import { Memorization } from './pages/Memorization';
import { Tafsir } from './pages/Tafsir';
import { Challenges } from './pages/Challenges';

const App: React.FC = () => {
  const { currentPage, navigateTo, goBack } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={navigateTo} />;
      case 'dashboard':
        return <Dashboard onNavigate={navigateTo} />;
      case 'scanner':
        return <Scanner onNavigate={navigateTo} />;
      case 'analysis':
        return <Analysis onNavigate={navigateTo} />;
      case 'audio':
        return <Audio />;
      case 'grammar':
        return <Grammar />;
      case 'progress':
        return <Progress />;
      case 'library':
        return <Library />;
      case 'settings':
        return <Settings />;
      case 'practice':
        return <Practice />;
      case 'memorization':
        return <Memorization />;
      case 'tafsir':
        return <Tafsir />;
      case 'challenges':
        return <Challenges />;
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        onGoBack={goBack} 
      />
      <main className={`transition-all duration-300 ease-in-out ${currentPage !== 'landing' ? 'pb-20 md:pb-0' : ''}`}>
        {renderPage()}
      </main>
      <MobileNavigation 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
      />
    </div>
  );
};

export default App;
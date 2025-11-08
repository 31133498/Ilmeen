import React from 'react';
import { ArrowLeft, Bell, Flame } from 'lucide-react';
import { mockUser } from '../data/mockData';

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

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onGoBack: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate, onGoBack }) => {
  const isMainPage = currentPage === 'dashboard' || currentPage === 'landing';
  const showBackButton = currentPage !== 'landing' && currentPage !== 'dashboard';

  return (
    <nav className="bg-teal-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <button 
              onClick={onGoBack}
              className="p-2 hover:bg-teal-800 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="text-xl font-bold" style={{fontFamily: "'Amiri', serif"}}>
            إلمين | Ilmeen
          </div>
        </div>

        {(currentPage === 'dashboard' || currentPage === 'landing') && (
          <div className="hidden md:flex items-center gap-6">
            {currentPage === 'landing' ? (
              <>
                <button onClick={() => onNavigate('dashboard')} className="hover:text-yellow-400 transition-colors">Dashboard</button>
                <button onClick={() => onNavigate('practice')} className="hover:text-yellow-400 transition-colors">Practice</button>
                <button onClick={() => onNavigate('challenges')} className="hover:text-yellow-400 transition-colors">Challenges</button>
              </>
            ) : (
              <>
                <button onClick={() => onNavigate('practice')} className="hover:text-yellow-400 transition-colors">Practice</button>
                <button onClick={() => onNavigate('library')} className="hover:text-yellow-400 transition-colors">Library</button>
                <button onClick={() => onNavigate('progress')} className="hover:text-yellow-400 transition-colors">Progress</button>
                <button onClick={() => onNavigate('settings')} className="hover:text-yellow-400 transition-colors">Settings</button>
              </>
            )}
          </div>
        )}

        {currentPage !== 'landing' && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">{mockUser.streak} day streak!</span>
            </div>
            <div className="w-8 h-8 bg-yellow-400 text-teal-900 rounded-full flex items-center justify-center font-bold">
              {mockUser.avatar}
            </div>
            <button className="p-2 hover:bg-teal-800 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
import React from 'react';
import { Home, Camera, Library, BarChart3, Settings } from 'lucide-react';

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

interface MobileNavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ currentPage, onNavigate }) => {
  if (currentPage === 'landing') return null;

  const navItems = [
    { page: 'dashboard' as PageType, icon: Home, label: 'Home' },
    { page: 'scanner' as PageType, icon: Camera, label: 'Scan' },
    { page: 'library' as PageType, icon: Library, label: 'Library' },
    { page: 'progress' as PageType, icon: BarChart3, label: 'Progress' },
    { page: 'settings' as PageType, icon: Settings, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                currentPage === item.page
                  ? 'text-teal-600 bg-teal-50'
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              <IconComponent className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
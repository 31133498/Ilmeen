import { useState } from 'react';

type PageType = 
  | 'landing' 
  | 'dashboard' 
  | 'scanner' 
  | 'analysis' 
  | 'audio' 
  | 'grammar' 
  | 'progress' 
  | 'library' 
  | 'settings'
  | 'practice'
  | 'memorization'
  | 'tafsir'
  | 'challenges';

export type { PageType };

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
  };

  const goBack = () => {
    if (currentPage !== 'landing' && currentPage !== 'dashboard') {
      setCurrentPage('dashboard');
    }
  };

  return {
    currentPage,
    navigateTo,
    goBack
  };
};
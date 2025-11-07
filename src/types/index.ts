export interface User {
  name: string;
  email: string;
  streak: number;
  avatar: string;
}

export interface Statistics {
  textsScanned: number;
  hoursStudied: number;
  wordsMastered: number;
  overallCompletion: number;
}

export interface RecentActivity {
  id: string;
  title: string;
  timeAgo: string;
  progress: number;
  icon: string;
}

export interface GrammarProgress {
  nahw: number;
  sarf: number;
  loghat: number;
}

export interface TextAnalysis {
  original: string;
  withTashkeel: string;
  translation: {
    english: string;
    yoruba: string;
  };
  wordBreakdown: WordBreakdown[];
}

export interface WordBreakdown {
  arabic: string;
  transliteration: string;
  english: string;
  yoruba: string;
}

export interface GrammarAnalysis {
  word: string;
  nahw: {
    position: string;
    irab: string;
    sign: string;
  };
  sarf: {
    root: string;
    pattern: string;
    type: string;
    form: string;
  };
  loghat: {
    meaning: string;
    context: string;
    etymology: string;
    examples: string[];
  };
}

export type PageType = 
  | 'landing' 
  | 'dashboard' 
  | 'scanner' 
  | 'analysis' 
  | 'audio' 
  | 'grammar' 
  | 'progress' 
  | 'library' 
  | 'settings';

// Re-export for better compatibility
export { PageType as Page };
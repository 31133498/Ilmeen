interface User {
  name: string;
  email: string;
  streak: number;
  avatar: string;
}

interface Statistics {
  textsScanned: number;
  hoursStudied: number;
  wordsMastered: number;
  overallCompletion: number;
}

interface RecentActivity {
  id: string;
  title: string;
  timeAgo: string;
  progress: number;
  icon: string;
}

interface GrammarProgress {
  nahw: number;
  sarf: number;
  loghat: number;
}

interface TextAnalysis {
  original: string;
  withTashkeel: string;
  translation: {
    english: string;
    yoruba: string;
  };
  wordBreakdown: WordBreakdown[];
}

interface WordBreakdown {
  arabic: string;
  transliteration: string;
  english: string;
  yoruba: string;
}

interface GrammarAnalysis {
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

export const mockUser: User = {
  name: 'Ahmed',
  email: 'ahmed@example.com',
  streak: 7,
  avatar: 'A'
};

export const mockStatistics: Statistics = {
  textsScanned: 24,
  hoursStudied: 18,
  wordsMastered: 342,
  overallCompletion: 68
};

export const mockRecentActivity: RecentActivity[] = [
  {
    id: '1',
    title: 'Al-Ajurrumiyyah - Chapter 3',
    timeAgo: '2 hours ago',
    progress: 75,
    icon: '📚'
  },
  {
    id: '2',
    title: 'Matn Al-Zubad',
    timeAgo: '1 day ago',
    progress: 100,
    icon: '📖'
  },
  {
    id: '3',
    title: 'Qawaid Al-Lughah',
    timeAgo: '3 days ago',
    progress: 60,
    icon: '📝'
  }
];

export const mockGrammarProgress: GrammarProgress = {
  nahw: 68,
  sarf: 72,
  loghat: 55
};

export const mockTextAnalysis: TextAnalysis = {
  original: 'الحمد لله رب العالمين والصلاة والسلام على اشرف المرسلين',
  withTashkeel: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ وَالصَّلَاةُ وَالسَّلَامُ عَلَى أَشْرَفِ الْمُرْسَلِينَ',
  translation: {
    english: 'All praise is due to Allah, Lord of the worlds, and peace and blessings upon the most noble of messengers',
    yoruba: 'Gbogbo ìyìn jẹ́ ti Ọlọ́hun, Olúwa àwọn ìhín gbogbo, àti àlàáfíà àti ìbùkún lórí ẹni tí ó níyì jùlọ nínú àwọn oníṣẹ́'
  },
  wordBreakdown: [
    {
      arabic: 'الْحَمْدُ',
      transliteration: 'Al-Hamdu',
      english: 'The Praise',
      yoruba: 'Ìyìn'
    },
    {
      arabic: 'لِلَّهِ',
      transliteration: 'Lillāhi',
      english: 'To Allah',
      yoruba: 'Fún Ọlọ́hun'
    },
    {
      arabic: 'رَبِّ',
      transliteration: 'Rabbi',
      english: 'Lord of',
      yoruba: 'Olúwa'
    },
    {
      arabic: 'الْعَالَمِينَ',
      transliteration: 'Al-ʿĀlamīn',
      english: 'The Worlds',
      yoruba: 'Àwọn Ìhín'
    }
  ]
};

export const mockGrammarAnalysis: GrammarAnalysis[] = [
  {
    word: 'الْحَمْدُ',
    nahw: {
      position: 'Mubtada (Subject)',
      irab: 'Marfuʿ (Nominative)',
      sign: 'Dammah'
    },
    sarf: {
      root: 'ح-م-د',
      pattern: 'فَعْل',
      type: 'Masdar',
      form: 'Form I'
    },
    loghat: {
      meaning: 'Praise, commendation',
      context: 'Used to express gratitude and acknowledgment',
      etymology: 'From the root ḥ-m-d meaning to praise',
      examples: ['حَمِدَ اللهَ', 'مَحْمُود', 'أَحْمَد']
    }
  }
];

export const weeklyActivity = [65, 72, 68, 85, 78, 90, 88];
export const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
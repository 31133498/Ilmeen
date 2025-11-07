# Ilmeen - AI-Powered Arabic Learning Platform

A comprehensive, fully functional Arabic learning web application that helps users learn Arabic through AI-powered text scanning, diacritization, audio pronunciation, and grammar analysis. The app supports both English and Yoruba translations.

## 🎯 Features

### 📱 Complete Application Pages
- **Landing Page** - Professional hero section with Arabic calligraphy and call-to-action
- **Dashboard** - Main hub with quick actions, statistics, and progress tracking
- **Scanner** - Camera interface for capturing Arabic text
- **Analysis** - Text comparison showing original vs. diacritized Arabic
- **Audio & Translation** - Audio player with English/Yoruba translations
- **Grammar Insights** - Detailed Nahw, Sarf, and Loghat analysis
- **Progress Tracking** - Comprehensive analytics and achievement system
- **Library** - Organized collection of saved texts with search and filters
- **Settings** - User profile and preference management

### 🚀 Key Functionality
- **AI Text Analysis** - Automatic diacritization (tashkeel) of Arabic text
- **Multi-language Support** - English and Yoruba translations
- **Audio Pronunciation** - Word-by-word and full text audio playback
- **Grammar Analysis** - Three-column breakdown (Nahw, Sarf, Loghat)
- **Progress Tracking** - Streaks, statistics, and achievement badges
- **Responsive Design** - Mobile-first approach with touch-friendly interface
- **Professional UI** - Modern design with smooth animations and transitions

## 🛠 Technical Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState)
- **Navigation**: Custom hook-based routing system
- **Fonts**: Amiri (Arabic) + Poppins (English/Interface)
- **Icons**: Emoji-based for universal compatibility

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Top navigation bar
│   └── MobileNavigation.tsx # Bottom mobile navigation
├── pages/              # Main application pages
│   ├── LandingPage.tsx # Hero and marketing content
│   ├── Dashboard.tsx   # Main user dashboard
│   ├── Scanner.tsx     # Text scanning interface
│   ├── Analysis.tsx    # Text analysis results
│   ├── Audio.tsx       # Audio player and translations
│   ├── Grammar.tsx     # Grammar analysis breakdown
│   ├── Progress.tsx    # Progress tracking and analytics
│   ├── Library.tsx     # Text library management
│   └── Settings.tsx    # User settings and preferences
├── hooks/              # Custom React hooks
│   └── useNavigation.ts # Navigation state management
├── data/               # Mock data and constants
│   └── mockData.ts     # Sample data for demonstration
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
└── App.tsx             # Main application component
```

## 🎨 Design System

### Color Palette
- **Primary**: Teal/Emerald (`teal-600`, `teal-900`)
- **Accent**: Yellow/Gold (`yellow-400`, `yellow-600`)
- **Background**: Light gray (`gray-50`, `gray-100`)
- **Text**: Dark gray (`gray-900`, `gray-700`)

### Typography
- **Arabic Text**: Amiri serif font with proper RTL support
- **Interface**: Poppins sans-serif for modern readability
- **Hierarchy**: Clear font weights and sizes for content structure

### Components
- **Cards**: Rounded corners (12-16px) with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Progress Bars**: Animated with smooth transitions
- **Navigation**: Responsive with mobile bottom bar

## 📱 Mobile Responsiveness

- **Breakpoints**: Mobile (320px+), Tablet (768px+), Desktop (1024px+)
- **Navigation**: Hamburger menu converts to bottom navigation on mobile
- **Touch Targets**: Minimum 44px for accessibility
- **Layouts**: Stacked on mobile, grid on larger screens
- **Typography**: Responsive font sizes and line heights

## 🔧 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/ilmeen.git
cd ilmeen
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 🎯 Usage

### Navigation Flow
1. **Landing Page** → Click "Get Started" → **Dashboard**
2. **Dashboard** → Quick action cards navigate to respective features
3. **Scanner** → Take/Upload photo → **Analysis Results**
4. **Analysis** → Choose audio, grammar, or quiz options
5. All pages have back navigation and mobile-friendly controls

### Key Interactions
- **Scan Text**: Camera interface with tips for best results
- **Audio Player**: Play/pause, speed control, translation toggle
- **Grammar Analysis**: Three-column breakdown with detailed explanations
- **Progress Tracking**: Visual charts and achievement badges
- **Library Management**: Search, filter, and organize saved texts

## 📊 Mock Data

The application includes comprehensive mock data:
- **User Profile**: Ahmed with 7-day streak
- **Statistics**: 24 texts scanned, 18 hours studied, 342 words mastered
- **Arabic Text**: Sample with proper diacritics and translations
- **Grammar Analysis**: Detailed Nahw, Sarf, and Loghat breakdowns
- **Progress Data**: Weekly activity charts and achievement badges

## 🌟 Special Features

### Arabic Text Handling
- **RTL Support**: Proper right-to-left text alignment
- **Font Rendering**: Amiri font for authentic Arabic typography
- **Diacritics**: Full tashkeel support with clear visual distinction

### Interactive Elements
- **Smooth Animations**: CSS transitions for all interactions
- **Hover States**: Visual feedback on all clickable elements
- **Loading States**: Placeholder content and progress indicators
- **Touch Gestures**: Mobile-optimized touch targets

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG compliant color combinations
- **Touch Targets**: Minimum 44px for mobile accessibility

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push to main branch

### Manual Deployment
1. Run `npm run build`
2. Upload `dist/` folder to your web server
3. Configure server for SPA routing (if needed)

## 🔮 Future Enhancements

- **Real AI Integration**: Connect to actual Arabic NLP services
- **User Authentication**: Login/signup with progress sync
- **Offline Support**: PWA capabilities for offline usage
- **Voice Recognition**: Speech-to-text for pronunciation practice
- **Social Features**: Share progress and compete with friends
- **Advanced Analytics**: Detailed learning insights and recommendations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@ilmeen.com or join our community Discord.

---

**Built with ❤️ for the Arabic learning community**
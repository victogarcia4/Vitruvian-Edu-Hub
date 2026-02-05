import React, { useState } from 'react';
import Header from './components/Header';
import TutorSection from './components/TutorSection';
import GameSection from './components/GameSection';
import ConverterSection from './components/ConverterSection';
import LearningStyleSection from './components/LearningStyleSection';
import FocusTimerSection from './components/FocusTimerSection';
import { TabView } from './types';
import { GraduationCap, Gamepad2, ArrowRightLeft, BrainCircuit, Timer } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.TUTOR);

  const renderContent = () => {
    switch (activeTab) {
      case TabView.TUTOR:
        return <TutorSection />;
      case TabView.LEARNING_STYLE:
        return <LearningStyleSection />;
      case TabView.FOCUS_TIMER:
        return <FocusTimerSection />;
      case TabView.GAMES:
        return <GameSection />;
      case TabView.CONVERTER:
        return <ConverterSection />;
      default:
        return <TutorSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 flex flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveTab(TabView.TUTOR)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === TabView.TUTOR
                  ? 'bg-[#4a90e2] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#4a90e2] hover:bg-slate-50'
              }`}
            >
              < GraduationCap className="w-4 h-4" />
              Tutor
            </button>
            <button
              onClick={() => setActiveTab(TabView.LEARNING_STYLE)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === TabView.LEARNING_STYLE
                  ? 'bg-[#4a90e2] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#4a90e2] hover:bg-slate-50'
              }`}
            >
              <BrainCircuit className="w-4 h-4" />
              Learning Style
            </button>
            <button
              onClick={() => setActiveTab(TabView.FOCUS_TIMER)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === TabView.FOCUS_TIMER
                  ? 'bg-[#4a90e2] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#4a90e2] hover:bg-slate-50'
              }`}
            >
              <Timer className="w-4 h-4" />
              Focus Timer
            </button>
            <button
              onClick={() => setActiveTab(TabView.GAMES)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === TabView.GAMES
                  ? 'bg-[#4a90e2] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#4a90e2] hover:bg-slate-50'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              Games
            </button>
            <button
              onClick={() => setActiveTab(TabView.CONVERTER)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === TabView.CONVERTER
                  ? 'bg-[#4a90e2] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#4a90e2] hover:bg-slate-50'
              }`}
            >
              <ArrowRightLeft className="w-4 h-4" />
              Converter
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto min-h-[500px]">
          {renderContent()}
        </div>

      </main>

      <footer className="bg-white border-t border-slate-200 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Vitruvian EduHub. Empowering Anatomy Education.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
import React, { useState, useEffect, useRef } from 'react';
import { Timer, Play, Pause, RotateCcw, Coffee, Target, Trophy, History, Zap } from 'lucide-react';

const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

interface FocusStats {
  sessionsCompleted: number;
  totalFocusMinutes: number;
}

const FocusTimerSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'work' | 'break'>('work');
  const [stats, setStats] = useState<FocusStats>({ sessionsCompleted: 0, totalFocusMinutes: 0 });
  
  const timerRef = useRef<number | null>(null);

  // Load stats from local storage
  useEffect(() => {
    const savedStats = localStorage.getItem('vitruvian_focus_stats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  // Timer logic
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerComplete();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const handleTimerComplete = () => {
    setIsActive(false);
    if (mode === 'work') {
      const newStats = {
        sessionsCompleted: stats.sessionsCompleted + 1,
        totalFocusMinutes: stats.totalFocusMinutes + 25,
      };
      setStats(newStats);
      localStorage.setItem('vitruvian_focus_stats', JSON.stringify(newStats));
      alert('Focus session complete! Time for a short break.');
      setMode('break');
      setTimeLeft(BREAK_TIME);
    } else {
      alert('Break over! Let\'s get back to studying.');
      setMode('work');
      setTimeLeft(WORK_TIME);
    }
  };

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'work' ? WORK_TIME : BREAK_TIME);
  };

  const skipMode = () => {
    setIsActive(false);
    if (mode === 'work') {
      setMode('break');
      setTimeLeft(BREAK_TIME);
    } else {
      setMode('work');
      setTimeLeft(WORK_TIME);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = mode === 'work' 
    ? ((WORK_TIME - timeLeft) / WORK_TIME) * 100 
    : ((BREAK_TIME - timeLeft) / BREAK_TIME) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
      <div className="text-center py-4">
        <h2 className="text-4xl font-black text-slate-950 mb-4 flex items-center justify-center gap-4">
          <Timer className="w-12 h-12 text-blue-600" />
          Focus <span className="text-blue-600">Architect</span>
        </h2>
        <p className="text-slate-900 text-xl max-w-2xl mx-auto font-bold">
          The Pomodoro technique for high-performance Anatomy study.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Timer Display */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border-4 border-slate-950 overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 relative">
          
          {/* Mode Indicator */}
          <div className="flex items-center gap-3 mb-8">
            {mode === 'work' ? (
              <div className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full border-2 border-blue-600 font-black text-lg flex items-center gap-2">
                <Target className="w-5 h-5" /> FOCUS MODE
              </div>
            ) : (
              <div className="bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full border-2 border-emerald-600 font-black text-lg flex items-center gap-2">
                <Coffee className="w-5 h-5" /> RECHARGE MODE
              </div>
            )}
          </div>

          {/* Clock Display */}
          <div className="relative mb-12 flex items-center justify-center">
            {/* Circular Progress (SVG) */}
            <svg className="w-64 h-64 md:w-80 md:h-80 transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-slate-100 fill-transparent stroke-[12]"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className={`fill-transparent stroke-[12] transition-all duration-500 ease-linear ${mode === 'work' ? 'stroke-blue-600' : 'stroke-emerald-600'}`}
                strokeDasharray="282.7%"
                strokeDashoffset={`${282.7 - (282.7 * progress) / 100}%`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-7xl md:text-8xl font-black text-slate-950 tracking-tighter tabular-nums">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={resetTimer}
              className="p-4 bg-slate-100 text-slate-600 rounded-2xl border-2 border-slate-300 hover:bg-slate-200 transition-colors"
              title="Reset Timer"
            >
              <RotateCcw className="w-8 h-8" />
            </button>

            <button
              onClick={toggleTimer}
              className={`p-6 rounded-3xl border-4 shadow-xl transition-all active:translate-y-2 flex items-center gap-3 ${
                isActive 
                  ? 'bg-rose-600 border-rose-800 text-white shadow-[0_6px_0_0_#9f1239]' 
                  : 'bg-blue-600 border-blue-800 text-white shadow-[0_6px_0_0_#1e3a8a]'
              }`}
            >
              {isActive ? (
                <>
                  <Pause className="w-10 h-10 fill-current" />
                  <span className="text-2xl font-black uppercase italic tracking-tighter">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-10 h-10 fill-current" />
                  <span className="text-2xl font-black uppercase italic tracking-tighter">Start</span>
                </>
              )}
            </button>

            <button
              onClick={skipMode}
              className="p-4 bg-slate-100 text-slate-600 rounded-2xl border-2 border-slate-300 hover:bg-slate-200 transition-colors"
              title="Skip Mode"
            >
              <Zap className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Stats and Info */}
        <div className="space-y-6">
          <div className="bg-slate-950 rounded-3xl p-8 border-4 border-slate-800 shadow-xl text-white">
            <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
              <History className="w-6 h-6 text-blue-500" /> Session Stats
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-600/20 rounded-xl border border-blue-500/30">
                    <Trophy className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="font-bold text-slate-400">Sessions</span>
                </div>
                <span className="text-4xl font-black italic">{stats.sessionsCompleted}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-600/20 rounded-xl border border-emerald-500/30">
                    <Zap className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="font-bold text-slate-400">Total Time</span>
                </div>
                <span className="text-3xl font-black italic text-emerald-400">{stats.totalFocusMinutes}m</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border-4 border-blue-600 shadow-xl">
             <h4 className="font-black text-xl text-slate-950 flex items-center gap-3 mb-4">
               <Trophy className="w-6 h-6 text-blue-700" />
               Study Method
             </h4>
             <p className="text-slate-800 leading-relaxed font-bold">
               25 minutes of deep focus followed by a 5-minute restorative break prevents mental fatigue.
               <span className="block mt-4 p-3 bg-blue-50 rounded-xl border-l-4 border-blue-600 italic text-sm">
                 "Consistent intervals improve retention of complex anatomical structures."
               </span>
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusTimerSection;
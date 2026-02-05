import React, { useState, useEffect } from 'react';
import { BrainCircuit, Eye, Zap, BookText, Headphones, Save, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface LearningStyle {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  color: string;
  activeColor: string;
}

const STYLES: LearningStyle[] = [
  {
    id: 'visual',
    title: 'Radiologist',
    category: 'Visual',
    description: 'I prefer images, maps, and graphic organizers to process information.',
    icon: <Eye className="w-10 h-10 text-blue-600" />,
    iconBg: 'bg-blue-100',
    color: 'border-blue-600 text-blue-950 bg-white',
    activeColor: 'ring-blue-800 border-blue-800 bg-blue-50'
  },
  {
    id: 'kinesthetic',
    title: 'Paramedic',
    category: 'Kinesthetic',
    description: 'I prefer simulations, hands-on cases, and physical movement.',
    icon: <Zap className="w-10 h-10 text-orange-600" />,
    iconBg: 'bg-orange-100',
    color: 'border-orange-600 text-orange-950 bg-white',
    activeColor: 'ring-orange-800 border-orange-800 bg-orange-50'
  },
  {
    id: 'readwrite',
    title: 'Transcriber',
    category: 'Read/Write',
    description: 'I prefer summaries, written quizzes, and comprehensive texts.',
    icon: <BookText className="w-10 h-10 text-emerald-600" />,
    iconBg: 'bg-emerald-100',
    color: 'border-emerald-600 text-emerald-950 bg-white',
    activeColor: 'ring-emerald-800 border-emerald-800 bg-emerald-50'
  },
  {
    id: 'auditory',
    title: 'Consultant',
    category: 'Auditory',
    description: 'I prefer listening to lectures, debating, and group discussions.',
    icon: <Headphones className="w-10 h-10 text-purple-600" />,
    iconBg: 'bg-purple-100',
    color: 'border-purple-600 text-purple-950 bg-white',
    activeColor: 'ring-purple-800 border-purple-800 bg-purple-50'
  }
];

const LearningStyleSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem('vitruvian_email');
    const savedStyle = localStorage.getItem('vitruvian_learning_style');
    const savedFlag = localStorage.getItem('vitruvian_is_saved');
    
    if (savedEmail) setEmail(savedEmail);
    if (savedStyle) setSelectedStyle(savedStyle);
    if (savedFlag === 'true') setIsSaved(true);
  }, []);

  const handleSave = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!selectedStyle) {
      setError('Please select a learning style.');
      return;
    }

    setError(null);
    setIsSaving(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      localStorage.setItem('vitruvian_email', email);
      localStorage.setItem('vitruvian_learning_style', selectedStyle!);
      localStorage.setItem('vitruvian_is_saved', 'true');
      setIsSaved(true);
      setIsSaving(false);
    } catch (err) {
      setError('Failed to save selection. Please try again.');
      setIsSaving(false);
    }
  };

  const currentStyleObj = STYLES.find(s => s.id === selectedStyle);

  return (
    <div className="space-y-10 animate-fade-in max-w-4xl mx-auto">
      <div className="text-center py-4">
        <h2 className="text-4xl font-black text-slate-950 mb-4 flex items-center justify-center gap-4">
          <BrainCircuit className="w-12 h-12 text-[#1d4ed8]" />
          My Learning Style
        </h2>
        <p className="text-slate-900 text-xl max-w-2xl mx-auto font-bold">
          Optimize your Anatomy & Physiology study sessions.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl border-4 border-slate-950 overflow-hidden">
        <div className="p-8 md:p-12 space-y-12">
          
          <div className="max-w-xl mx-auto space-y-4">
            <label htmlFor="email-input" className="block text-2xl font-black text-slate-950 text-center">
              Student Email Address
            </label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSaved}
              placeholder="e.g. yourname@college.edu"
              className={`w-full p-6 text-xl rounded-2xl border-4 border-slate-950 focus:ring-8 focus:ring-blue-100 outline-none transition-all text-slate-950 font-black placeholder:text-slate-500 shadow-sm ${isSaved ? 'bg-slate-100 text-slate-700 cursor-not-allowed border-slate-400 opacity-60' : 'bg-white'}`}
            />
            <p className="text-sm font-bold text-slate-600 text-center italic">Required for progress tracking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STYLES.map((style) => (
              <button
                key={style.id}
                onClick={() => !isSaved && setSelectedStyle(style.id)}
                disabled={isSaved}
                aria-pressed={selectedStyle === style.id}
                className={`flex flex-col items-center text-center p-8 rounded-3xl border-4 transition-all duration-300 relative group ${
                  selectedStyle === style.id
                    ? `${style.activeColor} ring-8 ring-slate-100 shadow-xl scale-102`
                    : 'border-slate-300 bg-white hover:border-slate-950 text-slate-900'
                } ${isSaved ? 'cursor-default' : 'cursor-pointer hover:shadow-2xl'}`}
              >
                <div className={`p-4 rounded-2xl mb-6 transition-colors ${style.iconBg} ${selectedStyle === style.id ? 'bg-white shadow-inner' : ''}`}>
                  {style.icon}
                </div>
                <h3 className="font-black text-3xl mb-4 text-slate-950 underline decoration-slate-300 decoration-4 group-hover:decoration-inherit">{style.title}</h3>
                <p className="text-lg leading-relaxed font-bold text-slate-800">{style.description}</p>
                
                {selectedStyle === style.id && (
                  <div className="absolute -top-4 -right-4 bg-slate-950 text-white p-2 rounded-full border-4 border-white shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center pt-6 space-y-6">
            {error && (
              <div className="flex items-center gap-3 text-white bg-rose-600 px-6 py-4 rounded-2xl border-4 border-rose-800 text-lg font-black animate-shake">
                <AlertCircle className="w-6 h-6" />
                {error}
              </div>
            )}

            {!isSaved ? (
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-4 bg-[#1d4ed8] text-white px-16 py-6 rounded-3xl font-black text-2xl shadow-[0_8px_0_0_#1e3a8a] hover:shadow-[0_4px_0_0_#1e3a8a] hover:translate-y-[4px] transition-all active:translate-y-[8px] active:shadow-none disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-8 h-8 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-8 h-8" />
                    Save Selection
                  </>
                )}
              </button>
            ) : (
              <div className="flex flex-col items-center gap-6">
                <div className="bg-emerald-100 text-emerald-950 px-10 py-6 rounded-3xl border-4 border-emerald-600 flex items-center gap-4 font-black text-2xl shadow-xl animate-bounce-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-700" />
                  Style Saved: {currentStyleObj?.title}
                </div>
                <button 
                  onClick={() => {
                    localStorage.removeItem('vitruvian_is_saved');
                    setIsSaved(false);
                  }}
                  className="text-lg text-slate-950 font-black hover:text-blue-700 underline underline-offset-8 decoration-4"
                >
                  Change Learning Specialist
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-10 border-4 border-blue-600 shadow-xl">
        <h4 className="font-black text-2xl text-slate-950 flex items-center gap-4 mb-4">
          <BrainCircuit className="w-8 h-8 text-blue-700" />
          The Specialist Advantage
        </h4>
        <p className="text-xl text-slate-900 leading-relaxed font-bold">
          Vitruvian AI Tutors adapt based on your specialist choice:
          <span className="block mt-4 p-4 bg-blue-50 rounded-xl border-l-8 border-blue-600 italic">
            "Radiologists see more diagrams, while Paramedics receive more hands-on clinical scenarios."
          </span>
        </p>
      </div>
    </div>
  );
};

export default LearningStyleSection;
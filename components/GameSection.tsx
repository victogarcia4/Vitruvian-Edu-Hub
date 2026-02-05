import React, { useState } from 'react';
import { GAME_DATA } from '../constants';
import { PlayCircle, Gamepad2, X, Maximize2 } from 'lucide-react';
import { GameLink } from '../types';

const GameSection: React.FC = () => {
  const [activeInternalGame, setActiveInternalGame] = useState<GameLink | null>(null);

  const handleGameLaunch = (game: GameLink) => {
    if (game.isInternal) {
      setActiveInternalGame(game);
    }
  };

  const closeGame = () => setActiveInternalGame(null);

  return (
    <div className="space-y-6 animate-fade-in relative">
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-3 flex items-center justify-center gap-2">
            <Gamepad2 className="w-8 h-8 text-[#4a90e2]" />
            Vitruvian Games
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Reinforce your knowledge with interactive escape rooms and challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {GAME_DATA.map((game) => (
          <div
            key={game.id}
            className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={() => game.isInternal ? handleGameLaunch(game) : window.open(game.url, '_blank')}
          >
            <div className="relative h-40 overflow-hidden bg-slate-200">
               <div className="absolute inset-0 bg-slate-300 animate-pulse" />
               <img 
                 src={game.imagePlaceholder} 
                 alt={game.title} 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                   <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
               </div>
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-[#4a90e2] transition-colors">
                      {game.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {game.isInternal ? 'Embedded Simulator' : 'Interactive Module'}
                  </p>
                </div>
                <button 
                  className="mt-4 w-full py-2 bg-slate-50 text-[#4a90e2] font-semibold rounded-lg border border-slate-200 group-hover:bg-[#4a90e2] group-hover:text-white transition-all"
                >
                    Play Now
                </button>
            </div>
          </div>
        ))}
      </div>

      {/* Internal Game Hub Overlay */}
      {activeInternalGame && (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col animate-in fade-in zoom-in duration-300">
          <header className="bg-slate-900 text-white p-4 flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center gap-3">
              <Maximize2 className="w-5 h-5 text-blue-400" />
              <h3 className="font-black text-xl uppercase tracking-widest">{activeInternalGame.title}</h3>
            </div>
            <button 
              onClick={closeGame}
              className="p-2 hover:bg-red-600 rounded-xl transition-colors flex items-center gap-2 font-bold"
            >
              <X className="w-6 h-6" />
              CLOSE
            </button>
          </header>
          <div className="flex-grow bg-black">
            <iframe 
              srcDoc={activeInternalGame.internalContent}
              className="w-full h-full border-none"
              title={activeInternalGame.title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GameSection;

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-950 text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] sticky top-0 z-50 border-b-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col md:flex-row items-center gap-6">
           <div className="relative group">
             {/* Glowing background effect for the logo */}
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
             <div className="relative bg-white p-0.5 rounded-full shadow-2xl border-4 border-white overflow-hidden w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
               <img 
                 src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfyI7dotB_l8bR10lG_NpOXMRs7nlhlO5SBl5oVOmysSegSn021MgxiHhlhMf092egindR76coHncPrHEt3tGwfxihVEgWtlub0xSZ1R7P0qX0vy9QRvmjC-uyW6hHNdxlg_yRNwg?key=bzYwjTJR_ymViUT1394BKA" 
                 alt="Vitruvian Hub Logo" 
                 className="w-full h-full object-cover"
               />
             </div>
           </div>
           
           <div className="flex flex-col items-center md:items-start">
             <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white drop-shadow-md italic uppercase">
               Vitruvian <span className="text-blue-500">Hub</span>
             </h1>
             <p className="text-blue-200 text-lg sm:text-xl font-black uppercase tracking-widest mt-1">
               Advanced AI Anatomy Tutor
             </p>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
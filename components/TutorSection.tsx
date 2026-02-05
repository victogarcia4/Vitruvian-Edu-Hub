import React from 'react';
import { TUTOR_DATA } from '../constants';
import { ExternalLink, GraduationCap } from 'lucide-react';

const TutorSection: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-3 flex items-center justify-center gap-2">
            <GraduationCap className="w-8 h-8 text-[#4a90e2]" />
            Vitruvian Tutor
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Select a chapter to start your personalized study session with our specialized AI tutors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
        {TUTOR_DATA.map((chapter) => (
          <a
            key={chapter.id}
            href={chapter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#4a90e2] transition-all duration-200 flex items-center gap-4 overflow-hidden"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-2xl flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                {chapter.icon}
            </div>
            <div className="flex-grow">
                <h3 className="font-semibold text-slate-800 group-hover:text-[#4a90e2] transition-colors">
                    {chapter.title}
                </h3>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1">
                    Start Session <ExternalLink className="w-3 h-3" />
                </span>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#4a90e2] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
      
      <div className="bg-slate-100 rounded-lg p-4 text-center text-sm text-slate-500 mt-8">
        <p>AI Tutors created by Dr. Victor Garcia Martinez • Lone Star College North Harris</p>
      </div>
    </div>
  );
};

export default TutorSection;
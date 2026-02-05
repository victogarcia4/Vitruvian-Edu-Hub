import React, { useState, useEffect } from 'react';
import { 
  Thermometer, Activity, Heart, Wind, ArrowRightLeft, 
  Ruler, Scale, Beaker, Zap, Gauge, Clock, Menu, X, Flame, Info
} from 'lucide-react';
import { CONVERTER_DATA } from '../constants';

type ToolId = 'BP' | 'HR' | 'RR' | 'BODY_TEMP' | 'GEN_TEMP' | keyof typeof CONVERTER_DATA;

export default function ConverterSection() {
  const [activeTool, setActiveTool] = useState<ToolId>('BP');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="animate-fade-in max-w-7xl mx-auto">
      
      {/* Mobile Header for Tool Selection */}
      <div className="md:hidden mb-4 bg-slate-950 p-4 rounded-2xl shadow-xl border-4 border-blue-600 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <span className="font-black text-slate-500 text-lg uppercase">Tool:</span>
           <span className="text-blue-400 font-black text-lg underline underline-offset-4 decoration-4">
             {getToolName(activeTool)}
           </span>
        </div>
        <button onClick={toggleSidebar} className="p-4 bg-blue-600 rounded-xl text-white shadow-lg active:scale-95 transition-transform">
          <Menu className="w-7 h-7" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 min-h-[650px]">
        
        {/* Sidebar Navigation */}
        <div className={`
          fixed inset-0 z-40 bg-slate-950 md:static md:bg-transparent md:w-80 md:flex-shrink-0
          transition-transform duration-300 transform 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          md:block overflow-y-auto h-full max-h-[90vh] md:max-h-none border-r md:border-none border-slate-800
        `}>
          <div className="p-6 md:p-0 space-y-8">
            <div className="flex justify-between items-center md:hidden mb-8">
              <h3 className="font-black text-3xl text-white italic">SELECT <span className="text-blue-500">TOOL</span></h3>
              <button onClick={closeSidebar} className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg"><X className="w-8 h-8"/></button>
            </div>

            {/* Clinical Tools Group */}
            <div>
              <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-4 px-3 border-b-2 border-slate-800 pb-2">Diagnostic Tools</h3>
              <div className="space-y-2">
                <NavButton id="BP" active={activeTool} onClick={setActiveTool} label="Blood Pressure" icon={<Activity className="w-5 h-5" />} close={closeSidebar}/>
                <NavButton id="HR" active={activeTool} onClick={setActiveTool} label="Heart Rate" icon={<Heart className="w-5 h-5" />} close={closeSidebar}/>
                <NavButton id="RR" active={activeTool} onClick={setActiveTool} label="Respiratory" icon={<Wind className="w-5 h-5" />} close={closeSidebar}/>
                <NavButton id="BODY_TEMP" active={activeTool} onClick={setActiveTool} label="Body Temp" icon={<Thermometer className="w-5 h-5" />} close={closeSidebar}/>
              </div>
            </div>

            {/* General Converters Group */}
            <div>
              <h3 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-4 px-3 border-b-2 border-slate-800 pb-2">Scientific Units</h3>
              <div className="space-y-2">
                <NavButton id="LENGTH" active={activeTool} onClick={setActiveTool} label="Length" icon={<Ruler className="w-5 h-5" />} close={closeSidebar}/>
                <NavButton id="MASS" active={activeTool} onClick={setActiveTool} label="Weight / Mass" icon={<Scale className="w-5 h-5" />} close={closeSidebar}/>
                <NavButton id="VOLUME" active={activeTool} onClick={setActiveTool} label="Volume" icon={<Beaker className="w-5 h-5" />} close={closeSidebar}/>
                <NavButton id="GEN_TEMP" active={activeTool} onClick={setActiveTool} label="Standard Temp" icon={<Flame className="w-5 h-5" />} close={closeSidebar}/>
                <NavButton id="PRESSURE" active={activeTool} onClick={setActiveTool} label="Pressure" icon={<Gauge className="w-5 h-5" />} close={closeSidebar}/>
                <NavButton id="ENERGY" active={activeTool} onClick={setActiveTool} label="Energy" icon={<Zap className="w-5 h-5" />} close={closeSidebar}/>
                <NavButton id="TIME" active={activeTool} onClick={setActiveTool} label="Time" icon={<Clock className="w-5 h-5" />} close={closeSidebar}/>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && <div className="fixed inset-0 bg-black/95 z-30 md:hidden backdrop-blur-sm" onClick={closeSidebar} />}

        {/* Main Content Area */}
        <div className="flex-grow bg-slate-950 rounded-[2.5rem] shadow-2xl border-4 border-slate-800 overflow-hidden ring-1 ring-blue-900/50">
           <div className="p-6 sm:p-10 md:p-14 min-h-[600px] flex flex-col justify-center">
             {renderContent(activeTool)}
           </div>
        </div>

      </div>
    </div>
  );
}

function getToolName(id: string) {
    if (CONVERTER_DATA[id]) return CONVERTER_DATA[id].name;
    switch(id) {
        case 'BP': return 'Blood Pressure';
        case 'HR': return 'Heart Rate';
        case 'RR': return 'Respiratory Rate';
        case 'BODY_TEMP': return 'Body Temperature';
        case 'GEN_TEMP': return 'Temperature Converter';
        default: return 'Converter';
    }
}

function NavButton({ id, active, onClick, label, icon, close }: any) {
    const isActive = active === id;
    return (
        <button 
            onClick={() => { onClick(id); close(); }}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-black transition-all border-2 ${
                isActive 
                ? 'bg-blue-600 text-white border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-[1.02] z-10' 
                : 'text-slate-500 border-slate-900/50 hover:border-blue-500/50 hover:bg-slate-900 hover:text-slate-300'
            }`}
        >
            <span className={isActive ? 'text-white' : 'text-slate-600'}>{icon}</span>
            {label}
        </button>
    );
}

function renderContent(id: ToolId) {
    switch (id) {
        case 'BP': return <BloodPressureCalculator />;
        case 'HR': return <HeartRateCalculator />;
        case 'RR': return <RespiratoryRateCalculator />;
        case 'BODY_TEMP': return <BodyTemperatureCalculator />;
        case 'GEN_TEMP': return <GeneralTemperatureConverter />;
        default:
            if (CONVERTER_DATA[id]) {
                return <GenericUnitConverter data={CONVERTER_DATA[id]} key={id} />;
            }
            return <div className="text-center text-slate-700 font-black text-2xl uppercase tracking-[0.5em]">Select Tool</div>;
    }
}

const VerdictBox = ({ title, verdict, description, colorClass, bgClass, borderColor }: { title: string, verdict: string, description?: string, colorClass: string, bgClass: string, borderColor: string }) => (
  <div className={`mt-8 p-8 rounded-[2rem] ${bgClass} border-4 ${borderColor} text-center animate-fade-in shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}>
    <p className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 mb-2">{title}</p>
    <h3 className={`text-3xl sm:text-4xl font-black ${colorClass} mb-2 uppercase italic tracking-tight`}>{verdict}</h3>
    {description && <p className="text-white/80 font-bold text-base sm:text-lg max-w-md mx-auto">{description}</p>}
  </div>
);

const ClinicalReference = ({ title, ranges }: { title: string, ranges: { label: string, value: string, color: string }[] }) => (
  <div className="mt-12 bg-slate-900/50 border-2 border-slate-800 rounded-3xl p-6">
    <div className="flex items-center gap-2 mb-4">
      <Info className="w-5 h-5 text-blue-500" />
      <h4 className="text-slate-300 font-black uppercase tracking-widest text-sm">{title} Reference</h4>
    </div>
    <div className="space-y-2">
      {ranges.map((range, idx) => (
        <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-800 last:border-0">
          <span className="text-slate-400 font-bold text-sm">{range.label}</span>
          <span className={`${range.color} font-black text-sm`}>{range.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const BodyTemperatureCalculator = () => {
  const [celsius, setCelsius] = useState<string>('');
  const [fahrenheit, setFahrenheit] = useState<string>('');
  const [verdict, setVerdict] = useState<any>(null);

  const updateStatus = (c: number) => {
    if (c < 35) setVerdict({ label: 'HYPOTHERMIA', color: 'text-blue-400', bg: 'bg-blue-950/50', border: 'border-blue-500', desc: 'Medical emergency. Rewarm immediately.' });
    else if (c >= 36.1 && c <= 37.2) setVerdict({ label: 'NORMAL', color: 'text-emerald-400', bg: 'bg-emerald-950/50', border: 'border-emerald-500', desc: 'Standard physiological temperature.' });
    else if (c > 37.2 && c <= 38) setVerdict({ label: 'ELEVATED', color: 'text-orange-400', bg: 'bg-orange-950/50', border: 'border-orange-500', desc: 'Possible low-grade fever.' });
    else if (c > 38 && c <= 40) setVerdict({ label: 'FEVER', color: 'text-red-400', bg: 'bg-red-950/50', border: 'border-red-500', desc: 'Pyrexia detected. Monitor patient.' });
    else if (c > 40) setVerdict({ label: 'CRITICAL', color: 'text-red-500', bg: 'bg-red-950', border: 'border-red-600', desc: 'Hyperpyrexia. Emergency intervention required.' });
    else setVerdict(null);
  };

  const handleCChange = (val: string) => {
    setCelsius(val);
    if (val === '') { setFahrenheit(''); setVerdict(null); return; }
    const c = parseFloat(val);
    if (!isNaN(c)) {
      setFahrenheit(((c * 9/5) + 32).toFixed(1));
      updateStatus(c);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white flex items-center justify-center gap-4 uppercase italic tracking-tighter">
              <Thermometer className="w-10 h-10 text-blue-500" />
              Body <span className="text-blue-500">Temp</span>
          </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest text-center">Celsius (°C)</label>
          <input 
            type="number" 
            value={celsius} 
            onChange={(e) => handleCChange(e.target.value)}
            onFocus={(e) => e.target.select()}
            className="w-full p-6 text-4xl font-black text-center bg-slate-900 border-4 border-slate-700 rounded-2xl text-blue-400 focus:border-blue-500 focus:ring-8 focus:ring-blue-500/20 outline-none transition-all shadow-inner" 
            placeholder="37.0"
          />
        </div>
        <div className="space-y-3">
          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest text-center">Fahrenheit (°F)</label>
          <input 
            type="number" 
            value={fahrenheit} 
            readOnly
            className="w-full p-6 text-4xl font-black text-center bg-slate-900/50 border-4 border-slate-800 rounded-2xl text-slate-300 outline-none opacity-80" 
            placeholder="98.6"
          />
        </div>
      </div>
      {verdict && (
        <VerdictBox 
          title="Diagnostic Analysis" 
          verdict={verdict.label} 
          description={verdict.desc} 
          colorClass={verdict.color} 
          bgClass={verdict.bg} 
          borderColor={verdict.border} 
        />
      )}
      <ClinicalReference 
        title="Temperature"
        ranges={[
          { label: 'Normal Range', value: '36.1°C – 37.2°C', color: 'text-emerald-400' },
          { label: 'Hypothermia', value: '< 35.0°C', color: 'text-blue-400' },
          { label: 'Fever (Pyrexia)', value: '> 38.0°C', color: 'text-red-400' },
          { label: 'Hyperpyrexia', value: '> 40.0°C', color: 'text-red-600' }
        ]}
      />
    </div>
  );
};

const BloodPressureCalculator = () => {
  const [sys, setSys] = useState('');
  const [dia, setDia] = useState('');
  
  const getVerdict = () => {
    const s = parseInt(sys);
    const d = parseInt(dia);
    if (isNaN(s) || isNaN(d)) return null;
    if (s > 180 || d > 120) return { label: 'CRISIS', color: 'text-red-500', bg: 'bg-red-950', border: 'border-red-600', desc: 'HYPERTENSIVE CRISIS. Seek immediate care.' };
    if (s >= 140 || d >= 90) return { label: 'STAGE 2', color: 'text-red-400', bg: 'bg-red-950/50', border: 'border-red-500', desc: 'Hypertension Stage 2' };
    if ((s >= 130 && s <= 139) || (d >= 80 && d <= 89)) return { label: 'STAGE 1', color: 'text-orange-400', bg: 'bg-orange-950/50', border: 'border-orange-500', desc: 'Hypertension Stage 1' };
    if (s >= 120 && s <= 129 && d < 80) return { label: 'ELEVATED', color: 'text-amber-400', bg: 'bg-amber-950/50', border: 'border-amber-500', desc: 'Early hypertension indicator.' };
    if (s < 120 && d < 80) return { label: 'NORMAL', color: 'text-emerald-400', bg: 'bg-emerald-950/50', border: 'border-emerald-500', desc: 'Optimal vascular pressure.' };
    return { label: 'ANOMALOUS', color: 'text-slate-400', bg: 'bg-slate-900', border: 'border-slate-800', desc: 'Check input parity.' };
  };
  
  const verdict = getVerdict();
  
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white flex items-center justify-center gap-4 uppercase italic tracking-tighter">
              <Activity className="w-10 h-10 text-rose-500" />
              Blood <span className="text-rose-500">Pressure</span>
          </h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex-1 space-y-3 w-full">
          <label className="block text-xs font-black text-slate-500 text-center uppercase tracking-[0.2em]">Systolic</label>
          <input 
            type="number" 
            value={sys} 
            onChange={(e) => setSys(e.target.value)} 
            onFocus={(e) => e.target.select()}
            className="w-full p-8 text-5xl font-black text-center bg-slate-900 border-4 border-slate-700 rounded-[2rem] text-blue-400 focus:border-blue-500 focus:ring-12 focus:ring-blue-500/10 outline-none shadow-2xl" 
            placeholder="120" 
          />
        </div>
        <span className="hidden sm:block text-4xl font-black text-slate-800">/</span>
        <div className="flex-1 space-y-3 w-full">
          <label className="block text-xs font-black text-slate-500 text-center uppercase tracking-[0.2em]">Diastolic</label>
          <input 
            type="number" 
            value={dia} 
            onChange={(e) => setDia(e.target.value)} 
            onFocus={(e) => e.target.select()}
            className="w-full p-8 text-5xl font-black text-center bg-slate-900 border-4 border-slate-700 rounded-[2rem] text-blue-400 focus:border-blue-500 focus:ring-12 focus:ring-blue-500/10 outline-none shadow-2xl" 
            placeholder="80" 
          />
        </div>
      </div>
      {verdict && (
        <VerdictBox 
          title="AHA Analysis" 
          verdict={verdict.label} 
          description={verdict.desc} 
          colorClass={verdict.color} 
          bgClass={verdict.bg} 
          borderColor={verdict.border} 
        />
      )}
      <ClinicalReference 
        title="AHA BP"
        ranges={[
          { label: 'Normal', value: '< 120 / < 80', color: 'text-emerald-400' },
          { label: 'Elevated', value: '120–129 / < 80', color: 'text-amber-400' },
          { label: 'Stage 1 HTN', value: '130–139 / 80–89', color: 'text-orange-400' },
          { label: 'Stage 2 HTN', value: '≥ 140 / ≥ 90', color: 'text-red-400' },
          { label: 'Crisis', value: '> 180 / > 120', color: 'text-red-600' }
        ]}
      />
    </div>
  );
};

const HeartRateCalculator = () => {
  const [hr, setHr] = useState('');
  let verdict = null;
  const val = parseInt(hr);
  if (!isNaN(val)) {
    if (val < 60) verdict = { label: 'BRADYCARDIA', color: 'text-blue-400', bg: 'bg-blue-950/50', border: 'border-blue-500', desc: 'Heart rate is below rest norms.' };
    else if (val >= 60 && val <= 100) verdict = { label: 'NORMAL', color: 'text-emerald-400', bg: 'bg-emerald-950/50', border: 'border-emerald-500', desc: 'Pulse is within healthy rest range.' };
    else verdict = { label: 'TACHYCARDIA', color: 'text-red-400', bg: 'bg-red-950/50', border: 'border-red-500', desc: 'Resting pulse is abnormally high.' };
  }
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white flex items-center justify-center gap-4 uppercase italic tracking-tighter">
              <Heart className="w-10 h-10 text-rose-500 animate-pulse" />
              Pulse <span className="text-rose-500">Rate</span>
          </h2>
      </div>
      <div className="space-y-4 text-center">
        <label className="block text-sm font-black text-slate-500 uppercase tracking-[0.3em]">Beats Per Minute</label>
        <div className="relative max-w-xs mx-auto">
          <input 
            type="number" 
            value={hr} 
            onChange={(e) => setHr(e.target.value)} 
            onFocus={(e) => e.target.select()}
            className="w-full p-8 text-7xl font-black text-center bg-slate-900 border-4 border-slate-700 rounded-[2.5rem] text-rose-400 focus:border-rose-500 focus:ring-16 focus:ring-rose-500/10 outline-none shadow-2xl" 
            placeholder="72" 
          />
        </div>
      </div>
      {verdict && (
        <VerdictBox 
          title="Cardiac Analysis" 
          verdict={verdict.label} 
          description={verdict.desc} 
          colorClass={verdict.color} 
          bgClass={verdict.bg} 
          borderColor={verdict.border} 
        />
      )}
      <ClinicalReference 
        title="Resting Pulse"
        ranges={[
          { label: 'Bradycardia', value: '< 60 BPM', color: 'text-blue-400' },
          { label: 'Normal Resting', value: '60 – 100 BPM', color: 'text-emerald-400' },
          { label: 'Tachycardia', value: '> 100 BPM', color: 'text-red-400' }
        ]}
      />
    </div>
  );
};

const RespiratoryRateCalculator = () => {
  const [rr, setRr] = useState('');
  let verdict = null;
  const val = parseInt(rr);
  if (!isNaN(val)) {
    if (val < 12) verdict = { label: 'BRADYPNEA', color: 'text-blue-400', bg: 'bg-blue-950/50', border: 'border-blue-500', desc: 'Slowed respiratory cycle.' };
    else if (val >= 12 && val <= 20) verdict = { label: 'NORMAL', color: 'text-emerald-400', bg: 'bg-emerald-950/50', border: 'border-emerald-500', desc: 'Homeostatic breathing rate.' };
    else verdict = { label: 'TACHYPNEA', color: 'text-red-400', bg: 'bg-red-950/50', border: 'border-red-500', desc: 'Respiratory cycle is elevated.' };
  }
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white flex items-center justify-center gap-4 uppercase italic tracking-tighter">
              <Wind className="w-10 h-10 text-cyan-400" />
              Respiration
          </h2>
      </div>
      <div className="space-y-4 text-center">
        <label className="block text-sm font-black text-slate-500 uppercase tracking-[0.3em]">Breaths Per Minute</label>
        <div className="relative max-w-xs mx-auto">
          <input 
            type="number" 
            value={rr} 
            onChange={(e) => setRr(e.target.value)} 
            onFocus={(e) => e.target.select()}
            className="w-full p-8 text-7xl font-black text-center bg-slate-900 border-4 border-slate-700 rounded-[2.5rem] text-cyan-400 focus:border-cyan-500 focus:ring-16 focus:ring-cyan-500/10 outline-none shadow-2xl" 
            placeholder="16" 
          />
        </div>
      </div>
      {verdict && (
        <VerdictBox 
          title="Respiratory Analysis" 
          verdict={verdict.label} 
          description={verdict.desc} 
          colorClass={verdict.color} 
          bgClass={verdict.bg} 
          borderColor={verdict.border} 
        />
      )}
      <ClinicalReference 
        title="Adult Respiration"
        ranges={[
          { label: 'Bradypnea', value: '< 12 breaths/min', color: 'text-blue-400' },
          { label: 'Normal Range', value: '12 – 20 breaths/min', color: 'text-emerald-400' },
          { label: 'Tachypnea', value: '> 20 breaths/min', color: 'text-red-400' }
        ]}
      />
    </div>
  );
};

const GeneralTemperatureConverter = () => {
    const [val, setVal] = useState('');
    const [from, setFrom] = useState('C');
    const [to, setTo] = useState('F');
    const [result, setResult] = useState<string | null>(null);

    const convert = (vStr: string, currentFrom: string, currentTo: string) => {
        const v = parseFloat(vStr);
        if (isNaN(v)) { setResult(null); return; }
        let c = v;
        if (currentFrom === 'F') c = (v - 32) * 5/9;
        if (currentFrom === 'K') c = v - 273.15;
        let res = c;
        if (currentTo === 'F') res = c * 9/5 + 32;
        if (currentTo === 'K') res = c + 273.15;
        setResult(res.toFixed(2));
    };

    const handleInput = (v: string) => {
        setVal(v);
        convert(v, from, to);
    };

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-black text-white flex items-center justify-center gap-4 uppercase italic tracking-tighter">
                    <Flame className="w-10 h-10 text-orange-500" />
                    Temp <span className="text-orange-500">Unit</span>
                </h2>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-[2rem] border-4 border-slate-700 space-y-8 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Source</label>
                        <select 
                            value={from} 
                            onChange={(e) => { setFrom(e.target.value); convert(val, e.target.value, to); }} 
                            className="w-full p-4 rounded-xl border-4 border-slate-800 bg-slate-950 font-black text-lg text-white outline-none focus:border-orange-500 transition-all cursor-pointer"
                        >
                            <option value="C">Celsius (°C)</option>
                            <option value="F">Fahrenheit (°F)</option>
                            <option value="K">Kelvin (K)</option>
                        </select>
                    </div>
                    <div className="flex-1 space-y-2">
                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Target</label>
                        <select 
                            value={to} 
                            onChange={(e) => { setTo(e.target.value); convert(val, from, e.target.value); }} 
                            className="w-full p-4 rounded-xl border-4 border-slate-800 bg-slate-950 font-black text-lg text-white outline-none focus:border-orange-500 transition-all cursor-pointer"
                        >
                            <option value="C">Celsius (°C)</option>
                            <option value="F">Fahrenheit (°F)</option>
                            <option value="K">Kelvin (K)</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] text-center block">Value</label>
                    <input 
                        type="number" 
                        value={val} 
                        onChange={(e) => handleInput(e.target.value)} 
                        onFocus={(e) => e.target.select()}
                        className="w-full p-6 text-5xl font-black rounded-2xl border-4 border-orange-500 bg-slate-950 focus:ring-16 focus:ring-orange-500/10 outline-none text-orange-400 text-center shadow-inner" 
                        placeholder="0.0" 
                    />
                </div>
                
                {result !== null && (
                    <VerdictBox 
                        title="RESULT" 
                        verdict={`${result}°${to}`} 
                        description={`Conversion between standard scales.`} 
                        colorClass="text-emerald-400" 
                        bgClass="bg-slate-950" 
                        borderColor="border-emerald-500" 
                    />
                )}
            </div>
        </div>
    );
};

const GenericUnitConverter: React.FC<{ data: any }> = ({ data }) => {
    const [amount, setAmount] = useState<string>('1');
    const [fromUnit, setFromUnit] = useState<string>('');
    const [toUnit, setToUnit] = useState<string>('');

    useEffect(() => {
        const unitKeys = Object.keys(data.units);
        setFromUnit(unitKeys[0]);
        setToUnit(unitKeys[1] || unitKeys[0]);
    }, [data]);

    const factorFrom = data.units[fromUnit] || 1;
    const factorTo = data.units[toUnit] || 1;
    const parsedAmount = parseFloat(amount);
    
    const resultValue = !isNaN(parsedAmount) 
        ? (parsedAmount * factorFrom / factorTo).toPrecision(6).replace(/\.0+$/, '') 
        : '...';

    const getVerdict = () => {
        if (isNaN(parsedAmount)) return null;
        const ratio = factorFrom / factorTo;
        if (ratio > 1000) return { label: 'EXPANSION', desc: `Magnitude increased across smaller units.` };
        if (ratio < 0.001) return { label: 'REDUCTION', desc: `Magnitude compressed into larger units.` };
        return { label: 'SYNCHRONY', desc: `Linear conversion within the same scale.` };
    };

    const verdict = getVerdict();

    if (!fromUnit || !toUnit) return null;

    return (
        <div className="max-w-xl mx-auto space-y-8">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-black text-white flex items-center justify-center gap-4 uppercase italic tracking-tighter">
                    <ArrowRightLeft className="w-10 h-10 text-emerald-500" />
                    {data.name}
                </h2>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2rem] border-4 border-slate-700 space-y-8 shadow-2xl">
                 <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">From</label>
                    <div className="flex flex-col gap-3">
                         <input 
                            type="number" 
                            value={amount} 
                            onChange={(e) => setAmount(e.target.value)}
                            onFocus={(e) => e.target.select()}
                            className="w-full p-6 rounded-2xl border-4 border-blue-500 bg-slate-950 focus:ring-12 focus:ring-blue-500/10 outline-none font-black text-4xl text-blue-400 text-center shadow-inner"
                         />
                         <select 
                            value={fromUnit} 
                            onChange={(e) => setFromUnit(e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-slate-800 bg-slate-950 font-black text-lg text-white outline-none cursor-pointer focus:border-blue-500"
                         >
                            {Object.keys(data.units).map(u => <option key={u} value={u}>{u}</option>)}
                         </select>
                    </div>
                 </div>

                 <div className="flex justify-center -my-6 relative z-10">
                     <button 
                        onClick={() => { setFromUnit(toUnit); setToUnit(fromUnit); }}
                        className="bg-blue-600 p-4 rounded-full shadow-2xl border-4 border-white hover:scale-110 transition-all active:scale-90 group"
                        aria-label="Swap units"
                     >
                        <ArrowRightLeft className="w-6 h-6 text-white rotate-90 group-hover:rotate-0 transition-transform duration-500" />
                     </button>
                 </div>

                 <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest px-1">Result</label>
                    <div className="flex flex-col gap-3">
                         <div className="w-full p-8 rounded-2xl bg-slate-950 border-4 border-emerald-500 font-black text-4xl sm:text-5xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(16,185,129,0.2)] overflow-hidden text-center min-h-[100px]">
                             {resultValue}
                         </div>
                         <select 
                            value={toUnit} 
                            onChange={(e) => setToUnit(e.target.value)}
                            className="w-full p-4 rounded-xl border-2 border-slate-800 bg-slate-950 font-black text-lg text-white outline-none cursor-pointer focus:border-emerald-500"
                         >
                            {Object.keys(data.units).map(u => <option key={u} value={u}>{u}</option>)}
                         </select>
                    </div>
                 </div>
            </div>

            {verdict && (
              <VerdictBox 
                title="CONVERSION SUMMARY" 
                verdict={verdict.label} 
                description={verdict.desc} 
                colorClass="text-blue-400" 
                bgClass="bg-slate-950" 
                borderColor="border-blue-500" 
              />
            )}

            <div className="text-center p-4 bg-slate-900 rounded-2xl text-slate-300 border-2 border-slate-800 shadow-xl">
                <p className="text-sm font-black italic tracking-tight">
                  1 {fromUnit} = <span className="text-emerald-400">{(factorFrom / factorTo).toPrecision(6).replace(/\.0+$/, '')}</span> {toUnit}
                </p>
            </div>
        </div>
    );
};
import { TutorChapter, GameLink } from './types';

export const TUTOR_DATA: TutorChapter[] = [
  { id: 'ch1', title: 'Ch 1: Intro to A&P', url: 'https://chatgpt.com/g/g-682531082b14819183653596232dcbea-ap1-chapter-1-tutor-vitruvian', icon: '🚀' },
  { id: 'ch2', title: 'Ch 2: Chemical Level', url: 'https://chatgpt.com/g/g-6825f9e451c0819190c17641878b0393-ap1-chapter-2-tutor-vitruvian', icon: '⚛️' },
  { id: 'ch3', title: 'Ch 3: Cellular Level', url: 'https://chatgpt.com/g/g-682601884d348191b346df7eb082fb02-ap1-chapter-3-tutor-vitruvian', icon: '🔬' },
  { id: 'ch4', title: 'Ch 4: Metabolism', url: 'https://chatgpt.com/g/g-68261af948b48191a0867364db06c09e-ap1-chapter-4-tutor-vitruvian', icon: '⚡' },
  { id: 'ch5', title: 'Ch 5: Tissues', url: 'https://chatgpt.com/g/g-6827a86d2f2881918569e25e39f87f28-ap1-chapter-5-tutor-vitruvian', icon: '🧱' },
  { id: 'ch6', title: 'Ch 6: Integumentary', url: 'https://chatgpt.com/g/g-6827aa5ee70081919a2ca87b38793430-ap1-chapter-6-tutor-vitruvian', icon: '🧤' },
  { id: 'ch7', title: 'Ch 7: Skeletal (Bones)', url: 'https://chatgpt.com/g/g-6827ac08f23c8191900121ad33382ade-ap1-chapter-7-tutor-vitruvian', icon: '🦴' },
  { id: 'ch8', title: 'Ch 8: Skeletal (Joints)', url: 'https://chatgpt.com/g/g-6827ae7baf248191b267ccc37778215a-ap1-chapter-8-tutor-vitruvian', icon: '🔗' },
  { id: 'ch9', title: 'Ch 9: Muscular System', url: 'https://chatgpt.com/g/g-6827b1816de881918e3fa8190f3515bd-ap1-chapter-9-tutor-vitruvian', icon: '💪' },
  { id: 'ch10', title: 'Ch 10-12: Nervous Sys', url: 'https://chatgpt.com/g/g-6827b3d602e0819192d3dd81d5902fb1-ap1-chapters-10-11-12-tutor-vitruvian', icon: '🧠' },
  { id: 'ch13', title: 'Ch 13: Endocrine', url: 'https://chatgpt.com/g/g-6828fa8663f48191b3e3480227b841ad-ap1-chapter-13-tutor-vitruvian', icon: '💫' },
  { id: 'ch14', title: 'Ch 14: Blood', url: 'https://chatgpt.com/g/g-6828fc47ced08191bac969b479ff8f29-ap1-chapter-14-tutor-vitruvian', icon: '🩸' },
  { id: 'ch15', title: 'Ch 15: Cardiovascular', url: 'https://chatgpt.com/g/g-6828fe9210ec81918509b214d962dd6f-ap1-chapter-15-tutor-vitruvian', icon: '❤️' },
  { id: 'ch16', title: 'Ch 16: Immune System', url: 'https://chatgpt.com/g/g-6829024364b08191971cd952f46b4436-ap1-chapter-16-tutor-vitruvian', icon: '🛡️' },
  { id: 'ch17', title: 'Ch 17: Digestive', url: 'https://chatgpt.com/g/g-682903e1d2d48191b56fdeec98702455-ap2-chapter-17-tutor-vitruvian', icon: '🍏' },
  { id: 'ch18', title: 'Ch 18: Nutrition', url: 'https://chatgpt.com/g/g-682905f8f81c81919ae1651447d07d48-ap2-chapter-18-tutor-vitruvian', icon: '🍎' },
  { id: 'ch19', title: 'Ch 19: Respiratory', url: 'https://chatgpt.com/g/g-682909a0f99881918501d6aea27a1613-ap2-chapter-19-tutor-vitruvian', icon: '🌬️' },
  { id: 'ch20', title: 'Ch 20: Urinary', url: 'https://chatgpt.com/g/g-68290b46f8f081919b533feda41ee375-ap2-chapter-20-tutor-vitruvian', icon: '💧' },
  { id: 'ch21', title: 'Ch 21: Fluid Balance', url: 'https://chatgpt.com/g/g-68290d4e64b8819189ee168772587207-ap2-chapter-21-tutor-vitruvian', icon: '⚖️' },
  { id: 'ch22', title: 'Ch 22: Reproductive', url: 'https://chatgpt.com/g/g-6829f90995cc8191a2f3dfef60a4a0a5-ap2-chapter-22-tutor-vitruvian', icon: '👶' },
  { id: 'ch23', title: 'Ch 23: Growth/Dev', url: 'https://chatgpt.com/g/g-6829fc0ce4ec81991b08ea3d0a870172a-ap2-chapter-23-tutor-vitruvian', icon: '🤰' },
  { id: 'ch24', title: 'Ch 24: Genetics', url: 'https://chatgpt.com/g/g-6829fecd7e488191814f224b633f7f39-ap2-chapter-24-tutor-vitruvian', icon: '🧬' },
];

export const GAME_DATA: GameLink[] = [
  {
    id: 'g1',
    title: 'Intro to A&P',
    url: 'https://vitruvianintrotoapch1.netlify.app/',
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Vitruvian%20Man%20sketch%20medical%20educational%20cartoon%20illustration'
  },
  {
    id: 'g2',
    title: 'Body BREAKOUT',
    url: 'https://anatomyesc-kbbnpll3.manus.space/',
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Human%20anatomy%20muscle%20model%20medical%20educational%20cartoon%20illustration'
  },
  {
    id: 'g3',
    title: 'Atomic Rum - Pitfall',
    url: 'https://atom-quest-path.lovable.app/',
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Atomic%20molecule%20structure%20medical%20educational%20cartoon%20illustration'
  },
  {
    id: 'g4',
    title: 'Chemical Level',
    url: 'https://chemistryforap.netlify.app/',
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Science%20chemistry%20lab%20desk%20medical%20educational%20cartoon%20illustration'
  },
  {
    id: 'g5',
    title: 'BioScape',
    url: 'https://brainy-escape-quests.lovable.app',
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Chemical%20beakers%20and%20flasks%20set%20medical%20educational%20cartoon%20illustration'
  },
  {
    id: 'g6',
    title: 'The Cellular Quest',
    url: 'https://bio-escape-lab.lovable.app',
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Biological%20animal%20cell%20cross%20section%20medical%20educational%20cartoon%20illustration'
  },
  {
    id: 'g7',
    title: 'Membrane Passive Escape',
    url: 'https://membranepassivescape.netlify.app/',
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Cell%20membrane%20lipid%20bilayer%20closeup%20medical%20educational%20cartoon%20illustration'
  },
  {
    id: 'g8',
    title: 'The Cell Cycle',
    url: 'https://thecellcycle.netlify.app/',
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Biological%20cell%20dividing%20mitosis%20stages%20medical%20educational%20cartoon%20illustration'
  },
  {
    id: 'g9',
    title: 'Nano Muscle Reset',
    url: 'https://nano-muscle-reset.lovable.app',
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Microscopic%20muscle%20fibers%20and%20biology%20cells%20medical%20educational%20cartoon%20illustration'
  },
  {
    id: 'g10',
    title: 'ATP Architect',
    url: 'https://ai.studio/apps/drive/1p47xYJKrGXzCA26-oHq8PmpOlbpUrUiO',
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Adenosine%20triphosphate%20ATP%20molecule%20blueprint%20and%20mitochondria%20energy%20medical%20educational%20cartoon%20illustration'
  },
  {
    id: 'g11',
    title: 'MembraneX',
    url: '#internal-membranex',
    isInternal: true,
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Vitruvian%20Man%20style%20sketch%20of%20biological%20cell%20membrane%20cross%20section%20with%20lipids%20medical%20educational%20cartoon%20illustration',
    internalContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MembraneX | Bio-System Restoration</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        :root {
            --bg-void: #050505;
            --text-primary: #E0E0E0;
            --neon-cyan: #00FFD1;
            --bio-amber: #FFB800;
            --alert-red: #FF2A2A;
            --scanline-color: rgba(0, 255, 209, 0.03);
        }
        body {
            background-color: var(--bg-void);
            color: var(--text-primary);
            font-family: 'Courier New', Courier, monospace;
            height: 100dvh;
            overflow: hidden;
            user-select: none;
        }
        .scanlines {
            background: linear-gradient(to bottom, var(--scanline-color) 50%, rgba(0, 0, 0, 0) 50%);
            background-size: 100% 4px;
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            pointer-events: none; z-index: 50;
        }
        .terminal-box { border: 1px solid #333; box-shadow: 0 0 10px rgba(0, 255, 209, 0.1); }
        .bio-btn { border: 1px solid var(--neon-cyan); color: var(--neon-cyan); transition: all 0.2s; background: rgba(0, 255, 209, 0.05); }
        .bio-btn:hover:not(:disabled) { background: var(--neon-cyan); color: var(--bg-void); box-shadow: 0 0 15px var(--neon-cyan); cursor: pointer; }
        .bio-btn:disabled { border-color: #555; color: #555; cursor: not-allowed; }
        .bio-btn.correct { background: var(--neon-cyan); color: var(--bg-void); }
        .bio-btn.wrong { border-color: var(--alert-red); color: var(--alert-red); background: rgba(255, 42, 42, 0.1); }
        .drop-zone { border: 2px dashed #444; background: rgba(0,0,0,0.3); transition: all 0.3s; }
        .drop-zone.drag-over { border-color: var(--neon-cyan); background: rgba(0, 255, 209, 0.1); box-shadow: 0 0 15px rgba(0, 255, 209, 0.2); }
        .drop-zone.matched { border: 2px solid var(--neon-cyan); background: rgba(0, 255, 209, 0.2); color: var(--bg-void); }
        .draggable-item { cursor: grab; background: #111; border: 1px solid var(--bio-amber); color: var(--bio-amber); box-shadow: 0 0 5px rgba(255, 184, 0, 0.2); }
        .draggable-item:active { cursor: grabbing; }
        .draggable-item.dragging { opacity: 0.5; }
        .draggable-item.matched-hidden { display: none; }
        .sim-container { background: #111; border: 1px solid #333; height: 100px; position: relative; overflow: hidden; margin-bottom: 1rem; }
        .piston-track { position: absolute; top: 50%; left: 10%; right: 10%; height: 4px; background: #333; transform: translateY(-50%); }
        .piston-head { width: 40px; height: 60px; background: var(--alert-red); position: absolute; top: 50%; left: 10%; transform: translateY(-50%); box-shadow: 0 0 10px var(--alert-red); border: 2px solid #fff; }
        .piston-jerky { animation: jerkySlide 2s infinite linear; }
        .piston-smooth { animation: smoothSlide 2s infinite ease-in-out; background: var(--neon-cyan) !important; box-shadow: 0 0 15px var(--neon-cyan) !important; }
        .piston-stuck { left: 50% !important; animation: stuckPulse 0.5s infinite; }
        @keyframes jerkySlide { 0% { left: 10%; } 15% { left: 12%; } 20% { left: 30%; } 35% { left: 32%; } 40% { left: 60%; } 55% { left: 58%; } 60% { left: 80%; } 75% { left: 82%; } 80% { left: 50%; } 100% { left: 10%; } }
        @keyframes smoothSlide { 0% { left: 10%; } 50% { left: 80%; } 100% { left: 10%; } }
        @keyframes stuckPulse { 0% { transform: translateY(-50%) scale(1); opacity: 1; } 50% { transform: translateY(-50%) scale(1.1); opacity: 0.5; } 100% { transform: translateY(-50%) scale(1); opacity: 1; } }
        .core-container { display: flex; justify-content: center; align-items: center; height: 150px; }
        .core-orb { width: 80px; height: 80px; border-radius: 50%; background: radial-gradient(circle, var(--bio-amber) 10%, transparent 70%); box-shadow: 0 0 20px var(--bio-amber); animation: pulse 2s infinite ease-in-out; transition: all 0.5s ease; }
        .core-orb.stable { background: radial-gradient(circle, var(--neon-cyan) 10%, transparent 70%); box-shadow: 0 0 20px var(--neon-cyan); animation: pulse 4s infinite ease-in-out; }
        .core-orb.critical { background: radial-gradient(circle, var(--alert-red) 10%, transparent 70%); box-shadow: 0 0 30px var(--alert-red); animation: pulse 0.5s infinite ease-in-out; }
        @keyframes pulse { 0% { transform: scale(0.95); opacity: 0.7; } 50% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(0.95); opacity: 0.7; } }
        details > summary { list-style: none; cursor: pointer; padding: 0.5rem; background: rgba(255, 255, 255, 0.05); border-bottom: 1px solid #333; }
        details > summary:hover { color: var(--neon-cyan); }
        details[open] > summary { border-bottom: 1px solid var(--neon-cyan); color: var(--neon-cyan); }
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: #111; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #333; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: var(--neon-cyan); }
        select { background: #111; color: var(--neon-cyan); border: 1px solid var(--neon-cyan); padding: 8px; font-family: inherit; width: 100%; cursor: pointer; }
    </style>
</head>
<body class="flex flex-col p-2 md:p-6 text-sm md:text-base">
    <div class="scanlines"></div>
    <header class="mb-2 md:mb-4 terminal-box bg-black/80 z-10 flex-shrink-0">
        <details class="group">
            <summary class="flex justify-between items-center font-bold uppercase tracking-widest text-xs md:text-sm">
                <span>[ MEMBRANEX CODEX ]</span>
                <span class="text-[var(--neon-cyan)] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-400 bg-gray-900/50 max-h-48 overflow-y-auto custom-scroll">
                <div><strong class="text-[var(--neon-cyan)]">Cutaneous:</strong> Dry membrane (skin). Keratinized stratified squamous epithelium.</div>
                <div><strong class="text-[var(--neon-cyan)]">Mucous:</strong> Wet membrane. Lines cavities open to exterior (digestive, respiratory).</div>
                <div><strong class="text-[var(--neon-cyan)]">Serous:</strong> Wet, double-layered. Lines closed ventral cavities.</div>
                <div><strong class="text-[var(--neon-cyan)]">Synovial:</strong> Connective tissue only. Lines joint cavities.</div>
                <div class="border-t border-gray-700 pt-2 mt-2 col-span-1 md:col-span-2 text-[var(--bio-amber)]">// SPECIFIC SEROUS MEMBRANES //</div>
                <div><strong class="text-[var(--bio-amber)]">Pleura:</strong> Lungs & Pleural Cavity.</div>
                <div><strong class="text-[var(--bio-amber)]">Pericardium:</strong> Heart & Pericardial Cavity.</div>
                <div><strong class="text-[var(--bio-amber)]">Peritoneum:</strong> Abdominal Organs & Peritoneal Cavity.</div>
            </div>
        </details>
    </header>
    <main class="flex-grow grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 h-full min-h-0 overflow-y-auto md:overflow-hidden">
        <section class="md:col-span-4 terminal-box bg-black/50 flex flex-col min-h-0 order-2 md:order-1">
            <div class="p-2 border-b border-[#333] text-[var(--bio-amber)] text-xs font-bold uppercase">> System_Log.log</div>
            <div id="terminal-output" class="p-4 overflow-y-auto custom-scroll font-mono text-xs md:text-sm leading-relaxed h-32 md:h-auto md:flex-grow">
                <div class="mb-2 text-gray-500">Initializing MembraneX v2.1...</div>
                <div class="mb-2 text-[var(--alert-red)]">ALERT: System Integrity at 45%. Membrane failure detected.</div>
            </div>
        </section>
        <section class="md:col-span-5 terminal-box bg-black/50 flex flex-col min-h-0 relative order-1 md:order-2">
            <div class="p-2 border-b border-[#333] flex justify-between items-center text-xs">
                <span class="text-[var(--neon-cyan)] uppercase">> Sector: <span id="sector-name">Loading...</span></span>
                <span id="progress-indicator">0 / 6</span>
            </div>
            <div class="core-container relative flex-shrink-0"><div id="core-visual" class="core-orb"></div></div>
            <div class="px-6 py-2 text-center flex-shrink-0"><p id="question-text" class="text-sm md:text-lg font-bold leading-relaxed text-white">Initialize Simulation to begin diagnostics.</p></div>
            <div id="options-container" class="p-4 flex-grow flex flex-col justify-end mt-2 overflow-hidden">
                <button id="start-btn" onclick="initGame()" class="bio-btn py-3 px-4 font-bold uppercase tracking-widest w-full">[ Initialize System Restoration ]</button>
            </div>
        </section>
        <section class="md:col-span-3 terminal-box bg-black/50 flex flex-col order-3">
            <div class="p-2 border-b border-[#333] text-[var(--neon-cyan)] text-xs font-bold uppercase">> Engineer_Status</div>
            <div class="p-4 flex-grow">
                <div class="mb-6"><div class="text-xs text-gray-500 mb-1">System Health</div><div class="w-full bg-[#111] h-2 rounded-full overflow-hidden"><div id="health-bar" class="h-full bg-[var(--bio-amber)] transition-all duration-500" style="width: 45%"></div></div></div>
                <div class="mb-6"><div class="text-xs text-gray-500 mb-1">Protocol</div><div id="protocol-name" class="text-sm font-bold text-white">Standby</div></div>
                <div id="badge-container" class="opacity-0 transition-opacity duration-1000 border border-[var(--neon-cyan)] p-2 text-center"><div class="text-[var(--neon-cyan)] text-4xl mb-2">❖</div><div class="text-xs uppercase font-bold text-[var(--neon-cyan)]">Certified<br>Bio-Architect</div></div>
            </div>
        </section>
    </main>
    <script>
        const gameData = [
            { id: 1, type: 'quiz', stageName: "The Outer Hull", narrative: "External sensors detect hull breach.", question: "Identify the MEMBRANE TYPE acting as the dry, keratinized outer shield.", options: ["Mucous Membrane", "Cutaneous Membrane", "Serous Membrane", "Synovial Membrane"], correctIndex: 1, feedback: "Correct. Cutaneous membrane (Skin) is the dry, keratinized epithelium.", techFeedback: "Hull restored." },
            { id: 2, type: 'quiz', stageName: "I/O Manifolds", narrative: "Intake ports compromising.", question: "Which MEMBRANE TYPE lines body cavities OPEN to the exterior?", options: ["Serous Membrane", "Cutaneous Membrane", "Mucous Membrane", "Synovial Membrane"], correctIndex: 2, feedback: "Correct. Mucosae line cavities open to the exterior.", techFeedback: "Intake ports sealed." },
            { id: 3, type: 'quiz', stageName: "Internal Hydraulics", narrative: "Internal friction detected.", question: "Identify the double-layered membrane system for CLOSED ventral body cavities.", options: ["Serous Membrane", "Synovial Membrane", "Mucous Membrane", "Cutaneous Membrane"], correctIndex: 0, feedback: "Correct. Serous membranes (Serosae) line closed ventral cavities.", techFeedback: "Hydraulics pressurized." },
            { id: 4, type: 'quiz', stageName: "Kinetic Articulators", narrative: "Joint actuators grinding.", question: "Identify the Connective Tissue membrane lining the JOINT CAVITIES.", options: ["Cutaneous Membrane", "Serous Membrane", "Mucous Membrane", "Synovial Membrane"], correctIndex: 3, feedback: "Correct. Synovial membranes lubricate joint cavities.", techFeedback: "Articulators lubricated." },
            { id: 5, type: 'matching', stageName: "Hydraulic Routing", narrative: "Serous fluid leaks detected. Route membranes to organ systems.", pairs: [{id:"p1",source:"Pleura",target:"Lungs & Pleural Cavity"},{id:"p2",source:"Pericardium",target:"Heart & Pericardial Cavity"},{id:"p3",source:"Peritoneum",target:"Abdominal Organs"}], feedback: "Routing complete. Pleura (Lungs), Pericardium (Heart), Peritoneum (Abdomen).", techFeedback: "Circuits stabilized.", question: "Manual Override: Drag the Membrane Patch to its correct Target System." },
            { id: 6, type: 'simulation', stageName: "Friction Fixer", narrative: "Pleural Piston seizing. Physics engine requires lubrication.", correctCombo: { membrane: "Serous", fluid: "Serous Fluid" }, feedback: "Optimal State. Serous fluid minimizes friction.", techFeedback: "Friction coefficient nominal.", question: "INSTRUCTION: Select correct configuration to lubricate the piston." }
        ];

        let currentLevel = 0; let systemHealth = 45; let audioCtx; let matchesMade = 0; let draggedItem = null; let selectedItem = null;

        function initAudio() { if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
        
        function playSound(type) {
            if(!audioCtx) return; const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination);
            const now = audioCtx.currentTime;
            if(type==='click'){ osc.type='square'; osc.frequency.setValueAtTime(800, now); osc.frequency.exponentialRampToValueAtTime(300, now+0.1); gainNode.gain.setValueAtTime(0.05, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now+0.1); osc.start(now); osc.stop(now+0.1); }
            else if(type==='success'){ osc.type='sine'; osc.frequency.setValueAtTime(440, now); osc.frequency.setValueAtTime(880, now+0.1); gainNode.gain.setValueAtTime(0.1, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now+0.5); osc.start(now); osc.stop(now+0.5); }
            else if(type==='error'){ osc.type='sawtooth'; osc.frequency.setValueAtTime(150, now); osc.frequency.linearRampToValueAtTime(100, now+0.3); gainNode.gain.setValueAtTime(0.1, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now+0.3); osc.start(now); osc.stop(now+0.3); }
        }

        function logToTerminal(msg, type='info') {
            const term = document.getElementById('terminal-output'); if(!term) return;
            const entry = document.createElement('div'); entry.className = "mb-2 animate-pulse " + (type==='error'?'text-[var(--alert-red)]':type==='success'?'text-[var(--neon-cyan)]':'text-gray-400');
            entry.innerHTML = \`<span class="opacity-50">[\${new Date().toLocaleTimeString('en-US',{hour12:false})}]</span> \${msg}\`;
            term.appendChild(entry); term.scrollTop = term.scrollHeight;
        }

        function initGame() { initAudio(); playSound('success'); const startBtn = document.getElementById('start-btn'); if(startBtn) startBtn.remove(); loadLevel(); }

        function loadLevel() {
            const data = gameData[currentLevel]; matchesMade = 0; draggedItem = null; selectedItem = null;
            const sectorName = document.getElementById('sector-name'); if(sectorName) sectorName.innerText = data.stageName;
            const protocolName = document.getElementById('protocol-name'); if(protocolName) protocolName.innerText = "Diagnostics Running...";
            const progInd = document.getElementById('progress-indicator'); if(progInd) progInd.innerText = \`\${currentLevel + 1} / 6\`;
            const qText = document.getElementById('question-text'); if(qText) qText.innerText = data.question;
            logToTerminal("--------------------------------");
            logToTerminal("INITIATING PHASE " + (currentLevel + 1) + ": " + data.stageName.toUpperCase());
            logToTerminal(data.narrative);
            const container = document.getElementById('options-container'); if(!container) return;
            container.innerHTML = '';
            if (data.type === 'quiz') renderQuiz(data, container);
            else if (data.type === 'matching') renderMatching(data, container);
            else if (data.type === 'simulation') renderSimulation(data, container);
        }

        function renderQuiz(data, container) {
            container.className = "p-4 grid grid-cols-1 gap-3 mt-auto";
            data.options.forEach((opt, idx) => {
                const btn = document.createElement('button'); btn.className = "bio-btn py-3 px-4 font-bold uppercase text-left w-full";
                btn.innerHTML = \`<span class="opacity-50 mr-2">0\${idx+1} ::</span> \${opt}\`;
                btn.onclick = () => { if(idx === data.correctIndex) { playSound('success'); btn.classList.add('correct'); logToTerminal("Match Confirmed.", "success"); heal(); proceed(); } else { playSound('error'); damage(); btn.classList.add('wrong'); btn.disabled=true; } }; container.appendChild(btn);
            });
        }

        function renderMatching(data, container) {
            container.className = "p-2 flex flex-col md:flex-row justify-between min-h-[20rem] md:h-64 mt-2 gap-4 overflow-y-auto custom-scroll";
            const sCol = document.createElement('div'); sCol.className = "w-full md:w-1/3 grid grid-cols-1 gap-2 md:flex md:flex-col md:justify-center md:gap-4";
            const tCol = document.createElement('div'); tCol.className = "w-full md:w-1/2 flex flex-col justify-center gap-2 md:gap-4";
            const shuffled = [...data.pairs].sort(() => Math.random() - 0.5);
            shuffled.forEach(p => {
                const item = document.createElement('div'); item.className = "draggable-item p-3 text-center text-xs md:text-sm font-bold rounded cursor-grab";
                item.innerText = p.source; item.draggable = true; item.dataset.pairId = p.id;
                item.addEventListener('dragstart', function(e){ draggedItem = this; setTimeout(()=>this.classList.add('dragging'),0); });
                item.addEventListener('dragend', function(){ this.classList.remove('dragging'); draggedItem=null; });
                item.onclick = () => { document.querySelectorAll('.draggable-item').forEach(d => { d.style.border="1px solid var(--bio-amber)"; }); selectedItem=item; item.style.border="2px solid white"; playSound('click'); };
                sCol.appendChild(item);
            });
            data.pairs.forEach(p => {
                const zone = document.createElement('div'); zone.className = "drop-zone p-3 text-center text-xs md:text-sm border rounded h-16 flex items-center justify-center text-gray-400";
                zone.innerText = \`[ \${p.target} ]\`; zone.dataset.targetId = p.id;
                zone.addEventListener('dragover', function(e){ e.preventDefault(); this.classList.add('drag-over'); });
                zone.addEventListener('dragleave', function(){ this.classList.remove('drag-over'); });
                zone.addEventListener('drop', function(e){ e.preventDefault(); this.classList.remove('drag-over'); if(draggedItem) checkMatch(draggedItem, this); });
                zone.onclick = () => { if(selectedItem && !this.classList.contains('matched')) { checkMatch(selectedItem, zone); selectedItem=null; } };
                tCol.appendChild(zone);
            }); container.appendChild(sCol); container.appendChild(tCol);
        }

        function checkMatch(item, zone) {
            if (item.dataset.pairId === zone.dataset.targetId) {
                playSound('success'); zone.classList.add('matched');
                zone.innerHTML = \`<strong>\${item.innerText}</strong><br><span class='text-[0.6rem]'>LINKED</span>\`;
                item.classList.add('matched-hidden'); matchesMade++; logToTerminal("Link Established: " + item.innerText, "success");
                if(matchesMade === 3){ heal(); proceed(); }
            } else { playSound('error'); damage(); zone.classList.add('border-red-500'); setTimeout(()=>zone.classList.remove('border-red-500'),500); logToTerminal("ERR: Protocol Incompatibility.", "error"); }
        }

        function renderSimulation(data, container) {
            container.className = "p-4 flex flex-col mt-auto"; container.innerHTML = \`<div class="sim-container"><div class="piston-track"></div><div id="piston" class="piston-head piston-jerky"></div><div class="absolute bottom-1 right-2 text-[10px] text-gray-500 uppercase">Friction Monitor</div></div><div class="grid grid-cols-2 gap-4 mb-4"><select id="s1"><option value="">Membrane...</option><option>Cutaneous</option><option>Mucous</option><option>Serous</option></select><select id="s2"><option value="">Fluid...</option><option>No Fluid</option><option>Mucus</option><option>Serous Fluid</option></select></div><button id="eb" class="bio-btn py-3 px-4 font-bold uppercase tracking-widest w-full">[ ENGAGE CONFIGURATION ]</button>\`;
            const eb = document.getElementById('eb');
            if(eb) eb.onclick = () => { 
                const s1 = document.getElementById('s1'); const s2 = document.getElementById('s2'); if(!s1 || !s2) return;
                const m = s1.value; const f = s2.value; if(!m || !f) return;
                if(m==="Serous" && f==="Serous Fluid"){ playSound('success'); document.getElementById('piston').className="piston-head piston-smooth"; heal(); proceed(); } 
                else { playSound('error'); damage(); const piston = document.getElementById('piston'); if(piston) { piston.className="piston-head piston-stuck"; setTimeout(()=>piston.className="piston-head piston-jerky",1000); } } 
            };
        }

        function heal() { systemHealth += 10; if(systemHealth>100) systemHealth=100; updateVisuals(); }
        function damage() { systemHealth -= 5; if(systemHealth<0) systemHealth=0; updateVisuals(); }
        
        function updateVisuals() { 
            const h = document.getElementById('health-bar'); if(!h) return; h.style.width = systemHealth + "%";
            const orb = document.getElementById('core-visual'); if(!orb) return;
            if(systemHealth > 80) { h.className="h-full bg-[var(--neon-cyan)] transition-all"; orb.className="core-orb stable"; }
            else if(systemHealth < 30) { h.className="h-full bg-[var(--alert-red)] transition-all"; orb.className="core-orb critical"; }
            else { h.className="h-full bg-[var(--bio-amber)] transition-all"; orb.className="core-orb"; }
        }

        function proceed() { currentLevel++; setTimeout(() => { if(currentLevel < gameData.length) loadLevel(); else triggerWin(); }, 2000); }

        function triggerWin() { 
            const container = document.getElementById('options-container'); if(container) container.innerHTML = \`<div class="text-center p-4 border border-[var(--neon-cyan)] bg-[rgba(0,255,209,0.1)] mb-4"><h2 class="text-xl font-bold text-[var(--neon-cyan)] mb-2 uppercase italic">SYSTEM RESTORED</h2><p class="text-xs">Membrane Integrity: 100%</p></div><button onclick="location.reload()" class="bio-btn py-3 px-4 font-bold uppercase w-full animate-pulse">[ REBOOT SYSTEM ]</button>\`;
            const pName = document.getElementById('protocol-name'); if(pName) pName.innerText = "Optimal State"; 
            const bCont = document.getElementById('badge-container'); if(bCont) bCont.style.opacity="1";
            logToTerminal("ALL BIOLOGICAL SYSTEMS ONLINE.", "success");
        }

        logToTerminal("STANDBY FOR ARCHITECT INPUT...");
    </script>
</body>
</html>`
  },
  {
    id: 'g12',
    title: 'Histology Challenge',
    url: '#internal-histology',
    isInternal: true,
    imagePlaceholder: 'https://image.pollinations.ai/prompt/Medical%20histology%20microscope%20slides%20tissue%20samples%20laboratory%20cartoon%20illustration',
    internalContent: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Histology Challenge: The Biopsy Lab</title>
    <style>
        :root {
            --bg-color: #1E1E1E;
            --text-color: #FFFFFF;
            --accent-primary: #FCB316; /* Amber */
            --accent-secondary: #3CB4E5; /* Cyan */
            --accent-error: #993399; /* Magenta */
            --font-mono: 'Courier New', Courier, monospace;
            --font-sans: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            --glass-panel: rgba(30, 30, 30, 0.95);
        }

        * {
            box-sizing: border-box;
            user-select: none;
        }

        body {
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: var(--font-sans);
            height: 100vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        /* --- CRT Scanline Effect --- */
        body::after {
            content: " ";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 100;
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
        }

        /* --- UI Components --- */
        .container {
            max-width: 900px;
            width: 100%;
            margin: 0 auto;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            height: 100%;
            position: relative;
            z-index: 10;
        }

        header {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 10px;
        }

        .header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .author-credit {
            font-family: var(--font-mono);
            font-size: 0.8rem;
            color: #666;
            text-align: right;
            border-bottom: 1px solid #333;
            padding-bottom: 5px;
            margin-bottom: 5px;
        }

        /* Accordion Reference */
        .reference-panel {
            border: 1px solid var(--accent-secondary);
            margin-bottom: 1rem;
            background: #000;
        }
        
        .accordion-header {
            background: var(--accent-secondary);
            color: #000;
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            padding: 0 1rem;
            font-size: 0.9rem;
            color: #ddd;
        }

        .accordion-content.active {
            max-height: 200px;
            padding: 1rem;
            border-top: 1px solid var(--accent-secondary);
            overflow-y: auto;
        }

        /* Terminal & Status */
        .dashboard {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
            align-items: center;
        }

        .terminal {
            flex: 1;
            background: #000;
            border: 1px solid var(--accent-primary);
            height: 120px;
            padding: 0.5rem;
            font-family: var(--font-mono);
            font-size: 0.85rem;
            color: var(--accent-primary);
            overflow-y: auto;
            box-shadow: 0 0 10px rgba(252, 179, 22, 0.2);
        }

        .status-orb-container {
            width: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .status-orb {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, var(--accent-secondary), #000);
            box-shadow: 0 0 15px var(--accent-secondary);
            margin-bottom: 0.5rem;
            transition: all 0.5s ease;
        }

        .status-orb.critical {
            background: radial-gradient(circle at 30% 30%, var(--accent-error), #000);
            box-shadow: 0 0 20px var(--accent-error);
            animation: pulse-red 1s infinite;
        }

        @keyframes pulse-red {
            0% { transform: scale(0.95); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(0.95); opacity: 0.8; }
        }

        .badge-rack {
            display: flex;
            gap: 5px;
            height: 20px;
        }

        .badge {
            width: 15px;
            height: 15px;
            background: #333;
            border: 1px solid #555;
            border-radius: 50%;
        }

        .badge.earned {
            background: var(--accent-primary);
            box-shadow: 0 0 5px var(--accent-primary);
        }

        /* Game Stage Area */
        .game-stage {
            flex: 1;
            border: 2px solid var(--accent-secondary);
            background: rgba(0,0,0,0.4);
            position: relative;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
        }

        .stage-title {
            position: absolute;
            top: -12px;
            left: 20px;
            background: var(--bg-color);
            padding: 0 10px;
            color: var(--accent-secondary);
            font-family: var(--font-mono);
            letter-spacing: 2px;
        }

        .btn {
            background: transparent;
            border: 1px solid var(--accent-primary);
            color: var(--accent-primary);
            padding: 10px 20px;
            font-family: var(--font-mono);
            cursor: pointer;
            transition: all 0.2s;
            text-transform: uppercase;
            font-weight: bold;
            margin: 5px;
        }

        .btn:hover {
            background: var(--accent-primary);
            color: #000;
            box-shadow: 0 0 15px var(--accent-primary);
        }

        .btn:disabled {
            opacity: 0.3;
            cursor: not-allowed;
            border-color: #555;
            color: #555;
        }

        /* --- Stage Specific Layouts --- */

        /* Stage 1: Classification buttons */
        .classification-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            width: 100%;
            max-width: 600px;
        }

        .class-btn {
            height: 100px;
            border: 2px dashed var(--accent-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: var(--accent-secondary);
            cursor: pointer;
        }
        .class-btn:hover { background: rgba(60, 180, 229, 0.1); }
        .class-btn.correct-hint { border-color: var(--accent-primary); color: var(--accent-primary); animation: flash 1s infinite; }

        @keyframes flash { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

        /* Stage 2: Drag and Drop */
        .sorting-bay {
            display: flex;
            width: 100%;
            gap: 20px;
            height: 100%;
        }
        
        .conveyor {
            flex: 1;
            background: rgba(255,255,255,0.05);
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-top: 4px solid #333;
        }

        .drop-zones {
            flex: 2;
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            gap: 10px;
        }

        .bin {
            border: 1px solid #555;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            color: #888;
            transition: 0.3s;
        }

        .bin.drag-over {
            border-color: var(--accent-secondary);
            background: rgba(60, 180, 229, 0.1);
            color: var(--accent-secondary);
        }

        .draggable-item {
            background: var(--bg-color);
            border: 1px solid var(--accent-primary);
            color: var(--accent-primary);
            padding: 10px 15px;
            margin-bottom: 10px;
            cursor: grab;
            width: 90%;
            text-align: center;
            font-weight: bold;
        }

        .draggable-item:active { cursor: grabbing; }

        /* Stage 3: Builder UI */
        .builder-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            width: 100%;
        }
        
        .preview-chamber {
            width: 320px;
            height: 200px;
            border: 2px solid var(--accent-secondary);
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: flex-end; /* Build from bottom */
            padding: 20px;
            position: relative;
            overflow: hidden;
            border-bottom: 4px solid #333; /* Basement membrane */
        }
        
        .preview-chamber::after {
            content: "Basement Membrane";
            position: absolute;
            bottom: 2px;
            width: 100%;
            text-align: center;
            font-size: 0.7rem;
            color: #555;
        }

        .tissue-stack {
            display: flex;
            flex-direction: column-reverse; /* Stack upwards */
            gap: 2px;
        }

        .cell-row {
            display: flex;
            gap: 2px;
            justify-content: center;
        }

        .cell {
            background: transparent;
            border: 1px solid var(--accent-primary);
            box-shadow: inset 0 0 5px rgba(252, 179, 22, 0.3);
            transition: all 0.3s ease;
            position: relative;
        }
        /* Nucleus */
        .cell::after {
            content: "";
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 6px; height: 6px;
            background: var(--accent-primary);
            border-radius: 50%;
            opacity: 0.6;
        }

        .cell.squamous { width: 50px; height: 15px; border-radius: 50%; }
        .cell.cuboidal { width: 35px; height: 35px; border-radius: 4px; }
        .cell.columnar { width: 25px; height: 60px; border-radius: 4px; }

        .builder-controls {
            display: flex;
            gap: 30px;
        }

        .control-group {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .control-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 5px;
        }

        .selector-btn {
            background: #333;
            border: 1px solid var(--accent-secondary);
            color: var(--accent-secondary);
            width: 30px; height: 30px;
            cursor: pointer;
            font-weight: bold;
        }
        .selector-btn:hover { background: var(--accent-secondary); color: #000; }

        .selector-display {
            color: #fff;
            font-family: var(--font-mono);
            min-width: 120px;
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
        }

        /* Overlay */
        .overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.9);
            z-index: 50;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        
        .hidden { display: none !important; }
        
        h1, h2, h3 { margin: 0; padding: 0.5rem 0; font-family: var(--font-mono); }
    </style>
</head>
<body>

<div class="container">
    <header>
        <div class="header-top">
            <h2 style="color: var(--accent-secondary);">// HISTOLOGY CHALLENGE: BIOPSY_LAB</h2>
            <button id="reset-btn" class="btn" onclick="game.reset()">Reboot</button>
        </div>
        <div class="author-credit">
            by Dr. Victor Garcia Martinez
        </div>
        
        <div class="reference-panel">
            <div class="accordion-header" onclick="toggleAccordion()">
                <span>[?] PROTOCOL REFERENCE DATABASE</span>
                <span id="acc-icon">+</span>
            </div>
            <div class="accordion-content" id="reference-content">
                <p><strong style="color:var(--accent-primary)">Connective Tissue Proper:</strong> Loose (Areolar, Adipose, Reticular) & Dense (Regular, Irregular, Elastic).</p>
                <p><strong style="color:var(--accent-secondary)">Specialized Connective Tissue:</strong> Cartilage, Bone, and Blood.</p>
                <p><strong style="color:var(--accent-error)">Mesenchyme:</strong> The embryonic tissue from which ALL connective tissues originate.</p>
                <p><strong style="color:#fff">Epithelial Morphology:</strong><br>
                - Squamous (Flat)<br>
                - Cuboidal (Square)<br>
                - Columnar (Tall)<br>
                - Simple (1 Layer) vs Stratified (Multiple Layers)</p>
            </div>
        </div>
    </header>

    <div class="dashboard">
        <div class="terminal" id="terminal-log">
            > SYSTEM STANDBY...<br>
            > WAITING FOR USER INPUT...
        </div>
        <div class="status-orb-container">
            <div id="orb" class="status-orb"></div>
            <div class="badge-rack">
                <div class="badge" id="badge-1"></div>
                <div class="badge" id="badge-2"></div>
                <div class="badge" id="badge-3"></div>
            </div>
        </div>
    </div>

    <main class="game-stage" id="stage-container">
        <!-- Dynamic Content Injected Here -->
        <button class="btn" style="font-size: 1.5rem;" onclick="game.start()">INITIATE DIAGNOSTICS</button>
    </main>
</div>

<!-- Scripts -->
<script>
    /* --- DATA CONFIGURATION --- */
    const gameData = [
        {
            id: 1,
            type: 'classification',
            title: "STAGE 01: TAXONOMY UNLOCK",
            prompt: "Incoming Sample: <strong>ADIPOSE TISSUE</strong>. Classify immediately.",
            options: [
                { label: "Connective Tissue Proper", value: "proper", correct: true },
                { label: "Specialized Connective Tissue", value: "specialized", correct: false }
            ]
        },
        {
            id: 2,
            type: 'sorting',
            title: "STAGE 02: BIN ASSEMBLY",
            prompt: "Sort the tissues into their functional industrial bins.",
            items: [
                { id: 'item1', name: 'ADIPOSE', target: 'bin-storage' },
                { id: 'item2', name: 'BLOOD', target: 'bin-transport' },
                { id: 'item3', name: 'BONE', target: 'bin-support' }
            ],
            bins: [
                { id: 'bin-storage', label: '[STORAGE / INSULATION]' },
                { id: 'bin-transport', label: '[TRANSPORT NETWORK]' },
                { id: 'bin-support', label: '[RIGID SUPPORT]' }
            ]
        },
        {
            id: 3,
            type: 'builder',
            title: "STAGE 03: MORPHOLOGY CONSTRUCTOR",
            prompt: "SCAN ALERT: Patient has suffered epidermal abrasion. Reconstruct the skin barrier for maximum <strong>PROTECTION</strong>.",
            target: { shape: 'squamous', layers: 'stratified' },
            hint: "High friction requires many layers of flat cells (Stratified Squamous)."
        }
    ];

    /* --- AUDIO SYSTEM (Web Audio API) --- */
    class AudioSystem {
        constructor() {
            this.ctx = null;
        }

        init() {
            if (!this.ctx) {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            }
        }

        playTone(type) {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);

            const now = this.ctx.currentTime;
            
            if (type === 'success') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(440, now);
                osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
            } else if (type === 'error') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(150, now);
                osc.frequency.linearRampToValueAtTime(100, now + 0.3);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
            } else if (type === 'hover') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(2000, now);
                gain.gain.setValueAtTime(0.02, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
            } else if (type === 'click') {
                osc.type = 'square';
                osc.frequency.setValueAtTime(400, now);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
            }
        }
    }

    /* --- GAME ENGINE --- */
    class GameEngine {
        constructor(data) {
            this.data = data;
            this.currentStageIndex = 0;
            this.mistakes = 0;
            this.audio = new AudioSystem();
            
            // Builder State
            this.builderState = { shapeIdx: 0, layerIdx: 0 };
            this.shapes = ['squamous', 'cuboidal', 'columnar'];
            this.layers = ['simple', 'stratified'];

            // DOM Elements
            this.terminal = document.getElementById('terminal-log');
            this.stageContainer = document.getElementById('stage-container');
            this.orb = document.getElementById('orb');
            this.badges = [
                document.getElementById('badge-1'),
                document.getElementById('badge-2'),
                document.getElementById('badge-3')
            ];
        }

        log(msg, type = 'info') {
            const line = document.createElement('div');
            line.innerHTML = \`> \${msg}\`;
            if (type === 'error') line.style.color = 'var(--accent-error)';
            if (type === 'success') line.style.color = 'var(--accent-secondary)';
            this.terminal.appendChild(line);
            this.terminal.scrollTop = this.terminal.scrollHeight;
        }

        start() {
            this.audio.init();
            this.currentStageIndex = 0;
            this.resetState();
            this.log("INITIALIZING TRIAGE PROTOCOLS...", "success");
            this.loadStage();
        }

        reset() {
            location.reload();
        }

        resetState() {
            this.mistakes = 0;
            this.orb.classList.remove('critical');
            this.badges.forEach(b => b.classList.remove('earned'));
            this.log("SYSTEM REBOOTED.");
        }

        loadStage() {
            if (this.currentStageIndex >= this.data.length) {
                this.showVictory();
                return;
            }

            const stage = this.data[this.currentStageIndex];
            this.mistakes = 0;
            this.orb.classList.remove('critical');
            
            // Clear container
            this.stageContainer.innerHTML = \`<div class="stage-title">\${stage.title}</div>\`;
            
            // Render specific stage type
            if (stage.type === 'classification') this.renderClassification(stage);
            else if (stage.type === 'sorting') this.renderSorting(stage);
            else if (stage.type === 'builder') this.renderBuilder(stage);

            this.log(\`LOADED: \${stage.title}\`);
        }

        /* --- STAGE RENDERERS --- */

        renderClassification(stage) {
            const wrapper = document.createElement('div');
            wrapper.style.textAlign = 'center';
            wrapper.innerHTML = \`<h3 style="margin-bottom:20px">\${stage.prompt}</h3>\`;
            
            const grid = document.createElement('div');
            grid.className = 'classification-grid';

            stage.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'class-btn';
                btn.textContent = opt.label;
                btn.id = \`opt-\${idx}\`;
                btn.onclick = () => this.handleClassChoice(opt.correct, btn);
                grid.appendChild(btn);
            });

            wrapper.appendChild(grid);
            this.stageContainer.appendChild(wrapper);
        }

        renderSorting(stage) {
            const wrapper = document.createElement('div');
            wrapper.style.width = '100%';
            wrapper.style.height = '100%';
            wrapper.innerHTML = \`<h3 style="margin-bottom:15px; text-align:center;">\${stage.prompt}</h3>\`;

            const bay = document.createElement('div');
            bay.className = 'sorting-bay';

            // Items Conveyor
            const conveyor = document.createElement('div');
            conveyor.className = 'conveyor';
            conveyor.id = 'conveyor-belt';
            
            stage.items.forEach(item => {
                const div = document.createElement('div');
                div.className = 'draggable-item';
                div.draggable = true;
                div.textContent = item.name;
                div.dataset.target = item.target;
                div.id = item.id;
                
                div.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', e.target.id);
                    e.dataTransfer.setData('target-bin', e.target.dataset.target);
                    this.audio.playTone('hover');
                });
                conveyor.appendChild(div);
            });

            // Drop Zones
            const drops = document.createElement('div');
            drops.className = 'drop-zones';
            
            stage.bins.forEach(bin => {
                const binDiv = document.createElement('div');
                binDiv.className = 'bin';
                binDiv.id = bin.id;
                binDiv.textContent = bin.label;
                
                binDiv.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    binDiv.classList.add('drag-over');
                });

                binDiv.addEventListener('dragleave', () => {
                    binDiv.classList.remove('drag-over');
                });

                binDiv.addEventListener('drop', (e) => this.handleDrop(e, binDiv));
                
                drops.appendChild(binDiv);
            });

            bay.appendChild(conveyor);
            bay.appendChild(drops);
            wrapper.appendChild(bay);
            this.stageContainer.appendChild(wrapper);
        }

        renderBuilder(stage) {
            // Reset state
            this.builderState = { shapeIdx: 0, layerIdx: 0 };

            const wrapper = document.createElement('div');
            wrapper.className = 'builder-container';
            wrapper.innerHTML = \`<h3 style="margin-bottom:10px; text-align:center;">\${stage.prompt}</h3>\`;

            // Preview Window
            const preview = document.createElement('div');
            preview.className = 'preview-chamber';
            preview.id = 'build-preview';
            
            // Stack Container
            const stack = document.createElement('div');
            stack.className = 'tissue-stack';
            stack.id = 'tissue-stack';
            preview.appendChild(stack);

            // Controls
            const controls = document.createElement('div');
            controls.className = 'builder-controls';

            // Shape Control
            const shapeCtrl = this.createControlGroup('Cell Shape', this.shapes, 'shapeIdx');
            // Layer Control
            const layerCtrl = this.createControlGroup('Layers', this.layers, 'layerIdx');

            controls.appendChild(shapeCtrl);
            controls.appendChild(layerCtrl);

            // Confirm Button
            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'btn';
            confirmBtn.style.marginTop = '20px';
            confirmBtn.textContent = 'INITIATE SYNTHESIS';
            confirmBtn.onclick = () => this.checkBuilderSolution();

            wrapper.appendChild(preview);
            wrapper.appendChild(controls);
            wrapper.appendChild(confirmBtn);
            
            this.stageContainer.appendChild(wrapper);
            this.updateBuilderPreview();
        }

        createControlGroup(label, arr, stateKey) {
            const group = document.createElement('div');
            group.className = 'control-group';
            
            const title = document.createElement('div');
            title.textContent = label;
            title.style.fontSize = '0.8rem';
            title.style.color = '#888';

            const row = document.createElement('div');
            row.className = 'control-row';

            const prevBtn = document.createElement('button');
            prevBtn.className = 'selector-btn';
            prevBtn.textContent = '<';
            prevBtn.onclick = () => {
                this.audio.playTone('click');
                this.builderState[stateKey] = (this.builderState[stateKey] - 1 + arr.length) % arr.length;
                this.updateBuilderDisplay(row, arr[this.builderState[stateKey]]);
                this.updateBuilderPreview();
            };

            const display = document.createElement('div');
            display.className = 'selector-display';
            display.textContent = arr[0]; // init

            const nextBtn = document.createElement('button');
            nextBtn.className = 'selector-btn';
            nextBtn.textContent = '>';
            nextBtn.onclick = () => {
                this.audio.playTone('click');
                this.builderState[stateKey] = (this.builderState[stateKey] + 1) % arr.length;
                this.updateBuilderDisplay(row, arr[this.builderState[stateKey]]);
                this.updateBuilderPreview();
            };

            row.appendChild(prevBtn);
            row.appendChild(display);
            row.appendChild(nextBtn);

            group.appendChild(title);
            group.appendChild(row);
            return group;
        }

        updateBuilderDisplay(row, text) {
            row.querySelector('.selector-display').textContent = text;
        }

        updateBuilderPreview() {
            const stack = document.getElementById('tissue-stack');
            stack.innerHTML = ''; // Clear

            const currentShape = this.shapes[this.builderState.shapeIdx];
            const currentLayer = this.layers[this.builderState.layerIdx];

            // Determine rows
            const rowCount = (currentLayer === 'stratified') ? 3 : 1;
            // Determine cells per row based on shape width
            let cellsPerRow = 4; 
            if (currentShape === 'cuboidal') cellsPerRow = 6;
            if (currentShape === 'columnar') cellsPerRow = 8;

            for (let i = 0; i < rowCount; i++) {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'cell-row';
                for (let j = 0; j < cellsPerRow; j++) {
                    const cell = document.createElement('div');
                    cell.className = \`cell \${currentShape}\`;
                    rowDiv.appendChild(cell);
                }
                stack.appendChild(rowDiv);
            }
        }

        checkBuilderSolution() {
            const currentShape = this.shapes[this.builderState.shapeIdx];
            const currentLayer = this.layers[this.builderState.layerIdx];
            const target = this.data[this.currentStageIndex].target;

            if (currentShape === target.shape && currentLayer === target.layers) {
                this.audio.playTone('success');
                this.log("TISSUE SYNTHESIS STABLE. STRUCTURE VERIFIED.", "success");
                this.completeStage();
            } else {
                this.handleError(document.getElementById('build-preview'));
            }
        }

        /* --- LOGIC HANDLERS --- */

        handleClassChoice(isCorrect, element) {
            if (isCorrect) {
                this.audio.playTone('success');
                this.log("ANALYSIS CORRECT. PROCEEDING...", "success");
                this.completeStage();
            } else {
                this.handleError(element);
            }
        }

        handleDrop(e, bin) {
            e.preventDefault();
            bin.classList.remove('drag-over');
            
            const itemId = e.dataTransfer.getData('text/plain');
            const targetId = e.dataTransfer.getData('target-bin');
            
            if (bin.id === targetId) {
                // Correct Drop
                this.audio.playTone('success');
                const item = document.getElementById(itemId);
                bin.textContent = \`\${bin.textContent} [FILLED]\`;
                bin.style.color = 'var(--accent-secondary)';
                bin.style.borderColor = 'var(--accent-secondary)';
                item.remove();
                
                // Check if conveyor empty
                const remaining = document.getElementById('conveyor-belt').children.length;
                if (remaining === 0) {
                    this.completeStage();
                }
            } else {
                this.handleError(bin);
            }
        }

        handleError(element) {
            this.mistakes++;
            this.audio.playTone('error');
            this.log(\`ERROR DETECTED. ATTEMPT \${this.mistakes}/2\`, "error");
            
            // Visual feedback
            element.style.borderColor = 'var(--accent-error)';
            setTimeout(() => {
                element.style.borderColor = ''; // Reverts to CSS default or null
                // Small fix: The preview chamber has specific border color in CSS, so we should clear inline style
                // but if we are in builder, element has accent-secondary border by default in CSS.
                // This simple clear works because it falls back to CSS.
            }, 500);

            if (this.mistakes >= 2) {
                this.orb.classList.add('critical');
                this.activateFailSafe();
            }
        }

        activateFailSafe() {
            this.log("FAILSAFE ENGAGED: HINT ROUTED TO HUD.", "error");
            
            const stage = this.data[this.currentStageIndex];
            
            if (stage.type === 'classification') {
                stage.options.forEach((opt, idx) => {
                    if (opt.correct) {
                        const el = document.getElementById(\`opt-\${idx}\`);
                        if(el) el.classList.add('correct-hint');
                    }
                });
            }
            else if (stage.type === 'sorting') {
               this.log("HINT: ADIPOSE -> STORAGE | BLOOD -> TRANSPORT | BONE -> SUPPORT");
            }
            else if (stage.type === 'builder') {
                this.log(\`HINT: \${stage.hint}\`, "error");
            }
        }

        completeStage() {
            this.badges[this.currentStageIndex].classList.add('earned');
            this.currentStageIndex++;
            setTimeout(() => {
                this.loadStage();
            }, 1000);
        }

        showVictory() {
            this.stageContainer.innerHTML = \`
                <div style="text-align:center">
                    <h1 style="color:var(--accent-primary); font-size: 3rem;">SYSTEM RESTORED</h1>
                    <p>TRIAGE ALGORITHM OPTIMIZED.</p>
                    <p>ALL BADGES SECURED.</p>
                    <button class="btn" onclick="game.reset()">RESET SIMULATION</button>
                </div>
            \`;
            this.log("MISSION COMPLETE. SYSTEM ONLINE.", "success");
            this.orb.style.background = "var(--accent-primary)";
            this.audio.playTone('success');
        }
    }

    /* --- INITIALIZATION --- */
    const game = new GameEngine(gameData);

    function toggleAccordion() {
        const content = document.getElementById('reference-content');
        const icon = document.getElementById('acc-icon');
        content.classList.toggle('active');
        icon.textContent = content.classList.contains('active') ? '-' : '+';
    }
</script>
</body>
</html>`
  },
];

export const CONVERTER_DATA: Record<string, { name: string, units: Record<string, number> }> = {
  LENGTH: {
    name: 'Length',
    units: {
      'Millimeter (mm)': 0.001,
      'Centimeter (cm)': 0.01,
      'Meter (m)': 1,
      'Kilometer (km)': 1000,
      'Inch (in)': 0.0254,
      'Foot (ft)': 0.3048,
      'Yard (yd)': 0.9144,
      'Mile (mi)': 1609.34
    }
  },
  MASS: {
    name: 'Mass & Weight',
    units: {
      'Milligram (mg)': 0.001,
      'Gram (g)': 1,
      'Kilogram (kg)': 1000,
      'Ounce (oz)': 28.3495,
      'Pound (lb)': 453.592,
      'Metric Ton': 1000000
    }
  },
  VOLUME: {
    name: 'Volume',
    units: {
      'Milliliter (ml)': 1,
      'Liter (L)': 1000,
      'Cubic Meter': 1000000,
      'Teaspoon (tsp)': 4.92892,
      'Tablespoon (tbsp)': 14.7868,
      'Fluid Ounce (fl oz)': 29.5735,
      'Cup': 240,
      'Pint (pt)': 473.176,
      'Quart (qt)': 946.353,
      'Gallon (gal)': 3785.41
    }
  },
  PRESSURE: {
    name: 'Pressure',
    units: {
      'Pascal (Pa)': 1,
      'Kilopascal (kPa)': 1000,
      'Bar': 100000,
      'PSI': 6894.76,
      'mmHg (torr)': 133.322,
      'Atmosphere (atm)': 101325
    }
  },
  ENERGY: {
    name: 'Energy',
    units: {
      'Joule (J)': 1,
      'Kilojoule (kJ)': 1000,
      'Calorie (cal)': 4.184,
      'Kilocalorie (kcal)': 4184,
      'Watt-hour (Wh)': 3600,
      'Kilowatt-hour (kWh)': 3600000,
      'Electronvolt (eV)': 1.60218e-19
    }
  },
  TIME: {
    name: 'Time',
    units: {
      'Second (s)': 1,
      'Minute (min)': 60,
      'Hour (hr)': 3600,
      'Day': 86400,
      'Week': 604800,
      'Year (365d)': 31536000
    }
  }
};

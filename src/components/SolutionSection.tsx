"use client";

import { motion } from "framer-motion";
import { SOLUTION_STEPS } from "../content/solutionSteps";

// --- ANIMATION COMPONENTS ---

const IngestAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-blue-900/5 overflow-hidden">
    {/* Server Icon */}
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/20 z-10">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" strokeWidth="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" strokeWidth="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
      <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
    </svg>
    {/* Moving Particles */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-highlight-100 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
      />
    ))}
  </div>
);

const AnalyzeAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-blue-900/5">
    {/* Document */}
    <div className="w-20 h-28 bg-white/5 border border-white/10 rounded flex flex-col gap-2 p-2 overflow-hidden relative">
       <div className="w-3/4 h-1.5 bg-white/10 rounded" />
       <div className="w-full h-1.5 bg-white/10 rounded" />
       {/* Risky Line */}
       <motion.div 
         className="w-5/6 h-1.5 rounded"
         animate={{ backgroundColor: ["rgba(255,255,255,0.1)", "rgba(239,68,68,0.8)", "rgba(255,255,255,0.1)"] }}
         transition={{ duration: 2, repeat: Infinity, times: [0, 0.5, 1] }}
       />
       <div className="w-1/2 h-1.5 bg-white/10 rounded" />
    </div>
    {/* Scanner Beam */}
    <motion.div
      className="absolute w-24 h-0.5 bg-highlight-100 shadow-[0_0_10px_rgba(59,130,246,1)]"
      animate={{ top: ["20%", "80%", "20%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const ReportAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-blue-900/5">
     {/* Dashboard Base */}
     <div className="w-28 h-20 bg-white/5 border border-white/10 rounded flex items-center justify-center relative">
        <div className="w-full h-full grid grid-cols-2 gap-1 p-2">
            <div className="bg-white/5 rounded" />
            <div className="bg-white/5 rounded" />
            <div className="col-span-2 bg-white/5 rounded" />
        </div>
        
        {/* Alert Icon Pop */}
        <motion.div
          className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-lg border border-red-400 z-10"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          <span className="font-bold text-xs">!</span>
        </motion.div>
     </div>
  </div>
);


export const SolutionSection = () => {
  return (
    <section id="howitworks" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-highlight-100 font-bold tracking-widest text-xs uppercase mb-4"
          >
            PRODUCT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            How it works
          </motion.h2>
        </div>

        {/* 2. Three Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-900/0 via-blue-500/20 to-blue-900/0 -z-10" />

          {SOLUTION_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full border border-highlight-800/20 flex items-center justify-center text-highlight-100 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] z-10 bg-[#0f1115]">
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-xs h-16">
                {step.description}
              </p>

              {/* Animation Box */}
              <div className="w-full aspect-video bg-black/40 rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden group">
                 {/* Conditionally Render Animations based on Index */}
                 {index === 0 && <IngestAnimation />}
                 {index === 1 && <AnalyzeAnimation />}
                 {index === 2 && <ReportAnimation />}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Security Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full bg-blue-900/10 border border-blue-500/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-8"
        >
          {/* Shield Icon */}
          <div className="flex-shrink-0 p-4 bg-blue-500/20 rounded-full text-blue-400">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Your Data, Your Control</h3>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              ClawScan is an on-premise solution. Your sensitive data is processed entirely 
              within your firewall and is never exposed to the cloud or third parties, 
              ensuring maximum security and regulatory compliance.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
"use client";

import { motion } from "framer-motion";
import { SOLUTION_STEPS } from "../content/solutionSteps";

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Header */}
        <div className="text-center mb-20">
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
          
          {/* Connector Line (Desktop Only) - Optional visual flair */}
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
              <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] z-10">
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-xs">
                {step.description}
              </p>

              {/* Animation Placeholder Box */}
              <div className="w-full aspect-video bg-white/5 rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <span className="text-xs text-gray-600 font-mono uppercase tracking-widest">
                   (Animation Placeholder)
                 </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Security Banner ("Your Data, Your Control") */}
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
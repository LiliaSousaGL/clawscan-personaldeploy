// src/components/ClientLogos.tsx
"use client";

import { motion } from "framer-motion";
// FIX: Using relative path ".." to go up to src, then down to content
import { CLIENT_LOGOS } from "../content/clientData"; 

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { // <-- This transition block is now correctly placed
      type: "spring", 
      stiffness: 100, 
      damping: 20 
    } 
  },
};

export const ClientLogos = () => {
  return (
    <section id="logos" className="py-16 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold text-gray-500 uppercase tracking-widest mb-10">
          Trusted by companies who demand perfection
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {CLIENT_LOGOS.map((client, index) => (
            <motion.div
              key={client.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
 
          
            >
              {/* Placeholder for the logo image */}
              <div className="h-10 w-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity border border-white/5 rounded bg-white/5">
                 <span className="text-sm font-bold text-gray-400">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
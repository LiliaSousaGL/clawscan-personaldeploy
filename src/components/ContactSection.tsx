"use client";

import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Form Container (Pipedrive Embed Area) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Book Your Free Demo
          </h3>
          
          {/* 📌 PASTE PIPEDRIVE EMBED CODE HERE */}
          <div 
            className="w-full h-96 flex items-center justify-center bg-black/50 rounded-lg border border-dashed border-blue-500/50 text-blue-400 text-sm font-mono p-4 text-center"
          >
            [Pipedrive Form Placeholder - Paste Your Embed Code Here Later]
          </div>

          <p className="text-xs text-gray-500 mt-6 text-center">
             We respect your privacy. No spam. You will be contacted by a dedicated compliance expert.
          </p>

        </motion.div>
      </div>
    </section>
  );
};
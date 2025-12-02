// src/components/ProductSection.tsx
"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { FEATURES } from "../content/features";

export const ProductSection = () => {
  return (
    <section id="product" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            ClawScan explained
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            ClawScan is an AI-powered email screening tool that helps your organization 
            maintain legal compliance by intelligently identifying and flagging sensitive 
            information. Our on-premise solution ensures your data remains secure while 
            providing the scalability and governance your enterprise needs.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }} // Staggered animation
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
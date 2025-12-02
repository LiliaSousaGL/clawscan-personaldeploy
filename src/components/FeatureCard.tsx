// src/components/FeatureCard.tsx
"use client";

import { motion } from "framer-motion";
import { Feature } from "../content/features";

export const FeatureCard = ({ title, description, icon }: Feature) => {
  return (
    <motion.div
      whileHover={{ y: -5 }} // Subtle lift on hover
      className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 h-full flex flex-col items-start"
    >
      <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
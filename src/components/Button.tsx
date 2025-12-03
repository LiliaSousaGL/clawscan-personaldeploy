// src/components/Button.tsx
"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
}

export const Button = ({ children, primary = false }: ButtonProps) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`
      px-8 py-3 rounded-lg text-base font-semibold cursor-pointer transition-colors duration-200
      
      ${primary 
        // 📌 NEW COLORS: Use highlight-100 and petrol-80 for the gradient
        ? 'bg-gradient-to-r from-highlight-100 to-petrol-80 text-white shadow-lg hover:from-highlight-80 hover:to-petrol-100' 
        
        // Secondary/Default Style
        : 'bg-white/10 text-gray-300  hover:bg-white/20'
      }
    `}
  >
    {children}
  </motion.a>
);
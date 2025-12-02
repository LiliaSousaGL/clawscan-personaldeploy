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
      px-8 py-3 rounded-full text-base font-semibold cursor-pointer transition-colors duration-200
      ${primary
        ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg hover:from-blue-700 hover:to-purple-800'
        : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
      }
    `}
  >
    {children}
  </motion.a>
);
"use client";

import { motion, HTMLMotionProps } from "framer-motion";

// 1. We extend HTMLMotionProps<"button"> to automatically include onClick, type, etc.
interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  primary?: boolean;
}

// 2. We add ...props to the arguments to capture onClick and other attributes
export const Button = ({ children, primary = false, ...props }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    // 3. We spread {...props} here so the onClick event is actually attached to the DOM element
    {...props}
    className={`
      px-8 py-3 rounded-lg text-base font-semibold cursor-pointer transition-colors duration-200
      
      ${primary 
        // Primary Style
        ? 'bg-gradient-to-r from-highlight-100 to-petrol-80 text-white shadow-lg hover:from-highlight-80 hover:to-petrol-100' 
        
        // Secondary/Default Style
        : 'bg-white/10 text-gray-300  hover:bg-white/20'
      }
    `}
  >
    {children}
  </motion.button>
);
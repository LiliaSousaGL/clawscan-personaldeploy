"use client";

import { motion, HTMLMotionProps } from "framer-motion";


interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  primary?: boolean;
}

export const Button = ({ children, primary = false, ...props }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}

    {...props}
    className={`
      px-8 py-3 rounded-lg text-base font-semibold cursor-pointer transition-colors duration-200
      
      ${primary 
 
        ? 'bg-gradient-to-r from-highlight-100 to-petrol-80 text-white shadow-lg hover:from-highlight-80 hover:to-petrol-100'     
        : 'bg-white/10 text-gray-300  hover:bg-white/20'
      }
    `}
  >
    {children}
  </motion.button>
);
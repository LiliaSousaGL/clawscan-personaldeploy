"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./Button"; // <--- Imports the separate component

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 pb-16  border-b border-white/5">
      
      {/* 1. Main Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl mx-auto px-6 flex flex-col items-center"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          AI-powered email screening for 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight-60 to-highlight-100"> Competition Law </span>and beyond.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Detect risky email content early, at scale, without ever sending emails
          outside your environment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="https://webforms.pipedrive.com/f/czB6kfSUP47QQ6DUiPGb0mOHB33foUK8gCqdoksXbaT9STXOgclTLdLwlbA3lbYhhx" passHref>
            <Button primary>
              
              Request a demo
            </Button>
          </Link>
          
          <Link href="#solution" passHref >
            <Button>
              See how it works
            </Button>
          </Link>
        </motion.div>
      </motion.div>


      {/* 2. Feature Grid (The 3 icons at the bottom) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left"
      >
        {/* Feature 1 */}
        <div className="space-y-3">
          <div className="text-highlight-100 mb-2">
            {/* Simple Gavel/Hammer Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 13-7.5 7.5c-1.5 1.5-3.5 1.5-5 0s-1.5-3.5 0-5L9 8"/><path d="m17 10 5 5"/><path d="m21 21-5-5"/><path d="m5 17 5-5"/></svg>
          </div>
          <h3 className="text-lg font-bold text-white">Reduce Competition Law & regulatory risk</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Proactively identify and mitigate potential violations and other regulatory breaches before they escalate.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="space-y-3">
          <div className="text-highlight-100 mb-2">
            {/* Gauge/Speed Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
          </div>
          <h3 className="text-lg font-bold text-white">Cut compliance workload</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Automate the tedious email review process, freeing up your legal and compliance teams for high-value strategic tasks.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="space-y-3">
          <div className="text-highlight-100 mb-2">
            {/* Shield Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
          </div>
          <h3 className="text-lg font-bold text-white">Keep all email content inside your tenant</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Maintain complete data security and privacy by analyzing all email content within your own secure environment.
          </p>
        </div>

      </motion.div>
    </section>
  );
};
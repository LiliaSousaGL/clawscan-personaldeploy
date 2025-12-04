"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Improved Smooth Scroll Function
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  
  // 1. Extract ID safely
  const targetId = href.replace('#', '');
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    // 2. Use getBoundingClientRect for absolute precision relative to viewport
    //    This fixes issues where 'offsetTop' is 0 because of parent containers
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - 80; // 80px offset for header + breathing room

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  } else {
    console.warn(`⚠️ Navbar: Element with id "${targetId}" not found. Make sure your sections have the correct IDs.`);
  }
};

// 📌 NEW: Simple Coming Soon Modal
const LoginModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-[#0f1115] border border-white/10 p-8 rounded-xl max-w-sm w-full text-center shadow-2xl"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>

        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-highlight-100">
           {/* Lock Icon */}
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          The ClawScan client portal is currently under development. Please contact our team for manual access.
        </p>

        <button 
          onClick={onClose} 
          className="w-full bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors border border-white/5"
        >
          Got it
        </button>
      </motion.div>
    </div>
  );
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // 📌 State for popup

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "Solution", href: "#solution" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "About us", href: "#aboutus" },
  ];

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 1. Close menu first
    setIsMobileMenuOpen(false); 
    // 2. Then scroll (slight delay ensures menu closing doesn't glitch the calculation)
    setTimeout(() => {
        handleSmoothScroll(e, href);
    }, 100);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 "
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* --- Logo --- */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/images/clawscanlogo-img.png"
              alt="ClawScan Logo"
              width={60} 
              height={60}
              className="object-contain"
            />
            <Image
              src="/images/clawscanlogo-text.png"
              alt="ClawScan Logo"
              width={110} 
              height={80}
              className="object-contain "
              style={{ marginTop: '5px' }}
            />
          </Link>

          {/* --- Desktop Links --- */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- CTA Buttons (Desktop) --- */}
          <div className="hidden md:flex space-x-3">
            <Link
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="bg-highlight-100 hover:bg-highlight-60 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Request a demo
            </Link>

            {/* 1. UPDATED: Changed from Link to Button to trigger modal */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-center text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors"
            >
              Log In
            </button>
          </div>

          {/* --- Mobile Hamburger Button --- */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* --- Mobile Menu Dropdown --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden  border-b border-white/10"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleMobileLinkClick(e, link.href)}
                    className="text-base font-medium text-gray-300 hover:text-white block py-2 border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="pt-4 flex flex-col gap-3">
                  <Link
                    href="#contact"
                    onClick={(e) => handleMobileLinkClick(e, "#contact")}
                    className="bg-highlight-100 text-center text-white px-4 py-3 rounded-lg text-sm font-semibold"
                  >
                    Request a demo
                  </Link>
                  
                  {/* 2. UPDATED: Mobile Button triggers modal */}
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsLoginModalOpen(true);
                    }}
                    className="bg-white/10 hover:bg-white/20 text-center text-white px-4 py-3 rounded-lg text-sm font-semibold w-full transition-colors"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* 3. Render the Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};
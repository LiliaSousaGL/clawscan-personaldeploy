"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ABOUT_CONTENT } from "../content/aboutData";

// Simple Icon Helper
const Icon = ({ name }: { name: string }) => {
  if (name === "mail") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
  if (name === "phone") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
  if (name === "map") return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
  return null;
};

// Map Modal Component
const MapModal = ({ isOpen, onClose, address }: { isOpen: boolean; onClose: () => void; address: string }) => {
  if (!isOpen) return null;

  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative w-full max-w-4xl bg-[#0b0c0e] rounded-xl overflow-hidden shadow-2xl border border-white/10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
        </button>
        
        <iframe
          src={mapUrl}
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
        />
        <div className="p-4 text-center text-sm text-gray-400">
            {address}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const AboutSection = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const officeAddress = ABOUT_CONTENT.contact.cards.find(c => c.icon === 'map')?.description || "Cours Saint Michel 30A, 1040 Brussels, Belgium";
  
  const handleMapClick = (e: React.MouseEvent) => {
      e.preventDefault(); 
      setIsMapOpen(true);
  };


  useEffect(() => {
    const scriptUrl = "https://webforms.pipedrive.com/f/loader";
    
    // Remove existing script if it exists to force re-execution
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append the new script
    const script = document.createElement("script");
    script.setAttribute("src", scriptUrl);
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="aboutus" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- PART 1: THE MINDS BEHIND --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          {/* Left: Text Content */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="text-highlight-100 font-bold tracking-widest text-xs uppercase mb-4">
              {ABOUT_CONTENT.about.label}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {ABOUT_CONTENT.about.title}
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {ABOUT_CONTENT.about.description}
            </p>
            <Link 
              href="https://www.golegal.law"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white font-semibold transition-colors"
            >
              {ABOUT_CONTENT.about.buttonText}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </motion.div>

          {/* Right: GOlegal Card */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="h-64 md:h-80 bg-[#0f1115] rounded-2xl border border-white/5 flex items-center justify-center p-8"
          >
            <Image 
              src="/images/golegalLogo.png" 
              alt={ABOUT_CONTENT.about.logoText} 
              width={350}
              height={100}
            />
          </motion.div>
        </div>


        {/* --- PART 2: GET IN TOUCH --- */}
        <div className="text-center mb-16">
            <div className="text-highlight-100 font-bold tracking-widest text-xs uppercase mb-4">
                {ABOUT_CONTENT.contact.label}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {ABOUT_CONTENT.contact.title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                {ABOUT_CONTENT.contact.subtitle}
            </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"> 
            {ABOUT_CONTENT.contact.cards.map((card, index) => (
            <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
            >
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-highlight-100 mb-6">
                <Icon name={card.icon} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed h-10">
                {card.description}
                </p>
                
                {card.icon === 'map' ? (
                <a 
                    href="#"
                    onClick={handleMapClick}
                    className="text-highlight-100 font-medium hover:text-blue-300 text-sm transition-colors"
                >
                    {card.actionText}
                </a>
                ) : (
                <a 
                    href={card.href} 
                    className="text-highlight-100 font-medium hover:text-blue-300 text-sm transition-colors"
                >
                    {card.actionText}
                </a>
                )}
            </motion.div>
            ))}
        </div>


        <div id="contact" className="scroll-mt-32"> 
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-xl max-w-4xl mx-auto"
            >

                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-highlight-100 mb-6 mx-auto">
                    <Icon name="mail" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                   Send us an email
                </h3>

                <div className="w-full min-h-[400px] flex justify-center">
                {/* Pipedrive Form Container */}
                <div 
                    className="pipedriveWebForms w-full" 
                    data-pd-webforms="https://webforms.pipedrive.com/f/czB6kfSUP47QQ6DUiPGb0mOHB33foUK8gCqdoksXbaT9STXOgclTLdLwlbA3lbYhhx" 
                />
                </div>

                <p className="text-xs text-gray-500 mt-6 text-center">
                We respect your privacy. No spam. You will be contacted by a dedicated compliance expert.
                </p>
            </motion.div>
        </div>

      </div>
      
      {/* Map Modal */}
      <MapModal 
          isOpen={isMapOpen} 
          onClose={() => setIsMapOpen(false)} 
          address={officeAddress} 
      />
    </section>
  );
};
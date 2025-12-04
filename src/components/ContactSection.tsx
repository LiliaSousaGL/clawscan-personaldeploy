"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {

  // 1. Load the Pipedrive script dynamically
  useEffect(() => {
    // Check if script is already there to prevent duplicates
    const scriptUrl = "https://webforms.pipedrive.com/f/loader";
    
    // Select the existing script
    let script = document.querySelector(`script[src="${scriptUrl}"]`);

    if (!script) {
      script = document.createElement("script");
      script.setAttribute("src", scriptUrl);
      script.async = true;
      document.body.appendChild(script);
    }

    // Cleanup isn't strictly necessary for the loader, 
    // but good practice if the component unmounts quickly.
    return () => {
      // We generally leave the script in the body so it doesn't reload 
      // every time you navigate, but you can remove it if needed.
    };
  }, []);

  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-highlight-100 font-bold tracking-widest text-xs uppercase mb-4"
        >
          GET IN TOUCH
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Send us an email
          </h3>

          {/* 2. The Container 
            I removed the hardcoded height (h-96) and placeholder styles 
            so the form can expand naturally based on its content.
          */}
          <div className="w-full min-h-[400px] flex justify-center">
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
    </section>
  );
};
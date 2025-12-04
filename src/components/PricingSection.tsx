"use client";

import { motion } from "framer-motion";
import { PRICING_CONTENT } from "../content/pricingData";
import { Button } from "./Button";

// Simple Checkmark Icon
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-highlight-100"><polyline points="20 6 9 17 4 12"/></svg>
);

export const PricingSection = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 1. Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-highlight-100 font-bold tracking-widest text-xs uppercase mb-4"
          >
            PRICING
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            {PRICING_CONTENT.header.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            {PRICING_CONTENT.header.subtitle}
          </motion.p>
        </div>

        {/* 2. Top Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"> {/* Reduced bottom margin to bring arrow closer */}
          {PRICING_CONTENT.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/5 border rounded-xl p-8 flex flex-col h-full transition-colors relative ${
                // Add specific styling to the middle card (Subscription) to highlight it
                card.highlight 
                  ? 'border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]' 
                  : 'border-white/10 hover:border-blue-500/20'
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${card.highlight ? 'text-highlight-100' : 'text-white'}`}>
                  {card.title}
                </h3>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  {card.subtitle}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed min-h-[40px]">
                  {card.description}
                </p>
              </div>

              <ul className="space-y-3 mt-auto">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="mt-0.5 shrink-0"><CheckIcon /></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 3. NEW: Visual Connector Arrow */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-6 text-gray-500"
        >
          <span className="text-[10px] uppercase tracking-widest mb-2 opacity-60">Volume Tiers</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </motion.div>
        </motion.div>

        {/* 4. Pricing Table - Width Constrained & Centered */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            // Changed: max-w-3xl to make table narrower
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-12 max-w-2xl mx-auto shadow-2xl"
        >
            <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/10 bg-white/5 text-xs font-bold text-highlight-100 uppercase tracking-wider">
                <div className="col-span-3 md:col-span-2">Tier</div>
                <div className="col-span-4 md:col-span-3">Annual VUs</div>
                <div className="col-span-5 md:col-span-7">Best For</div>
            </div>

            {PRICING_CONTENT.tiers.map((tier, index) => (
                <div 
                    key={tier.name} 
                    className={`grid grid-cols-12 gap-4 p-6 text-sm items-center ${
                        index !== PRICING_CONTENT.tiers.length - 1 ? 'border-b border-white/5' : ''
                    } hover:bg-white/[0.02] transition-colors`}
                >
                    <div className="col-span-3 md:col-span-2 font-bold text-white">{tier.name}</div>
                    <div className="col-span-4 md:col-span-3 text-gray-300">{tier.vus}</div>
                    <div className="col-span-5 md:col-span-7 text-gray-400">{tier.bestFor}</div>
                </div>
            ))}
        </motion.div>

        {/* 5. Footer Notes & CTA */}
        <div className="text-center">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[15px] md:text-s text-gray-500 mb-12 max-w-4xl mx-auto">
                {PRICING_CONTENT.footer.notes.map((note, i) => (
                    <div key={i} className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                         {note}
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
            >
                <Button primary onClick={scrollToContact}>
                    Get a Tailored Quote
                </Button>
            </motion.div>
             <p className="text-s text-gray-600 mt-6">
                ClawScan runs fully inside your Microsoft tenant. No email content ever leaves your environment.
            </p>
        </div>

      </div>
    </section>
  );
};
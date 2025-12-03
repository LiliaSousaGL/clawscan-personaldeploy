// src/components/MainContentSwitcher.tsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Import all the sections that will be toggled ---
import { ProductSection } from "./ProductSection";
import { SolutionSection } from "./SolutionSection";
import { ControlCenter } from "./ControlCenter";
import { ComparisonSection } from "./ComparisonSection";
import { AudienceSection } from "./AudienceSection";
import { GroupsSection } from "./GroupsSection";
// ----------------------------------------------------

// Reusable button component for the tab selector
const TabButton = ({ isActive, onClick, children }: { isActive: boolean, onClick: () => void, children: React.ReactNode }) => (
    <button
        onClick={onClick}
        // Tailwind classes using your custom brand colors
        className={`px-6 py-2 text-sm font-semibold rounded-t-lg transition-colors duration-200 focus:outline-none 
          ${isActive ? 'bg-white/10 text-highlight-100 border-b-2 border-highlight-100' : 'text-gray-400 hover:text-white'}`}
    >
        {children}
    </button>
);

export const MainContentSwitcher = () => {
    // 📌 State to track which tab is active
    const [activeTab, setActiveTab] = useState<'product' | 'solution'>('product');

    return (
        <div className="bg-cobalt-100 py-16">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. Tab Selector Buttons */}
                <div className="flex justify-center mb-12 border-b border-white/10">
                    <TabButton isActive={activeTab === 'product'} onClick={() => setActiveTab('product')}>
                        Product Features
                    </TabButton>
                    <TabButton isActive={activeTab === 'solution'} onClick={() => setActiveTab('solution')}>
                        Value & Solutions
                    </TabButton>
                </div>

                {/* 2. Conditional Content Rendering */}
                <AnimatePresence mode="wait">
                    {/* PRODUCT TAB CONTENT */}
                    {activeTab === 'product' && (
                        <motion.div
                            key="product"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Clawscan Explained, How it Works, Control Center */}
                            <ProductSection />
                            <SolutionSection />
                            <ControlCenter />
                        </motion.div>
                    )}

                    {/* SOLUTION TAB CONTENT */}
                    {activeTab === 'solution' && (
                        <motion.div
                            key="solution"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Reactive/Proactive Comparison, Key Players, Groups */}
                            <ComparisonSection />
                            <AudienceSection />
                            <GroupsSection />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
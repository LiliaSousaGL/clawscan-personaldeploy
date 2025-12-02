// src/components/Layout.tsx
"use client";

import { Navbar } from "../components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#0a0a0a] text-[#ededed]">
      {/* 1. Navbar fixed at the top */}
      <Navbar />

      {/* 2. Main content goes here */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* 3. Footer fixed at the bottom */}
      <footer className="bg-black border-t border-white/10 p-8 text-center text-gray-500 text-sm">
        &copy; 2025 ClawScan. All rights reserved.
      </footer>
    </div>
  );
};
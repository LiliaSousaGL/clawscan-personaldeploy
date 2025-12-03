// src/components/Layout.tsx
"use client";

import { Navbar } from "./Navbar"; // Correct path: Sibling file
import { FOOTER_LINKS, SocialIcon } from "../content/footerData"; // Correct path: Up to src, then down to content
import Link from "next/link"; 
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (

    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* DETAILED FOOTER STRUCTURE */}
      <footer className=" border-t border-white/10 pt-16 pb-8 text-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Top Section: Logo & Links */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-16 border-b border-white/5">
            
            {/* Logo/Branding Column (Col 1 & 2 on Desktop) */}
            <div className="col-span-2 space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-highlight-100 flex items-center gap-3">
                <Image
                  src="/images/clawscan-logo.png" // <--- Update this to your actual path
                  alt="ClawScan Logo"
                  width={120} // Slightly larger for the footer
                  height={120}
                />

              </Link>
              <p className="text-gray-400 text-sm max-w-xs">
                AI-powered email screening for modern legal compliance.
              </p>
            </div>
            
            {/* Navigation Columns (Col 3, 4, 5, 6 on Desktop) */}
            {FOOTER_LINKS.columns.map((column, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href} 
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section: Copyright & Socials */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
            
            <p>
              &copy; 2025 ClawScan by GOlegal. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              {FOOTER_LINKS.socials.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-500 hover:text-white transition-colors">
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
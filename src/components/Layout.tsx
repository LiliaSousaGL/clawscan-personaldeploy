"use client";

import { Navbar } from "./Navbar";
import { FOOTER_LINKS, SocialIcon } from "../content/footerData";
import Link from "next/link"; 
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
}

// Helper to scroll smoothly (Same as Navbar)
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  // Only intercept if it's an internal hash link
  if (href.startsWith("#")) {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 64, // Subtract Navbar height
        behavior: "smooth",
      });
    }
  }
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* DETAILED FOOTER STRUCTURE */}
      <footer className="border-t border-white/10 pt-16 pb-8 text-white ">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Top Section: Logo & Links */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-16 border-b border-white/5">
            
            {/* Logo/Branding Column (Col 1 & 2 on Desktop) */}
            <div className="col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/images/clawscanlogo-img.png"
              alt="ClawScan Logo"
              width={100} 
              height={100}
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
                  {column.links.map((link, linkIndex) => {
                    const isExternal = link.target === "_blank" || link.href.startsWith("http");

                    return (
                      <li key={linkIndex}>
                        <Link 
                          href={link.href}
                          target={link.target}
                          rel={link.rel}
                          onClick={(e) => !isExternal && handleSmoothScroll(e, link.href)}
                          className="text-sm text-gray-400 hover:text-white transition-colors block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
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
                <a 
                  key={index} 
                  href={social.href} 
                  target={social.target}
                  rel={social.rel}
                  className="text-gray-500 hover:text-white transition-colors"
                >
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
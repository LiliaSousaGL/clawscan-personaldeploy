// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "Solution", href: "#solution" },
    { name: "Pricing", href: "#pricing" },
    { name: "About us", href: "#aboutus" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          ClawScan
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons Container */}
        <div className="flex space-x-3">
            {/* Request a demo Button (Primary CTA) */}
            <Link
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Request a demo
            </Link>

            {/* New Log In Button (Secondary CTA - Darker) */}
            <Link
              href="/login"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors"
            >
              Log In
            </Link>
        </div>
      </div>
    </motion.nav>
  );
};
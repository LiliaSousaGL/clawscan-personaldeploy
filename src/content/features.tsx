// src/content/features.tsx
import React from "react";

// We define the shape of a Feature to ensure consistency
export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FEATURES: Feature[] = [
  {
    title: "Legal-grade expertise",
    description: "AI trained on vast legal corpora for unparalleled accuracy.",
    // Gavel Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 13-7.5 7.5c-1.5 1.5-3.5 1.5-5 0s-1.5-3.5 0-5L9 8"/><path d="m17 10 5 5"/><path d="m21 21-5-5"/><path d="m5 17 5-5"/></svg>
    ),
  },
  {
    title: "On-prem by design",
    description: "Your data stays within your firewall, ensuring total privacy.",
    // Shield Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
  {
    title: "Multi-domain ready",
    description: "Seamlessly integrates across multiple email domains.",
    // Server/Network Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
    ),
  },
  {
    title: "High scalability",
    description: "Built to handle enterprise-level volume without compromise.",
    // Chart Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
    ),
  },
  {
    title: "Audit-friendly governance",
    description: "Maintain a clear, accessible record for compliance checks.",
    // File/Check Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
    ),
  },
];
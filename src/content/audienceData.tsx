import React from "react";

export interface AudienceItem {
  title: string;
  role: string;
  description: string;
  icon: React.ReactNode;
}

export const AUDIENCE_ITEMS: AudienceItem[] = [
  {
    role: "General Counsel",
    title: "Strategic Oversight",
    description: "Oversee legal risks with a comprehensive, AI-powered tool that provides unmatched visibility and early warnings.",
    // Gavel / Legal Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 13-7.5 7.5c-1.5 1.5-3.5 1.5-5 0s-1.5-3.5 0-5L9 8"/><path d="m17 10 5 5"/><path d="m21 21-5-5"/><path d="m5 17 5-5"/></svg>
    ),
  },
  {
    role: "Chief Compliance Officer",
    title: "Proactive Control",
    description: "Implement a robust, automated control that demonstrates proactive compliance to regulators and the board.",
    // Shield / Security Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
  },
  {
    role: "In-house Legal Teams",
    title: "Operational Efficiency",
    description: "Reduce manual review workload, focus on high-impact legal work, and provide more strategic value to the business.",
    // User / Team Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
];
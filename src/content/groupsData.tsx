import React from "react";

export interface GroupItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const GROUPS_ITEMS: GroupItem[] = [
  {
    title: "Centralized Oversight",
    description: "Manage compliance across all subsidiaries from a single, unified dashboard.",
    // Building / Office Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
    ),
  },
  {
    title: "Granular Control",
    description: "Customize scanning rules and alerts for specific entities or jurisdictions.",
    // Sliders / Filter Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="21" y2="21"/><line x1="4" x2="20" y1="3" y2="3"/><line x1="4" x2="20" y1="12" y2="12"/><path d="M4 12V3"/><path d="M4 21v-9"/><path d="M20 12V3"/><path d="M20 21v-9"/><path d="M12 21V3"/></svg>
    ),
  },
  {
    title: "Consolidated Reporting",
    description: "Generate group-wide reports to identify trends and inform strategic decisions.",
    // Bar Chart Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
    ),
  },
];
import React from "react";

export interface ControlItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const CONTROL_ITEMS: ControlItem[] = [
  {
    title: "Customizable Rulesets",
    description: "Define and manage granular policies for different user groups, data types, and regulatory requirements like GDPR, CCPA, and HIPAA.",
    // Sliders / Settings Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="21" y2="21"/><line x1="4" x2="20" y1="3" y2="3"/><line x1="4" x2="20" y1="12" y2="12"/><path d="M4 12V3"/><path d="M4 21v-9"/><path d="M20 12V3"/><path d="M20 21v-9"/><path d="M12 21V3"/></svg>
    ),
  },
  {
    title: "Real-Time Dashboard",
    description: "Gain a high-level overview of your organization's data governance with live metrics, threat detection, and incident reporting.",
    // Grid / Dashboard Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
    ),
  },
  {
    title: "Access Control",
    description: "Manage user permissions and roles to ensure that only authorized personnel can review sensitive information or modify system settings.",
    // Shield / Lock Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
  },
  {
    title: "Audit & Reporting",
    description: "Generate comprehensive audit logs and exportable reports on-demand to satisfy compliance checks and internal reviews.",
    // File Text Icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
    ),
  },
];
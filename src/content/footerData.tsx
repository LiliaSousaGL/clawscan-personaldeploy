import React from "react";

export const FOOTER_LINKS = {
  // Navigation Columns
  columns: [
    {
      title: "PRODUCT",
      links: [
        { name: "Features", href: "#product" },
        { name: "How it works", href: "#howitworks" }, 
        { name: "Control Center", href: "#control-center" },
      ],
    },
    {
      title: "SOLUTION",
      links: [
        { name: "Today vs Tomorrow", href: "#solution" },
        { name: "Who is ClawScan For?", href: "#solutions" },
        { name: "Built for Groups", href: "#groups-section" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
        { name: "About Us", href: "#aboutus" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { 
          name: "Privacy Policy", 
          href: "https://cdn.prod.website-files.com/62ff80020dcd94f942850d9b/65835af766115483856550c8_GOlegal_Privacy%20Policy_20231220.pdf",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        { 
          name: "Website Terms of Use", 
          href: "https://cdn.prod.website-files.com/62ff80020dcd94f942850d9b/6583595bca165e8071f0458f_GOlegal_Website%20Terms%20of%20Use_20231220.pdf",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        { 
          name: "Cookie Policy", 
          href: "https://cdn.prod.website-files.com/62ff80020dcd94f942850d9b/6583595bca165e8071f0458f_GOlegal_Website%20Terms%20of%20Use_20231220.pdf",
          target: "_blank",
          rel: "noopener noreferrer"
        },
      ],
    },
  ],
  // Social Media Icons
  socials: [
    { 
      icon: "linkedin", 
      href: "https://www.linkedin.com/company/clawscan",
      target: "_blank",
      rel: "noopener noreferrer"
    },
  ],
};

// Simple Icon Helper for Socials
export const SocialIcon = ({ name }: { name: string }) => {
  if (name === "linkedin") return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;

  return null;
};
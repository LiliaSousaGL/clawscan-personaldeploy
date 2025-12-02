import React from "react";

export const PRICING_CONTENT = {
  header: {
    title: "Simple, Transparent Pricing",
    subtitle: "ClawScan uses a clear 3-layer pricing model that scales with your organisation. No hidden fees. No complex bundles. Just clarity and value."
  },
  cards: [
    {
      title: "Setup",
      subtitle: "Per Tenant",
      description: "Get ClawScan running securely in your Azure environment.",
      features: [
        "One-time technical deployment",
        "Tenant-level configuration",
        "Base legal domains included",
        "Assisted onboarding"
      ]
    },
    {
      title: "Subscription",
      subtitle: "Annual Tier",
      description: "Your annual Verification Unit (VU) allowance.",
      highlight: true, // To style this differently (Blue title)
      features: [
        "All legal domains included",
        "10% soft buffer",
        "Auto-upgrade if needed",
        "Full access to the Control Center",
        "Group discounts available"
      ]
    },
    {
      title: "Customisation",
      subtitle: "Optional",
      description: "Tailor ClawScan to your workflows.",
      features: [
        "Custom legal prompts",
        "Context-specific refinements",
        "Reusable across tenants",
        "Time & materials model"
      ]
    }
  ],
  tiers: [
    { name: "S", vus: "250,000", bestFor: "Small teams or low-volume tenants" },
    { name: "M", vus: "1,000,000", bestFor: "Mid-size entities with regular email traffic" },
    { name: "L", vus: "5,000,000", bestFor: "High-volume operations" },
    { name: "XL", vus: "15,000,000", bestFor: "Large organisations with sustained traffic" },
    { name: "Enterprise", vus: "Custom", bestFor: "Very large groups or specific compliance needs" }
  ],
  footer: {
      notes: [
          "All domains included (Competition Law, Corruption, Sanctions, ...)",
          "10% soft buffer before upgrade",
          "Automatic tier adjustment when needed",
          "Group-wide discounts for multi-tenant deployments",
          "Full access to the ClawScan Control Center"
      ]
  }
};
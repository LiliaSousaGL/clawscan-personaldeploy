// src/content/clientData.ts

export interface ClientLogo {
    id: number;
    name: string;
    logoPath: string;
}

// These are the logos that will appear in the scroll-in section
export const CLIENT_LOGOS: ClientLogo[] = [
    { id: 1, name: "Stripe", logoPath: "/logos/stripe.svg" },
    { id: 2, name: "Linear", logoPath: "/logos/linear.svg" },
    { id: 3, name: "Vercel", logoPath: "/logos/vercel.svg" },
    { id: 4, name: "Clarity", logoPath: "/logos/clarity.svg" },
    { id: 5, name: "Pipedrive", logoPath: "/logos/pipedrive.svg" },
    { id: 6, name: "Dropbox", logoPath: "/logos/dropbox.svg" },
];
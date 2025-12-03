export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is the core functionality of ClawScan?",
    answer: "ClawScan is an AI-powered email screening tool that automates the review of communications for legal compliance. It identifies potential risks, flags sensitive content, and helps organizations adhere to regulatory standards with high accuracy and efficiency."
  },
  {
    question: "How does ClawScan ensure data security and compliance?",
    answer: "ClawScan is built on a secure-by-design architecture, employing end-to-end encryption for all data in transit and at rest. We are fully compliant with GDPR, CCPA, and other major data protection regulations, ensuring your organization meets its legal obligations."
  },
  {
    question: "Can ClawScan be integrated with our existing email systems?",
    answer: "Yes, ClawScan offers seamless integration with major email platforms like Microsoft 365 and Google Workspace. Our API-first approach allows for flexible integration into your existing workflows with minimal disruption."
  },
  {
    question: "What are the pricing and subscription models available?",
    answer: "We offer a range of tiered subscription plans based on the number of users and volume of data processed. Please visit our Pricing page for detailed information or contact our sales team for a custom quote tailored to your organization's needs."
  },
  {
    question: "What kind of support is available during the implementation process?",
    answer: "Our dedicated support team provides comprehensive assistance throughout the implementation phase, including setup, configuration, and training for your staff. We ensure a smooth transition and are available to help you maximize the benefits of ClawScan from day one."
  }
];
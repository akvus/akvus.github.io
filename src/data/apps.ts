export interface AppData {
  id: string;
  title: string;
  description: string;
  features: string[];
  category: string;
  screenshots: string[];
  technologies: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  year: string;
}

export const appsData: AppData[] = [
  {
    id: "apo-guide",
    title: "ApoGuide",
    description: "ApoGuide – direct contact with your favorite pharmacy! Send prescriptions, order medications, and receive medical advice via the app from your local pharmacy. With the ApoGuide app, you're connected to your local pharmacy around the clock. Save yourself the hassle of double-traveling and unnecessary wait times – try it now. In addition to the convenient pharmacy search, the app offers the option of sending e-prescriptions from your electronic health card or booking appointments at your pharmacy. With the online shop function, you can order over-the-counter medications from your pharmacy at any time. The highly secure chat function enables you to communicate quickly and securely with your local pharmacy – whether you have questions about medication availability or dosage instructions, your pharmacy is always there for you, even on your mobile. The ApoGuide app is the digital branch of your local pharmacy. See for yourself!",
    features: [
      "Find a pharmacy",
      "Chat with a pharmacy",
      "Order medication with prescription",
      "Use your health insurance card",
      "Plan your medication intake",
    ],
    category: "Health",
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2d/94/fb/2d94fb5e-f060-9b10-b3d7-33d2290a9ced/IOS-6-5-Shop_1.png/600x0w.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a1/1c/50/a11c501b-cd85-b66d-e97d-e2a0429270cb/IOS-6-5-Shop_2.png/600x0w.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0b/cf/ea/0bcfea9b-3240-da18-7ad1-f111affc5838/IOS-6-5-Shop_3.png/600x0w.webp"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Android", "iOS"],
    appStoreUrl: "https://apps.apple.com/de/app/apoguide-de/id6447188653",
    playStoreUrl: "https://play.google.com/store/apps/details?id=de.gedisa.apo_guide&hl=gsw",
    websiteUrl: "https://www.apoguide.de/",
    year: "2023"
  },
  {
    id: "apo-portal",
    title: "ApoPortal",
    description: "ApoPortal was developed with the aim of enabling pharmacists to communicate securely, efficiently and reliably. At a time when data protection and information security are becoming increasingly important, the ApoPortal app represents a trustworthy solution for authentication in the chat of the GEDISA Pharmacy Portal. With ApoPortal you can use both the secure chat in the GEDISA Pharmacy Portal and mobile in the app, making your digital communication safe and easy.",
    features: [
      "Secure chat functionality for pharmacists",
      "2-factor authentication using QR code technology",
      "Appointment management integration",
      "Link to GEDISA Pharmacy Portal",
      "Customizable notification settings",
      "High security data protection"
    ],
    category: "Health",
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/8f/6d/d8/8f6dd800-7a54-80ca-d43a-ef304390047b/759fb981-cd45-4dcd-a9ce-9fce61c7d5d5_IOS-6-5-Shop_1.png/600x0w.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/76/1b/92/761b921d-df75-dae5-9791-5a35f3c2891a/47e55cfb-c7f7-48ad-b325-f228e93d95d9_IOS-6-5-Shop_2.png/600x0w.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/da/df/c3/dadfc33d-63ce-8fea-79a1-2b348a9f7138/7cd52a31-2b02-48e5-9987-7e37e88233d1_IOS-6-5-Shop_5.png/600x0w.webp"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Two-Factor Authentication", "End-to-End Encryption"],
    appStoreUrl: "https://apps.apple.com/de/app/apoportal/id1510751097",
    playStoreUrl: "https://play.google.com/store/apps/details?id=de.gedisa.apo_connect",
    websiteUrl: "https://www.apoguide.de/",
    year: "2021"
  },
  {
    id: "kitchen-stories",
    title: "Kitchen Stories",
    description: "Kitchen Stories is an award-winning cooking app that provides thousands of free recipes, instructional videos, and cooking articles. The app features step-by-step photo instructions, HD recipe videos, and allows users to create their own digital cookbooks. With over 10,000 recipes ranging from quick meals to complex dishes, Kitchen Stories helps users discover new culinary skills and save their favorite recipes.",
    features: [
      "Over 10,000 free recipes",
      "Step-by-step photo instructions",
      "HD instructional videos",
      "Create and save personal cookbooks",
      "Recipe search by difficulty and preparation time",
      "Measurement converter for serving adjustments",
      "Premium features with Kitchen Stories Plus"
    ],
    category: "Food & Drink",
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f4/e0/8d/f4e08d05-0e10-88a2-1c63-28cf9633e481/1.png/1286x0w.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b5/61/c6/b561c68a-0d44-dd5a-90a8-9f017eb736a2/2.png/1286x0w.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4a/89/34/4a8934e3-83dc-107a-3861-3786634592dd/3.png/1286x0w.webp"
    ],
    technologies: ["React Native", "JavaScript", "AWS", "Content Delivery Networks", "Video Streaming"],
    appStoreUrl: "https://apps.apple.com/app/kitchen-stories-recipes/id771068291",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ajnsnewmedia.kitchenstories",
    websiteUrl: "https://www.kitchenstories.com/",
    year: "2014"
  },
  {
    id: "media-markt",
    title: "MediaMarkt Deutschland",
    description: "The MediaMarkt Deutschland app gives you the entire range of technology at your fingertips: all products, all services, and all offers. With this app, you can order the latest electronics, track deliveries, access digital receipts, and find the nearest stores. The app also offers exclusive coupons, a rewards program, and rapid delivery options including 90-minute delivery for selected products.",
    features: [
      "Exclusive app-only coupons and offers",
      "myMediaMarkt loyalty program with points system",
      "Express delivery (under 90 minutes) for select products",
      "Product scanning in-store for detailed information",
      "Store finder with real-time product availability",
      "Order tracking and digital receipts",
      "Digital myMediaMarkt card for in-store benefits"
    ],
    category: "Shopping",
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d2/1f/b8/d21fb8e8-5a8b-f9fd-1b7e-42c3b718702d/catalogue_39.png/600x0w.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d7/5f/58/d75f5875-6448-e9b9-65e9-689f52e2f39b/catalogue_40.png/600x0w.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/23/59/8b/23598be3-258d-4af7-73fb-3d6bd9dd0940/coupons__U00283_U0029.png/600x0w.webp"
    ],
    technologies: ["React Native", "Redux", "Node.js", "RESTful APIs", "Payment Gateway Integration"],
    appStoreUrl: "https://apps.apple.com/de/app/mediamarkt-deutschland/id386304604",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.media.markt",
    websiteUrl: "https://www.mediamarkt.de/",
    year: "2019"
  },
  {
    id: "saturn",
    title: "Saturn Deutschland",
    description: "Shop on the go with the Saturn Deutschland app: Turn your smartphone into a technology hub and always stay up to date with the latest developments. Whether you're looking for a new notebook or household appliance, you can use the free Saturn app to shop for electronics anytime, anywhere. The app features dark mode for eye comfort, express delivery options, and a modern interface with intuitive navigation.",
    features: [
      "Dark mode for reduced eye strain",
      "Fast loading and improved performance",
      "Modern interface with intuitive navigation",
      "Full-text product search",
      "Direct access to personal profile and order history",
      "Saturn CARD integration",
      "Face ID authentication for secure access",
      "Multiple payment method options"
    ],
    category: "Shopping",
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e3/d5/d5/e3d5d5c3-f8d2-c631-fc8d-fe480b96c56d/16999020-93fc-4fe3-ae18-d975417abd14_1.1_SEDE_ios_xs_max.jpg/600x0w.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4a/90/fb/4a90fb5e-e347-17fa-f42b-7b96a47521d5/476981cc-fcc1-4e54-bc94-442141431cdf_1.2_SEDE_ios_xs_max.jpg/600x0w.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ae/3e/9c/ae3e9c37-a8b1-d8bd-9937-a18dc56e401c/dfee1ea7-8209-48d9-99fc-0d679becd901_1.3_SEDE_ios_xs_max.jpg/600x0w.webp"
    ],
    technologies: ["React Native", "Redux", "Node.js", "RESTful APIs", "Biometric Authentication"],
    appStoreUrl: "https://apps.apple.com/de/app/saturn-deutschland/id557562682",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.media.saturn",
    websiteUrl: "https://www.saturn.de/",
    year: "2020"
  }
];

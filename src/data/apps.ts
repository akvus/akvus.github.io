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
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601972602237-8c79241e781b?w=800&auto=format&fit=crop"
    ],
    technologies: ["React Native", "Redux", "Node.js", "RESTful APIs", "Biometric Authentication"],
    appStoreUrl: "https://apps.apple.com/de/app/saturn-deutschland/id557562682",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.media.saturn",
    websiteUrl: "https://www.saturn.de/",
    year: "2020"
  }
];

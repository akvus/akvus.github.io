
export interface VideoData {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnailUrl: string;
  categories: string[];
  duration: string;
  uploadDate: string;
}

export const videosData: VideoData[] = [
  {
    id: "react-hooks-tutorial",
    title: "React Hooks Tutorial: Understanding useState and useEffect",
    description: "In this comprehensive tutorial, we dive deep into React's most commonly used hooks: useState and useEffect. Learn how these powerful hooks can simplify your component logic and help you build more maintainable React applications.",
    youtubeId: "O6P86uwfdR0",
    thumbnailUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
    categories: ["React", "Web Development", "Frontend"],
    duration: "18:42",
    uploadDate: "2023-05-15"
  },
  {
    id: "mobile-app-design",
    title: "Mobile App Design Principles: Creating Intuitive User Experiences",
    description: "Explore the key principles of mobile app design that lead to intuitive, engaging user experiences. This video covers layout considerations, touch targets, navigation patterns, and visual hierarchy specifically for mobile interfaces.",
    youtubeId: "CY4A8lUaNqA",
    thumbnailUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    categories: ["Design", "UI/UX", "Mobile"],
    duration: "22:17",
    uploadDate: "2023-07-22"
  },
  {
    id: "typescript-beginners",
    title: "TypeScript for Beginners: Why and How to Start Using It Today",
    description: "This beginner-friendly introduction to TypeScript explains why it's becoming essential for modern web development and demonstrates how to set up your first TypeScript project from scratch. Learn about static typing, interfaces, and type inference.",
    youtubeId: "BwuLxPH8IDs",
    thumbnailUrl: "https://images.unsplash.com/photo-1632396689068-b8c33586e6d5?w=800&auto=format&fit=crop",
    categories: ["TypeScript", "Web Development", "Programming"],
    duration: "25:34",
    uploadDate: "2023-02-10"
  },
  {
    id: "state-management-redux",
    title: "Modern State Management with Redux Toolkit",
    description: "Redux Toolkit has simplified Redux state management. This tutorial walks through setting up a store, creating slices, and implementing asynchronous actions with RTK Query. Learn the modern approach to global state management in React applications.",
    youtubeId: "9zySeP5vH9c",
    thumbnailUrl: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=800&auto=format&fit=crop",
    categories: ["React", "Redux", "State Management"],
    duration: "31:05",
    uploadDate: "2023-09-03"
  },
  {
    id: "flutter-animations",
    title: "Creating Smooth Animations in Flutter",
    description: "Learn how to implement beautiful, performant animations in your Flutter apps. This tutorial covers implicit animations, animated widgets, and custom animation controllers to create engaging user experiences across both iOS and Android.",
    youtubeId: "hsEza4D9IwU",
    thumbnailUrl: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?w=800&auto=format&fit=crop",
    categories: ["Flutter", "Mobile", "Animations"],
    duration: "20:18",
    uploadDate: "2023-04-17"
  },
  {
    id: "rest-api-design",
    title: "RESTful API Design Best Practices",
    description: "Designing RESTful APIs that are intuitive, efficient, and scalable requires careful planning. This video covers resource naming, HTTP methods, status codes, pagination, versioning, and documentation to help you create APIs that developers will love to use.",
    youtubeId: "Q-BpqyOT3a8",
    thumbnailUrl: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&auto=format&fit=crop",
    categories: ["API", "Backend", "Web Development"],
    duration: "28:49",
    uploadDate: "2023-08-28"
  },
  {
    id: "css-grid-layout",
    title: "CSS Grid Layout: Creating Responsive Designs with Ease",
    description: "CSS Grid has revolutionized web layout design. This tutorial demonstrates how to create complex, responsive layouts with minimal code using CSS Grid. Learn about grid templates, areas, gaps, and how to combine Grid with Flexbox for optimal layouts.",
    youtubeId: "9zBsdzdE4sM",
    thumbnailUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop",
    categories: ["CSS", "Web Development", "Frontend"],
    duration: "24:12",
    uploadDate: "2023-01-25"
  },
  {
    id: "react-native-navigation",
    title: "React Native Navigation: Building a Multi-Screen App",
    description: "Navigation is a crucial aspect of mobile app development. This tutorial explores React Navigation library, showing how to implement stack, tab, and drawer navigation patterns in your React Native apps for a seamless user experience.",
    youtubeId: "diXDe0MnnQ8",
    thumbnailUrl: "https://images.unsplash.com/photo-1586336990288-e5c0096195a9?w=800&auto=format&fit=crop",
    categories: ["React Native", "Mobile", "Navigation"],
    duration: "27:33",
    uploadDate: "2023-06-09"
  }
];

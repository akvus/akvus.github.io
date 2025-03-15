
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
}

export const appsData: AppData[] = [
  {
    id: "fitness-tracker",
    title: "FitTrack Pro",
    description: "A comprehensive fitness tracking app that helps users monitor their workouts, nutrition, and progress towards their fitness goals. With an intuitive interface and powerful analytics, FitTrack Pro makes it easy to stay on track and achieve results.",
    features: [
      "Personalized workout plans",
      "Real-time exercise tracking",
      "Nutrition diary with macro calculations",
      "Progress photos and measurements",
      "Goal setting and achievement tracking",
      "Community challenges and support"
    ],
    category: "Health & Fitness",
    screenshots: [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop"
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "TensorFlow Lite"],
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
    websiteUrl: "https://example.com/fittrackpro"
  },
  {
    id: "recipe-finder",
    title: "Culinary Compass",
    description: "Discover new recipes based on ingredients you already have at home. Culinary Compass helps reduce food waste while expanding your cooking repertoire with dishes from around the world.",
    features: [
      "Ingredient-based recipe search",
      "Dietary preference filtering",
      "Step-by-step cooking instructions",
      "Meal planning calendar",
      "Shopping list generator",
      "Recipe saving and favorites"
    ],
    category: "Food & Drink",
    screenshots: [
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460819739742-50e4486578f5?w=800&auto=format&fit=crop"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Spoonacular API"],
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
    websiteUrl: "https://example.com/culinarycompass"
  },
  {
    id: "task-manager",
    title: "TaskFlow",
    description: "A sleek and intuitive task management app designed to boost productivity and organize your personal and professional life with minimal effort. TaskFlow uses smart prioritization and gentle reminders to keep you on track.",
    features: [
      "Intuitive drag-and-drop interface",
      "Smart task prioritization",
      "Project and list organization",
      "Time tracking and productivity insights",
      "Recurring tasks and reminders",
      "Collaboration and task delegation"
    ],
    category: "Productivity",
    screenshots: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&auto=format&fit=crop"
    ],
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
    websiteUrl: "https://example.com/taskflow"
  },
  {
    id: "meditation-app",
    title: "Serenity",
    description: "Find peace in your daily life with guided meditations, breathing exercises, and sleep stories. Serenity helps users reduce stress, improve focus, and enhance overall mental wellbeing through mindfulness practices.",
    features: [
      "Guided meditations for various needs",
      "Breathing exercise visualizations",
      "Sleep stories and ambient sounds",
      "Mindfulness reminders and quotes",
      "Meditation progress tracking",
      "Customizable meditation sessions"
    ],
    category: "Health & Wellness",
    screenshots: [
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528319725582-ddc096101511?w=800&auto=format&fit=crop"
    ],
    technologies: ["Swift", "SwiftUI", "Core Audio", "CloudKit"],
    appStoreUrl: "https://apps.apple.com",
    playStoreUrl: "https://play.google.com",
    websiteUrl: "https://example.com/serenity"
  }
];

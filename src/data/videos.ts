
export interface VideoData {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnailUrl: string;
  categories: string[];
}

export const videosData: VideoData[] = [
  {
    id: "patrick-guide-masoala",
    title: "Meet PATRICK - A guide in Masoala National Park, Madagascar",
    description: "In this interview, we sit down with Patrick, a seasoned guide in Masoala National Park, Madagascar. He shares his personal experiences, insights on the park's biodiversity, and the challenges of protecting this vital rainforest. Learn about his deep connection to the land and his passion for sharing its wonders with visitors.",
    youtubeId: "9VqBNUQ72qc",
    thumbnailUrl: "https://i3.ytimg.com/vi/9VqBNUQ72qc/maxresdefault.jpg",
    categories: ["Interview", "Travel", "Madagascar"]
  },
];

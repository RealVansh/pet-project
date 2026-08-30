export interface Puppy {
  id: string;
  breed: string;
  available: boolean;
  image: string;
  description?: string;
}

export const availablePuppies: Puppy[] = [
  {
    id: "labrador",
    breed: "Labrador Retriever",
    available: true,
    image: "/images/placeholder.svg", // TODO: Replace with real client photo
    description: "Explore availability and speak with our team about care and suitability.",
  },
  {
    id: "golden",
    breed: "Golden Retriever",
    available: true,
    image: "/images/placeholder.svg", // TODO: Replace with real client photo
    description: "Explore availability and speak with our team about care and suitability.",
  },
  {
    id: "gsd",
    breed: "German Shepherd",
    available: true,
    image: "/images/placeholder.svg", // TODO: Replace with real client photo
    description: "Explore availability and speak with our team about care and suitability.",
  },
];

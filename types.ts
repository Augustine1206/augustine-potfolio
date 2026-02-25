export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  color: string; // For the distinct colored icons in timeline
}

export interface Skill {
  name: string;
  percentage: number;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

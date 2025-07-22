export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  category: 'machine-learning' | 'deep-learning' | 'ai-automation';
  date?: string;
  results?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}


export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  result: string;
  period?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  tags: string[];
  link?: string;
  repo?: string;
  image: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

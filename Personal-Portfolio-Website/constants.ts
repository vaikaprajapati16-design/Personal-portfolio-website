
import { Skill, EducationItem, Project } from './types';

export const PERSONAL_INFO = {
  name: "Prajapati Vaika S.",
  title: "B.Tech Computer Engineering Student",
  university: "Sigma Institute of Engineering",
  location: "Vadodara, Gujarat",
  email: "vaikaprajapati16@gmail.com",
  phone: "+91 9104028003",
  bio: "I am a B.Tech Computer Engineering student at Sigma Institute of Engineering with a strong foundation in programming, web development, and databases. I am passionate about creating efficient solutions and eager to apply my skills in real-world projects.",
  languages: ["Hindi", "English", "Gujarati"],
  dob: "16-Nov-2004"
};

export const SKILLS: Skill[] = [
  { name: "C", category: "Programming", icon: "fa-solid fa-code" },
  { name: "C++", category: "Programming", icon: "fa-solid fa-code" },
  { name: "Java", category: "Programming", icon: "fa-brands fa-java" },
  { name: "Python", category: "Programming", icon: "fa-brands fa-python" },
  { name: "HTML", category: "Web Design", icon: "fa-brands fa-html5" },
  { name: "CSS", category: "Web Design", icon: "fa-brands fa-css3-alt" },
  { name: "Databases", category: "Data", icon: "fa-solid fa-database" }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "Sigma Institute of Engineering",
    result: "Currently Pursuing",
    period: "2022 - Present"
  },
  {
    degree: "12th Standard",
    institution: "HSC Board",
    result: "53.23%",
    period: "2022"
  },
  {
    degree: "10th Standard",
    institution: "SSC Board",
    result: "74.33%",
    period: "2020"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI Portfolio Assistant",
    description: "A professional portfolio website integrated with a Gemini-powered chatbot that answers questions based on the owner's resume.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Gemini API"],
    tags: ["Web Development", "AI/ML"],
    link: "#",
    repo: "#",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Database Management System",
    description: "A custom SQL-based system for managing inventory and sales records with a user-friendly frontend interface.",
    technologies: ["Java", "SQL", "JDBC"],
    tags: ["Database", "Software Engineering"],
    link: "#",
    repo: "#",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "E-Commerce Frontend",
    description: "A modern, responsive e-commerce landing page with product filtering, cart functionality, and glass-morphic UI components.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    tags: ["Web Development", "UI/UX"],
    link: "#",
    repo: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
  }
];

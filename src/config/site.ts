import type { PortfolioData, NavItem } from "@/types";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Lightbulb,
  BarChart3,
  GraduationCap,
  UserCircle,
  Settings,
  Code,
  Database,
  Server,
  MonitorPlay,
  Puzzle,
  Terminal,
  GitBranch,
} from "lucide-react";

export const navItems: NavItem[] = [
  { label: "About", href: "#summary" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const portfolioData: PortfolioData = {
  hero: {
    name: "Kuwar Jha",
    title: "Full-Stack Developer",
    subtitle:
      "Crafting seamless digital experiences from concept to deployment. Let's build something amazing together.",
    cta: {
      label: "View My Work",
      href: "#projects",
    },
    avatarUrl: "/projects/hero.png",
  },
  summary: {
    title: "About Me",
    content: [
      "Hello! I'm a passionate and results-driven developer with a knack for creating intuitive and dynamic web applications. With a strong foundation in both front-end and back-end technologies, I enjoy tackling complex challenges and transforming innovative ideas into reality.",
      "My journey in tech is fueled by a constant curiosity and a desire to learn and grow. I believe in the power of collaboration and strive to build products that not only meet user needs but also exceed their expectations. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.",
    ],
  },
  workExperience: [
    {
      id: "exp_redgrape",
      company: "Redgrape Technologies",
      role: "Associate Front-end Developer",
      period: "July 2024 - Present",
      description: [
        "Developed scalable, responsive UI components using React.js and Next.js.",
        "Migrated legacy HTML/JavaScript sites to the Next.js framework to enhance performance and maintainability.",
        "Independently handled a complete frontend dashboard project from scratch, including layout design, API integration, state management, and data visualization using Chart.js.",
        "Built various components and implemented core functionalities of ERP dashboards, with a strong focus on performance optimization, maintainability, and seamless API integration.",
      ],
      logo: Briefcase,
    },
    {
      id: "exp_hexadecimal",
      company: "Hexadecimal Software Pvt.Ltd",
      role: "Software Developer",
      period: "Feb 2024 - Jun 2024",
      description: [
        "Worked on developing scalable React Native applications. Implemented key features such as a bookmark system and a multi-screen form that preserved user progress across sessions.",
        "Built modular UI elements and implemented end-to-end features in a Next.js based real estate application, including property listing integration, user form handling, and dynamic data rendering using API.",
        "Designed and developed backend APIs for the real estate platform using Node.js and Express.",
        "Developed a React.js based admin panel to streamline back-end operations and enhance administrative workflows.",
      ],
      logo: Briefcase,
    },
  ],
  projects: [
    {
      id: "proj_sharebill",
      title: "ShareBill - Bill Splitting Web App",
      description:
        "A full-stack bill-splitting web application allowing user registration, authentication, group management, and real-time expense tracking.",
      technologies: ["Next.js", "Node Js", "Express.js", "JWT", "RESTful APIs"],
      imageUrl: "/projects/sharebill.png",
      dataAiHint: "app login",
      liveUrl: "https://sharebill-frontend.vercel.app/",
      repoUrl: "https://github.com/kuwarpj/sharebill-frontend",
      detailedDescription: [
        "Developed a full-stack bill-splitting web application allowing users to register, authenticate (JWT), and manage their own accounts.",
        "Implemented group and member management with dynamic expense tracking, allowing users to log expenses, split bills equally or selectively, and view real-time balances showing who owes whom.",
        "Used RESTful APIs with Express.js for backend services and Next.js for responsive and interactive frontend UI.",
      ],
    },
    {
      id: "proj_slackapproval",
      title: "Slack-Approval Bot",
      description:
        "This Slack bot simplifies approval workflows by letting users submit requests via a slash command, which are then approved or rejected interactively within Slack, with real-time updates and notifications",
      technologies: ["Node Js", "Express js", "Slack Bolt", "Slack API"],
     videoUrl: 'https://www.loom.com/embed/e09bf83862fb428c86b8203ab09a85d1?sid=b6f6ebcb-e3da-4cf3-a485-78bd33ca224c',
      dataAiHint: "slack bot",
      liveUrl: "#",
      repoUrl: "https://github.com/kuwarpj/slack-approval-bot",
      detailedDescription: [
        "Users submit approval requests via a slash command that opens a form to select an approver and provide a reason.",
        'The selected approver receives an interactive message with "Approve" and "Reject" buttons',
        "Once approved or rejected, the requester is notified, and the original message is updated with the decision.",
        "Enables quick, trackable approval flows entirely within Slack—no need for external tools.",
      ],
    },
    {
      id: "proj_squakit",
      title: "Squakit – Twitter Clone",
      description:
        "A minimalist social media app inspired by Twitter, featuring core functionalities like posting, following, and user authentication.",
      technologies: ["Next.js", "JWT", "Custom UI"],
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: "social media app",
      liveUrl: "#",
      repoUrl: "#",
      detailedDescription: [
        "Developed a minimalist social media app inspired by Twitter with core features like posting and following.",
        "Implemented user authentication using JWT and enabled profile creation and editing.",
        "Designed and built a custom UI focused on a clean, distraction-free user experience.",
      ],
    },
  ],
  skills: [
    {
      name: "Languages",
      skills: [
        { name: "C", icon: Code },
        { name: "C++", icon: Code },
        { name: "JavaScript", icon: Code },
        { name: "TypeScript", icon: Code },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React.js", icon: MonitorPlay },
        { name: "Next.js", icon: MonitorPlay },
        { name: "Redux", icon: Puzzle },
        { name: "Context API", icon: Puzzle },
        { name: "Tailwind CSS", icon: Code },
        { name: "Bootstrap", icon: Code },
        { name: "Shadcn UI", icon: Puzzle },
        { name: "HTML", icon: Code },
        { name: "CSS3", icon: Code },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "Express.js", icon: Server },
        { name: "MongoDB", icon: Database },
        { name: "RESTful APIs", icon: Settings },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "Github", icon: Github },
        { name: "Linux", icon: Terminal },
      ],
    },
  ],
  education: [
    {
      id: "edu_kiit",
      institution: "Kalinga Institute of Industrial Technology",
      degree: "B.TECH CSE | CGPA: 8.48",
      period: "2019 - 2023",
      description: ["Bhubaneshwar, India"],
      logo: GraduationCap,
    },
    {
      id: "edu_nasa",
      institution: "Nasa National Secondary School",
      degree: "NEB (Class XII), Aggregate: 69.75%",
      period: "2017 - 2019",
      description: [],
      logo: GraduationCap,
    },
    {
      id: "edu_happyland",
      institution: "Happyland Secondary School",
      degree: "NEB (Class X), GPA : 3.45 of 4.00",
      period: "2016 - 2017",
      description: [],
      logo: GraduationCap,
    },
  ],
  socialLinks: [
    { name: "GitHub", icon: Github, url: "https://github.com/kuwarpj" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/kuwarparasarjha/",
    },
    { name: "Email", icon: Mail, url: "mailto:itskuwarjha@gmail.com" },
  ],
  contactEmail: "itskuwarjha@gmail.com",
};

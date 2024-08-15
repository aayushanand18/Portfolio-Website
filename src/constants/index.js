import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import bitmesra from "../assets/BIT.png"
import dps from "../assets/DPS.png"

export const HERO_CONTENT = `I am a Computer Science Engineering student at BIT Mesra with a strong foundation in full-stack web development, utilizing React.js, Node.js, and databases like MongoDB and MySQL. I have contributed to developing scalable solutions that improve user experience and system performance. Alongside my technical expertise, I have held leadership roles in student organizations, enhancing my interpersonal and management skills. Driven by a passion for technology and continuous learning, I am committed to contributing to innovative projects that push the boundaries of software development.`;

export const ABOUT_TEXT = `As I advance in my career, my focus remains on expanding my technical expertise while staying up-to-date with the latest trends in software engineering. I actively pursue opportunities that challenge me to apply my problem-solving abilities and technical knowledge to real-world scenarios, ensuring that I continue to grow as a developer. My leadership roles have further developed my communication, adaptability, and decision-making skills, which help me effectively collaborate with teams on complex projects. Looking ahead, I am eager to explore new frontiers in technology, contribute to cutting-edge advancements, and make a meaningful impact through innovative solutions. My commitment to continuous learning and passion for software development drives me to seek out challenging opportunities where I can apply my skills and contribute to meaningful, long-lasting improvements. Ultimately, I aim to create solutions that not only address current needs but also push the boundaries of what technology can achieve in the future.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2026",
    image: bitmesra,
    role: "BTech - Computer Science & Engineering",
    company: "Birla Institute of Technology, Mesra",
    description: `Pursuing a Bachelor of Technology (BTech) in Computer Science Engineering at Birla Institute of Technology, Mesra, with a current GPA of 8.00/10.00. Currently in the pre-final year, I am honing my skills in software development, an active member of Google Developer Student Clubs.`,
    technologies: ["DBMS", "OOPS", "Operating Systems", "Data Structures & Algorithms"],
  },
  {
    year: "2020 - 2022",
    image: dps,
    role: "Intermediate (Class XII)",
    company: "Delhi Public School, Ranchi",
    description: `Achieved an impressive 92.60% overall, with Computer Science as a key subject, and diligently studied Physics, Chemistry, and Mathematics, showcasing a robust academic foundation and a strong commitment to academic excellence.`,
    technologies: [],
  },
  {
    year: "2018 - 2020",
    image: dps,
    role: "Matriculate (Class X)",
    company: "Delhi Public School, Ranchi",
    description: `With a strong focus on both Science and Mathematics, I earned an impressive 96.00% in my board exams, showcasing a deep understanding of key subjects and reflecting exceptional academic dedication and achievement.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Chat-a-BIT",
    image: project1,
    description:
      "Engineered a robust chatting platform tailored specifically for BIT Mesra students, ensuring efficient data handling and real-time communication.",
    technologies: ["Tailwind", "HTML", "React", "MongoDB", "Javascript", "Node.js", "Socket.io", "JWT"],
  },
  {
    title: "Voyage Villas",
    image: project2,
    description:
      "Architected and executed the Voyage Villas travel booking website, achieving a 40% boost in overall performance and slashing page load times by 50% through advanced optimization techniques and responsive design practices.",
    technologies: ["HTML", "CSS", "Javascript", "EJS", "Passport", "Express.js", "MongoDB", "Node.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind", "React"],
  },
];

export const CONTACT = {
  address: "HEC Colony, Ranchi, Jharkhand, India ",
  phoneNo: "+91 6209256116 ",
  email: "aayushanand9822@gmail.com",
};

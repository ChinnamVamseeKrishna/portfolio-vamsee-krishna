export const resume = {
  about: `Fullstack Engineer with a strong foundation in JavaScript, Java, Python, and C. Experienced in building scalable web applications, API integrations, and system design. Passionate about solving complex problems, optimizing performance, and delivering impactful digital solutions. Recipient of client and academic awards for outstanding contributions. Always eager to learn new technologies and take on challenging projects.`,
  experience: [
    {
      company: "Grant Thornton",
      title: "Fullstack Engineer",
      start: "Apr 2024",
      end: "Present",
      summary: "Building digital solutions to automate and optimize business processes.",
      highlights: [
        "Developed PACT, a solution automating purchase requests/orders—reducing the lifecycle to 1 week.",
        "Revamped UI for improved customer interaction, leading to increased revenue.",
        "Optimized API response times by 40% and achieved efficient cost reductions.",
        "Updated DB schema and restructured queries for faster loads and reduced database load.",
        "Strategically orchestrated zone-wise rollouts, utilizing Azure functions and SPN for prompt customer email triggers.",
      ],
    },
    {
      company: "Cognizant",
      title: "Node.js Developer",
      start: "Sep 2021",
      end: "Aug 2023",
      summary: "Developed and managed APIs for cross-platform apps, focusing on backend performance and reliability.",
      highlights: [
        "Designed/managed 25+ APIs for Site Connect, enabling timely release of Asset Log Book feature.",
        "Integrated APIs with Android, iOS & Web for seamless multi-platform experience.",
        "Achieved 98% code coverage using Jest; adhered to MVC pattern and regular backend query refinements for scalability.",
        "Debugged and optimized DB performance using Knex and other npm libraries.",
      ],
    },
  ],
  projects: [
    {
      name: "BMS Clone",
      description: "Full stack Book My Show clone with authentication, RBAC, and API integration. Deployed to render.com.",
      url: "", // Put your repo or live link here if you want
      tags: ["React", "Node.js", "Ant Design", "RBAC", "API Integration"],
    },
    {
      name: "Sports Hub",
      description: "MERN stack app consolidating nearby store data, with cart and Stripe payment integration.",
      url: "", // Put your repo or live link here if you want
      tags: ["React", "Node.js", "MongoDB", "Stripe", "MERN"],
    },
  ],
  skills: [
    "JavaScript", "Java", "Python", "C",
    "React.js", "HTML", "CSS", "TailwindCSS", "MUI", "Ant Design", "Mantine",
    "Node.js", "Flask",
    "MySQL", "SQL Server", "PostgreSQL", "MongoDB",
    "Low Level Design", "High Level Design",
    "Jest", "Unit Testing",
    "Data Structures & Algorithms", "Schema Design", "Azure", "Machine Learning"
  ],
  education: [
    {
      school: "VFSTR",
      degree: "B.Tech in Computer Science",
      year: "2021",
      details: "CGPA: 8.6 / 10, Guntur, AP"
    },
    {
      school: "Matrix IIT Academy",
      degree: "BIEAP Intermediate",
      year: "2016",
      details: "Percentage: 97.8, Guntur, AP"
    },
    {
      school: "Sri Chaitanya School",
      degree: "Schooling",
      year: "2014",
      details: "GPA: 10 / 10, Sattenapalli, AP"
    },
    {
      school: "Awards & Recognition",
      degree: "",
      year: "",
      details: "2022: Best Work Rewarded by client (FLSmidth) for successful go-live; 2013: District Topper in Ramanujan Maths Olympiad"
    },
  ],
} as const

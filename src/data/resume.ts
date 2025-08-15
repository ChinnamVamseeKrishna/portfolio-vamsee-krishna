// src/data/resume.ts

const resume = {
  about: {
    name: "Chinnam Vamsee Krishna",
    email: "chinnamvamseekrishna@gmail.com",
    phone: "+91 8919666461",
    github: "https://github.com/ChinnamVamseeKrishna",
    leetcode: "https://leetcode.com/u/chinnamvamseekrishna/",
    resumeUrl: "/resume.pdf",
    bio: `Fullstack engineer with experience in Javascript, Java, Python, and expertise in both frontend and backend technologies. Experienced in building scalable applications with focus on optimization and user experience.`,
  },

  education: [
    {
      school: "VFSTR",
      degree: "B.Tech in Computer Science",
      year: "July 2021",
      location: "Guntur, AP",
      details: ["CGPA: 8.6 / 10"],
    },
    {
      school: "MATRIX IIT ACADEMY",
      degree: "BIEAP INTERMEDIATE",
      year: "June 2016",
      location: "Guntur, AP",
      details: ["Percentage: 97.8"],
    },
    {
      school: "SRI CHAITANYA SCHOOL",
      degree: "High School Diploma",
      year: "June 2014",
      location: "Sattenapalli, AP",
      details: ["GPA: 10 / 10"],
    },
  ],

  coursework: [
    "Object oriented Programming",
    "Operating Systems",
    "Data structures and Algorithms",
    "Programming languages",
    "Computer organization and architecture",
    "Design and analysis of algorithms",
    "Unix Tools and Scripting",
    "Problem solving (Scaler Academy)",
    "Analytical thinking (Scaler Academy)",
    "Space and time complexities (Scaler Academy)",
    "Advanced data structures (Scaler Academy)",
    "SQL / NoSQL (Scaler Academy)",
    "Low level design (Scaler Academy)",
    "High level design (Scaler Academy)",
    "React.js (Scaler Academy)",
    "Node.js (Scaler Academy)",
  ],

  skills: [
    "Javascript",
    "Java",
    "Python",
    "C",
    "React.js",
    "HTML",
    "CSS",
    "Tailwind",
    "MUI",
    "Ant design",
    "Mantine",
    "Node.js",
    "Flask",
    "MySQL",
    "SQL server",
    "PostgreSQL",
    "Mongo DB",
    "Low Level Design",
    "High Level Design",
    "Jest unit testing",
    "Data structures and Algorithms",
    "Schema Design",
    "Azure",
    "Machine Learning",
  ],

  experience: [
    {
      company: "Grant Thornton",
      title: "Fullstack Engineer",
      location: "Bangalore",
      start: "Apr 2024",
      end: "Present",
      summary: "Developed a digital solution PACT that automates purchase request and purchase order life cycle at scale bringing it down to 1 week.",
      highlights: [
        "Engaged with stakeholders and revamped the user interface increasing customer interaction resulting in increased revenue.",
        "Integrated optimization techniques that reduced the API response time by 40% and continuously monitored resources to achieve efficient cost reduction.",
        "Updated database schema and optimized asynchronous APIs through query restructuring resulting in reduced load on database and faster initial loads.",
        "Orchestrated geographical zone-wise rollouts strategically using Azure functions as timer triggers with SPN to trigger prompt emails, increasing customer satisfaction.",
      ],
    },
    {
      company: "Cognizant",
      title: "Node.js Developer",
      location: "Remote",
      start: "Sep 2021",
      end: "Aug 2023",
      summary: "Designed and managed 25 APIs for enhancing Site Connect, a cross-platform application resulting in timely release of Asset Log Book feature.",
      highlights: [
        "Integrated the Node APIs with Android, iOS, and web applications for seamless user experience at the site level.",
        "Adhered to MVC pattern and refined backend queries regularly for scalability achieving 98% code coverage with Jest unit testing framework.",
        "Debugged and optimized database performance using npm libraries like knex, improving turnaround time with minimal resources.",
      ],
    },
  ],

  projects: [
    {
      name: "BMS CLONE",
      url: "https://bookmyshow-c0q5.onrender.com/",
      repoUrl: "https://github.com/ChinnamVamseeKrishna/bookmyshow",
      description:
        "Created an end to end working application, Book My Show, deployed to render.com gaining insights into full stack development and deployment.",
      tags: ["React.js", "Node.js", "Ant design"],
      highlights: [
        "Implemented responsive user interface using Ant design and integrated secure password recovery through email OTP.",
        "Covered a wide spectrum of concepts from authentication, RBAC to API integration.",
      ],
      duration: "Jan 2021 – Apr 2021",
      role: "Graduation Project",
    },
    {
      name: "SPORTS HUB",
      description:
        "Engineered a web application exploring the complete MERN stack for end to end understanding.",
      tags: ["MERN", "Stripe Payment Gateway"],
      highlights: [
        "Programmed modules efficiently delivering pleasing output consolidating nearby store related data with location.",
        "Integrated end to end checkout feature including cart and Stripe payment gateway.",
        "Led peers as team lead to achieve expected results within timeline, earning spot recognition award.",
      ],
      duration: "July 2020 – Sep 2020",
      role: "Internship project",
    },
  ],

  awards: [
    {
      year: 2022,
      title: "Best Work",
      details: "Rewarded by client (FLSmidth) for successful go-live",
    },
    {
      year: 2013,
      title: "District Topper",
      details: "Stood 1st in Ramanujan Maths Olympiad",
    },
  ],
};

export default resume;

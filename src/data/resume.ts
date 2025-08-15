export const resume = {
  about: {
    name: "Chinnam Vamsee Krishna",
    email: "chinnamvamseekrishna@gmail.com",
    phone: "+91 8919666461",
    links: {
      github: "https://github.com/ChinnamVamseeKrishna",
      leetcode: "https://leetcode.com/u/chinnamvamseekrishna/",
      resume: "/resume.pdf"
    },
    bio: "Fullstack engineer with experience in Javascript, Java, Python, and expertise in both frontend and backend technologies. Experienced in building scalable applications with focus on optimization and user experience."
  },

  education: [
    {
      institution: "VFSTR",
      degree: "B.Tech in Computer Science",
      time: "July 2021",
      location: "Guntur, AP",
      cgpa: "8.6 / 10"
    },
    {
      institution: "MATRIX IIT ACADEMY",
      degree: "BIEAP INTERMEDIATE",
      time: "June 2016",
      location: "Guntur, AP",
      percentage: "97.8%"
    },
    {
      institution: "SRI CHAITANYA SCHOOL",
      degree: "High School Diploma",
      time: "June 2014",
      location: "Sattenapalli, AP",
      gpa: "10 / 10"
    }
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
    "Node.js (Scaler Academy)"
  ],

  skills: {
    programmingLanguages: ["Javascript", "Java", "Python", "C"],
    frontendTechnologies: ["React.js", "HTML", "CSS", "Tailwind", "MUI", "Ant design", "Mantine"],
    backendTechnologies: ["Node.js", "Flask"],
    databases: ["MySQL", "SQL server", "PostgreSQL", "Mongo DB"],
    systemDesign: ["Low Level Design", "High Level Design"],
    testingFrameworks: ["Jest unit testing"],
    miscellaneous: ["Data structures and Algorithms", "Schema Design", "Azure", "Machine Learning"]
  },

  experience: [
    {
      company: "Grant Thornton",
      title: "Fullstack Engineer",
      location: "Bangalore",
      period: "Apr 2024 - Present",
      bullets: [
        "Developed a digital solution PACT that automates purchase request and purchase order life cycle at scale bringing it down to 1 week.",
        "Engaged with stakeholders and revamped the user interface increasing customer interaction resulting in increased revenue.",
        "Integrated optimization techniques that reduced the API response time by 40% and monitored resources continuously for efficient cost reduction.",
        "Updated database schema and optimized asynchronous APIs through query restructuring resulting in reduced load on database and faster initial loads.",
        "Orchestrated geographical zone-wise rollouts strategically using Azure functions as timer triggers with SPN to trigger prompt emails, increasing customer satisfaction."
      ]
    },
    {
      company: "Cognizant",
      title: "Node.js Developer",
      location: "Remote",
      period: "Sep 2021 – Aug 2023",
      bullets: [
        "Designed and managed 25 APIs for enhancing Site Connect, a cross-platform application resulting in a timely release of the Asset Log Book feature.",
        "Integrated the Node APIs with Android, iOS, and web applications for seamless user experience at the site level.",
        "Adhered to MVC pattern and refined backend queries regularly for scalability achieving 98% code coverage with Jest unit testing framework.",
        "Debugged and optimized database performance using npm libraries like knex, improving turnaround time with minimal resources."
      ]
    }
  ],

  projects: [
    {
      name: "BMS CLONE",
      description: "Created an end to end working application, Book My Show, deployed to render.com gaining insights into full stack development and deployment.",
      duration: "Jan 2021 – Apr 2021",
      role: "Graduation Project",
      links: {
        github: "https://github.com/ChinnamVamseeKrishna/bookmyshow",
        live: "https://bookmyshow-c0q5.onrender.com/"
      },
      highlights: [
        "Implemented responsive user interface using Ant design and integrated secure password recovery through email OTP.",
        "Covered a wide spectrum of concepts from authentication, RBAC to API integration."
      ]
    },
    {
      name: "SPORTS HUB",
      description: "Engineered a web application exploring the complete MERN stack for end to end understanding.",
      duration: "July 2020 – Sep 2020",
      role: "Internship project",
      highlights: [
        "Programmed modules efficiently delivering pleasing output consolidating nearby store related data with location.",
        "Integrated end to end checkout feature including cart and Stripe payment gateway.",
        "Led peers as team lead to achieve expected results within timeline, earning spot recognition award."
      ]
    }
  ],

  awards: [
    {
      year: 2022,
      title: "Best Work",
      description: "Rewarded by client (FLSmidth) for successful go-live"
    },
    {
      year: 2013,
      title: "District Topper",
      description: "Stood 1st in Ramanujan Maths Olympiad"
    }
  ]
} as const;

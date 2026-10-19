/**
 * =======================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =======================================================================
 * Edit this file to customize your personal information, links, projects,
 * education, and experience. All placeholders are clearly marked.
 */

export const personalInfo = {
  name: "Aviraj Anil Ligade",
  firstName: "Aviraj",
  role: "B.Tech Computer Science & Engineering Graduate | 2026",
  tagline: "Building scalable web & mobile solutions with Java, React.js, and modern backend architectures.",
  location: "Medshingi, Sangola, Maharashtra, India",
  email: "avirajligade0622@gmail.com",
  phone: "+91 9075694640",
  phoneDisplay: "+91 90756 94640",
  graduationYear: "2026",
  college: "Sinhgad College of Engineering, Pandharpur",
  cgpa: "9.33 / 10",
  status: "Open to Software Developer Roles & Internships",

  // Profile image: Place your photo in the public/ folder or src/assets/ and update the path here.
  // Set to null to show the interactive SVG developer avatar.
  profileImage: "/Profile.jpeg",

  // Social & Professional links - UPDATE THESE WITH YOUR ACTUAL PROFILES
  socialLinks: {
    // [PLACEHOLDER - UPDATE WITH YOUR GITHUB PROFILE URL]
    github: "https://github.com/aviraj0622",
    // [PLACEHOLDER - UPDATE WITH YOUR LINKEDIN PROFILE URL]
    linkedin: "https://www.linkedin.com/in/aviraj-ligade-033476280/",
    email: "mailto:avirajligade0622@gmail.com",
    phone: "tel:+919075694640"
  },

  // Path to your resume PDF in the public directory
  resumeFile: "/Aviraj2K26.pdf"
};

export const aboutMe = {
  summary: [
    "I am a passionate and dedicated Computer Science and Engineering student graduating in 2026 with a strong academic foundation (CGPA: 9.33/10) from Sinhgad College of Engineering, Pandharpur.",
    "My core interests lie in full-stack software development, robust backend architectures, and database design. I have hands-on experience building full-stack web applications with React.js, Node.js, Java, and Spring Boot, as well as mobile apps using Flutter and Android Studio.",
    "I thrive on solving real-world challenges by engineering practical, user-centric software products. From restaurant dining workflows to agricultural management systems, I enjoy transforming ideas into clean, maintainable, and impactful code."
  ],
  strengths: [
    {
      title: "Problem Solving",
      description: "Analytical mindset focused on breaking down complex problems and designing structured, efficient algorithmic solutions.",
      icon: "problemSolving"
    },
    {
      title: "Creativity",
      description: "Crafting intuitive user interfaces and exploring inventive approaches to real-life software requirements.",
      icon: "creativity"
    },
    {
      title: "Building Real-World Software",
      description: "Developing end-to-end applications that solve tangible problems for users, farmers, and businesses.",
      icon: "realWorld"
    },
    {
      title: "Continuous Learning",
      description: "Quick to grasp new technologies, frameworks, and modern software engineering practices.",
      icon: "learning"
    }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Java", level: "Proficient", note: "Core Java & OOP" },
      { name: "C", level: "Intermediate", note: "Foundations & Memory" }
    ]
  },
  {
    category: "Web Technologies",
    icon: "globe",
    skills: [
      { name: "React.js", level: "Intermediate", note: "Component Architecture & Hooks" },
      { name: "HTML5", level: "Proficient", note: "Semantic Markup" },
      { name: "CSS3", level: "Proficient", note: "Flexbox, Grid, Animations" },
      { name: "Basic JavaScript", level: "Basic", note: "ES6+, DOM & Async basics" },
      { name: "Bootstrap 5", level: "Intermediate", note: "Responsive Layouts" }
    ]
  },
  {
    category: "Backend Development",
    icon: "server",
    skills: [
      { name: "Node.js", level: "Intermediate", note: "REST APIs & Runtime" },
      { name: "Spring Boot", level: "Intermediate", note: "Enterprise Java Services" }
    ]
  },
  {
    category: "Databases",
    icon: "database",
    skills: [
      { name: "SQL", level: "Intermediate", note: "Relational Queries & Schemas" },
      { name: "MySQL", level: "Intermediate", note: "RDBMS Design & Indexing" },
      { name: "MongoDB", level: "Familiar", note: "NoSQL Document Store" }
    ]
  },
  {
    category: "Mobile App Development",
    icon: "mobile",
    skills: [
      { name: "Android Studio", level: "Intermediate", note: "App Architecture" },
      { name: "Flutter", level: "Intermediate", note: "Cross-Platform UI" },
      { name: "Dart", level: "Intermediate", note: "Stateful Applications" },
      { name: "Java Basics", level: "Basic", note: "Android Java Fundamentals" }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "tool",
    skills: [
      { name: "Git", level: "Proficient", note: "Version Control" },
      { name: "GitHub", level: "Proficient", note: "Collaboration & Repositories" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: "Basic in Java", note: "Arrays, Lists, Stacks, Queues, Trees" },
      { name: "Object-Oriented Programming (OOP)", level: "Proficient", note: "Encapsulation, Polymorphism, Abstraction" },
      { name: "Database Management Systems (DBMS)", level: "Proficient", note: "Normalization, ACID, Transactions" }
    ]
  }
];

export const projectsData = [
  {
    id: "food-appointment-system",
    title: "Food Appointment System",
    badge: "Full-Stack Web App",
    highlight: "Reduces restaurant wait times with advance booking & automated payments",
    description: "A comprehensive web platform that allows customers to browse restaurant menus and live pricing, book meals in advance, pay 25% upfront through Razorpay, and receive automated email updates. Streamlines restaurant operations, reduces idle table turnover, and handles end-to-end authentication and order workflows.",
    keyFeatures: [
      "Menu browsing with real-time pricing and item categorization",
      "Advance meal booking with flexible arrival scheduling",
      "Secure 25% upfront advance payment via Razorpay payment gateway",
      "JWT-based user authentication and session management",
      "Automated transactional email notifications for booking confirmations",
      "Image management and storage integration with Cloudinary"
    ],
    technologies: [
      "React.js",
      "Bootstrap 5",
      "Node.js",
      "Java",
      "Spring Boot",
      "MySQL",
      "JWT",
      "Razorpay",
      "Cloudinary"
    ],
    // Actual GitHub Repo URL
    githubUrl: "https://github.com/aviraj0622/food-appointment-system",
    isGithubPlaceholder: false,
    // [PLACEHOLDER - UPDATE WITH YOUR LIVE DEPLOYMENT URL]
    liveUrl: "https://food-appointment-system.vercel.app/",
    isLivePlaceholder: true
  },
  {
    id: "smart-farm-management",
    title: "Smart Farm Management System",
    badge: "Mobile Application",
    highlight: "Offline-first agriculture assistant with automated PDF generation",
    description: "A specialized cross-platform mobile application built for farmers to organize and manage crop records, plot details, pesticide spraying schedules, fertilizer usage, and overall farming expenses. Features resilient offline storage, seamless CRUD operations, and on-device PDF report exports for record-keeping.",
    keyFeatures: [
      "Field & plot lifecycle tracking with harvest forecasting",
      "Pesticide and fertilizer scheduling with timely reminders",
      "Farm expense and revenue ledger with categorized summaries",
      "Offline storage enabling remote operation without internet connectivity",
      "Full CRUD operations backed by cloud synchronization with Firebase",
      "Automated PDF report generation for official records and audits"
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Android Studio",
      "Firebase",
      "PDF API"
    ],
    // Actual GitHub Repo URL
    githubUrl: "https://github.com/aviraj0622/Farmer-management-system",
    isGithubPlaceholder: false,
    // [PLACEHOLDER - UPDATE WITH YOUR APP DEMO / REPO URL]
    liveUrl: null,
    isLivePlaceholder: true
  },
  {
    id: "video-streaming-platform",
    title: "Cloud-Based Video Streaming Platform",
    badge: "Cloud Media Platform",
    highlight: "Adaptive bitrate streaming with Supabase and FFmpeg transcode pipeline",
    description: "A modern video streaming web application inspired by YouTube architecture. Features smooth video uploads, FFmpeg adaptive transcoding for multi-resolution playback (1080p, 720p, 480p, 360p), likes, comments, 'Watch Later' playlists, and dynamic channel subscriptions.",
    keyFeatures: [
      "High-throughput video upload pipeline with cloud storage integration",
      "Adaptive bitrate streaming with multiple resolution transcoding using FFmpeg",
      "Supabase backend for relational database management, auth, and storage",
      "User engagement features: Likes, Watch Later playlist, and channel subscriptions",
      "Responsive video player with speed control and quality switching"
    ],
    technologies: [
      "React.js",
      "Bootstrap 5",
      "Node.js",
      "Supabase",
      "FFmpeg"
    ],
    // Actual GitHub Repo URL
    githubUrl: null,
    isGithubPlaceholder: false,
    // [PLACEHOLDER - UPDATE WITH YOUR LIVE DEPLOYMENT URL]
    liveUrl: null,
    isLivePlaceholder: true
  }
];

export const experienceData = [
  {
    id: "qspiders-internship",
    role: "Software Development Intern",
    organization: "QSpiders – Software Testing Training Institute",
    duration: "December 2025 – July 2026",
    status: "Upcoming / Active",
    type: "Internship",
    location: "Maharashtra, India",
    description: "Undergoing comprehensive software development and engineering training focusing on enterprise Java, database systems, and full-stack web technologies.",
    highlights: [
      "Rigorous hands-on training in Core Java, OOP principles, and data structures.",
      "Database management, schema modeling, and SQL query optimization.",
      "Frontend development using HTML5, CSS3, and JavaScript.",
      "Solving algorithmic coding problems and building functional mini-applications.",
      "Learning software development lifecycles, debugging techniques, and best coding practices."
    ],
    technologies: ["Java", "SQL", "HTML5", "CSS3", "JavaScript", "Software Engineering Concepts"]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Sinhgad College of Engineering, Pandharpur",
    duration: "2022 – 2026",
    score: "CGPA: 9.33 / 10",
    badge: "Current / Final Year",
    isHighlighted: true,
    details: "Maintaining an exceptional academic record while spearheading practical software projects in web, mobile, and backend engineering."
  },
  {
    degree: "HSC – Science (Higher Secondary Certificate)",
    institution: "Sangola Vidyamandir Prashala Junior College",
    duration: "2020 – 2022",
    score: "Percentage: 57%",
    badge: "Higher Secondary",
    isHighlighted: false,
    details: "Completed higher secondary curriculum with Physics, Chemistry, and Mathematics."
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "DBK Sambhajirao Shende Vidyalaya, Medshingi",
    duration: "Passing Year: 2020",
    score: "Percentage: 83.40%",
    badge: "Secondary School",
    isHighlighted: false,
    details: "Graduated with distinction with high academic standing across all core subjects."
  }
];

export const certificationsData = [
  {
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "NxtWave",
    category: "Artificial Intelligence",
    badge: "Generative AI",
    description: "Hands-on certification covering fundamentals of generative artificial intelligence, neural concepts, and model prototyping."
  },
  {
    title: "PHP and MySQL Training",
    issuer: "Spoken Tutorial (IIT Bombay Initiative)",
    category: "Backend & Databases",
    badge: "Web & DB",
    description: "Comprehensive training on server-side scripting, relational database connectivity, and SQL query processing."
  },
  {
    title: "Oracle Cloud Infrastructure 2025",
    issuer: "Oracle University (Aug 2025)",
    category: " AI Foundations Associate",
    badge: "Cloud Computing",
    description: "Foundational training covering Oracle's cloud infrastructure, core services, compute, storage, and networking fundamentals."
  }
];

export const personalInfo = {
  name: "Kaushik Ladumor",
  tagline: "Full-Stack AI Engineer | React, Node.js, Python & LLM Applications",
  bio: "I am a Full-Stack Developer with hands-on experience building production-grade web applications using React, Node.js, Python, and PostgreSQL. I enjoy integrating LLM-powered features into real products and building secure, scalable software that solves practical problems.",
  email: "kaushik.ladumor04@gmail.com",
  phone: "+91 84888 23806",
  location: "Surat, Gujarat",
  github: "https://github.com/kaushik-ladumor",
  leetcode: "https://leetcode.com/u/kaushik_04/",
  linkedin: "https://www.linkedin.com/in/kaushik-ladumor-3a7b18290/",
  resumeUrl: "/Kaushik_Ladumor_Resume.pdf"
}

export const education = [
  { year: "2022–2026", degree: "B.Tech in Computer Science & Engineering", university: "Ahmedabad University", institute: "School of Engineering and Applied Science", score: "2.45 CGPA" },
  { year: "2022", degree: "HSC (Science)", university: "Gujarat Board", institute: "Ramkrushna Vidhyabhavan", score: "76.30%" },
  { year: "2020", degree: "SSC", university: "Gujarat Board", institute: "Suman High School", score: "84.33%" }
]

export const experience = [
  {
    period: "Aug 2026 – Present",
    role: "Software Developer",
    company: "Aerocraft Engineering (I) Pvt. Ltd.",
    location: "Ahmedabad, Gujarat",
    highlights: [
      "Own an HR module within a product-level platform.",
      "Build frontend and backend features with React, Node.js, Python, and PostgreSQL, from API design through user-facing workflows.",
      "Handle the module end to end, from requirements and design to development and integration."
    ]
  },
  {
    period: "Jun 2026 – Jul 2026",
    role: "React.js Trainee",
    company: "Tagline Infotech LLP",
    location: "Surat, Gujarat",
    highlights: [
      "Completed a React.js training internship in a professional team environment.",
      "Recognized for sincerity, dedication, and hard work, with a satisfactory performance review."
    ]
  }
]

export const projects = [
  {
    id: 1,
    title: "Mori – HRMS Platform",
    period: "Aug 2026 – Present",
    summary: "An all-in-one HR platform for employee records, shifts, attendance, leave, payroll, hiring, and performance workflows.",
    skills: ["React", "Node.js", "Python", "PostgreSQL", "LLM Integration"],
    outcomes: [
      "Supports employee journeys from joining through exit, including shifts, attendance, and leave.",
      "Handles India and US payroll with loans, reimbursements, arrears, and government reports.",
      "Includes AI-assisted hiring and interviews with human review, plus promotion and compensation checks.",
      "Integrates with other platform modules through APIs and supports company-hosted employee data."
    ],
    type: "AI & HRMS",
    github: ""
  },
  {
    id: 2,
    title: "ClothOra – E-commerce Web App",
    period: "",
    summary: "A full-stack MERN e-commerce platform with a responsive interface, OTP authentication, product catalog, cart, and order processing.",
    skills: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary"],
    outcomes: ["Implemented OTP-based authentication and REST APIs", "Built product catalog, cart, and order processing", "Integrated Razorpay and cash-on-delivery checkout", "Managed images with Cloudinary and built an admin dashboard"],
    type: "Full Stack",
    github: "https://github.com/kaushik-ladumor/ClothOra.git"
  },
  {
    id: 3,
    title: "Wanderlust – Travel & Stay Listing Web App",
    period: "",
    summary: "A travel listing and review application with property management, OTP authentication, role-based access, and interactive maps.",
    skills: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport.js", "Nodemailer", "Mapbox API"],
    outcomes: ["Developed travel listings and reviews", "Implemented OTP authentication and role-based access with Passport.js and Nodemailer", "Added interactive, location-based property maps with Mapbox"],
    type: "Full Stack",
    github: "https://github.com/kaushik-ladumor/wanderlust-app.git"
  }
]

export const skills = {
  "Languages": ["JavaScript (ES6+)", "Python", "SQL", "HTML", "CSS"],
  "Frameworks & Libraries": ["React.js", "Node.js", "Express.js", "Mongoose", "EJS", "Tailwind CSS", "Bootstrap CSS", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  "Databases": ["PostgreSQL", "MongoDB", "MySQL"],
  "AI & Backend": ["LLM Integration", "REST APIs", "OTP Authentication", "Passport.js"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "Netlify"],
  "Data & BI": ["Power BI", "Excel", "Data Cleaning", "KPI Analysis", "Data Visualization"]
}

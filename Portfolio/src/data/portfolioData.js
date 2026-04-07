export const personalInfo = {
  name: "Kaushik",
  tagline: "MERN Stack Developer & Data Analyst | Building Scalable Apps & Insightful Dashboards",
  bio: "I am a MERN Stack Developer and Data Analyst with a passion for building scalable web applications and data-driven solutions. I have hands-on experience in React, Node.js, MongoDB, SQL, and Power BI, developing projects like e-commerce platforms and analytics dashboards. I enjoy solving real-world problems and continuously improving my skills.",
  email: "kaushik.ladumor04@gmail.com",
  phone: "8488823806",
  location: "Surat, Gujarat",
  github: "https://github.com/kaushik-ladumor",
  leetcode: "https://leetcode.com/u/kaushik_04/",
  linkedin: "https://www.linkedin.com/in/kaushik-ladumor-3a7b18290/",
  resumeUrl: "https://drive.google.com/file/d/1v9hSmzuxyOzCgcY2RNThuj2sasqsDZYX/view?usp=sharing"
}

export const education = [
  { year: "Pursuing", degree: "BTech in Computer Science & Engineering", university: "Ahmedabad University", institute: "School of Engineering and Applied Science", score: "2.39 / 4.00 CGPA" },
  { year: "2022", degree: "HSC (Science)", university: "Gujarat Board", institute: "Ramkrushna Vidhyabhavan", score: "76.30%" },
  { year: "2020", degree: "SSC", university: "Gujarat Board", institute: "Suman High School", score: "84.33%" }
]

export const projects = [
  {
    id: 1,
    title: "Rohit Sharma Career Stats Dashboard",
    period: "Dec 2025",
    summary: "Interactive Power BI dashboard analysing Rohit Sharma's cricket performance across all formats using Excel data.",
    skills: ["Power BI", "Excel", "Data Cleaning", "Data Visualisation", "KPI Analysis"],
    outcomes: ["Analysed runs, averages, strike rate, boundaries", "Enabled ODI / T20I / Test format comparison", "Identified year-wise performance trends"],
    type: "Data Analytics",
    github: ""
  },
  {
    id: 2,
    title: "ClothOra – E-commerce Web App",
    period: "May 2025 – Jul 2025",
    summary: "Full-stack MERN e-commerce platform with OTP-based authentication, product catalog, shopping cart, Razorpay / COD checkout, and admin dashboard.",
    skills: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary"],
    outcomes: ["OTP-based authentication", "Product catalog & shopping cart", "Razorpay & COD integration", "Admin dashboard", "Cloudinary image management"],
    type: "Full Stack",
    github: "https://github.com/kaushik-ladumor/ClothOra.git"
  },
  {
    id: 3,
    title: "Wanderlust – Travel & Stay Listing",
    period: "Dec 2024 – Feb 2025",
    summary: "Full-stack web app for property listings and travel stays with OTP auth, property management, image uploads, reviews, and map integration.",
    skills: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport.js", "Cloudinary", "Multer", "Bootstrap CSS", "Mapbox API"],
    outcomes: ["Rental listings with reviews", "OTP auth via Nodemailer & Passport.js", "Cloudinary image uploads", "Mapbox geolocation"],
    type: "Full Stack",
    github: "https://github.com/kaushik-ladumor/wanderlust-app.git"
  }
]

export const skills = {
  "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap CSS", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js", "REST API", "Mongoose"],
  "Database": ["MongoDB", "SQL", "NoSQL"],
  "Data & Analytics": ["Power BI", "Excel", "Pandas", "Python", "Numpy", "Matplotlib", "Seaborn"],
  "Tools & DevOps": ["Git", "GitHub", "VS Code", "Postman", "Render", "Vercel", "GitHub Actions (CI/CD)"]
}

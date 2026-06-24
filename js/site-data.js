window.SiteData = {
  name: "Shreya Patil",
  email: "sp405957@gmail.com",
  phone: "+91 9503341704",
  whatsapp: "9503341704",
  nav: [
    { label: "Home", page: "home", href: "index.html" },
    { label: "About", page: "about", href: "pages/about.html" },
    { label: "Services", page: "services", href: "pages/services.html" },
    { label: "Portfolio", page: "portfolio", href: "pages/portfolio.html" },
    { label: "Resume", page: "resume", href: "pages/resume.html" },
    { label: "Contact", page: "contact", href: "pages/contact.html" }
  ],
  socials: [
    //{ label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/shreyapatil" },
    //{ label: "GitHub", icon: "github", href: "https://github.com/" },
    //{ label: "Instagram", icon: "instagram", href: "https://www.instagram.com/shreyapatil.dev" }
  ],
   

  services: [
    {
      title: "Frontend Website Development",
      icon: "monitor-smartphone",
      summary: "Premium responsive websites with elegant layouts, animation, SEO structure, and client-focused CTAs.",
      tags: ["HTML5", "CSS3", "JavaScript", "SEO"]
    },
    {
      title: "Full Stack Web Apps",
      icon: "layers",
      summary: "Dynamic web applications with frontend pages, PHP form handling, MySQL storage, and clean data flow.",
      tags: ["PHP", "MySQL", "Forms", "Dashboards"]
    },
    {
      title: "Java Academic Projects",
      icon: "coffee",
      summary: "Student-friendly Java project builds with database planning, clean UI screens, reports, and documentation support.",
      tags: ["Java", "JDBC", "MySQL", "Reports"]
    },
    {
      title: "UI/UX Redesign",
      icon: "wand-sparkles",
      summary: "Refresh outdated pages with better hierarchy, colors, spacing, trust sections, and mobile-first structure.",
      tags: ["Wireframes", "Design Systems", "UX", "Brand"]
    },
    {
      title: "Portfolio and Resume Websites",
      icon: "id-card",
      summary: "Personal brand websites for freelancers, students, developers, teachers, trainers, and consultants.",
      tags: ["Portfolio", "Resume", "Brand", "Contact"]
    },
    {
      title: "Database Projects",
      icon: "database-zap",
      summary: "MySQL-backed enquiry systems, project tables, basic admin concepts, and secure prepared-statement examples.",
      tags: ["MySQL", "SQL", "Security", "CRUD"]
    }
  ],
  projects: [
    {
      id: "saas-dashboard",
      title: "Startup SaaS Analytics Dashboard",
      category: "Full Stack",
      image: "images/project-saas-dashboard.svg",
      summary: "A conversion-ready dashboard concept with responsive metric cards, charts, role-based sections, and lead capture.",
      details: "Designed for startup founders who need a premium product interface and a clean backend-ready structure. Includes dashboard cards, chart sections, account actions, and a scalable layout system.",
      tech: ["HTML5", "CSS Grid", "JavaScript", "PHP", "MySQL"],
      demo: "pages/contact.html",
      github: "https://github.com/Shreya07-1824"
    },
    {
      id: "cafe-commerce",
      title: "Local Cafe Ordering Website",
      category: "Frontend",
      image: "images/projectimg.png",
      summary: "A polished local business website with menu highlights, WhatsApp ordering, testimonials, and SEO sections.",
      details: "Built for restaurants, cafes, and local stores that need fast mobile browsing, clear offers, and easy enquiry paths. The structure supports menu categories, offers, and click-to-order CTAs.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      demo: "https://cafeordering.onrender.com",
      github: "https://github.com/Shreya07-1824"
      
    },
    {
      id: "java-institute",
      title: "Institute Management System",
      category: "Java",
      image: "images/project-java-institute.svg",
      summary: "A Java and MySQL project concept for admissions, fees, student records, attendance, and reports.",
      details: "Suitable for academic submissions and institute operations. It demonstrates database thinking, clean module separation, forms, and report-friendly screens.",
      tech: ["Java", "JDBC", "MySQL", "Swing"],
      demo: "pages/contact.html",
      github: "https://github.com/Shreya07-1824"
    },
    {
      id: "ui-kit",
      title: "Founder UI Kit and Landing System",
      category: "UI/UX",
      image: "images/project-ui-kit.svg",
      summary: "A reusable UI kit with hero sections, buttons, cards, colors, and mobile app-inspired components.",
      details: "Created for small teams that want a consistent visual language across landing pages, pitch decks, and web app screens.",
      tech: ["UI Design", "CSS Tokens", "Components", "Branding"],
      demo: "pages/contact.html",
      github: "https://github.com/Shreya07-1824"
    },
    {
      id: "database-crm",
      title: "Enquiry CRM Database System",
      category: "Database Projects",
      image: "images/project-database.svg",
      summary: "A secure enquiry storage concept with MySQL tables, prepared statements, and admin-ready data structure.",
      details: "Useful for coaching classes, consultants, freelancers, and institutes that need to store leads and follow up systematically.",
      tech: ["MySQL", "PHP", "Prepared Statements", "CRUD"],
      demo: "pages/contact.html",
      github: "https://github.com/"
    }
  ],
  testimonials: [
    {
      name: "Aarav Mehta",
      role: "Startup Founder",
      photo: "images/client-a.svg",
      quote: "Shreya turned a rough idea into a polished website that made our product feel investor-ready."
    },
    {
      name: "Neha Kulkarni",
      role: "Institute Coordinator",
      photo: "images/client-b.svg",
      quote: "The project structure was clean, responsive, and easy to explain. The form and database flow were especially helpful."
    },
    {
      name: "Rohan Shah",
      role: "Local Business Owner",
      photo: "images/client-c.svg",
      quote: "Our old page looked basic. The redesign made our services clearer and brought more WhatsApp enquiries."
    }
  ],
  skills: [
    { label: "HTML5 and semantic SEO", value: 95 },
    { label: "CSS3, Grid, Flexbox", value: 92 },
    { label: "JavaScript interactions", value: 88 },
    { label: "PHP and MySQL forms", value: 78 },
    { label: "Java project logic", value: 82 },
    { label: "Responsive UI/UX", value: 94 }
  ],
  timeline: [
    { step: "Brief", text: "Understand goals, audience, pages, features, budget, and timeline." },
    { step: "Structure", text: "Plan sections, navigation, content hierarchy, SEO headings, and conversion paths." },
    { step: "Design", text: "Create the visual system with colors, typography, interactions, and reusable UI patterns." },
    { step: "Develop", text: "Build responsive pages, JavaScript features, form validation, and backend examples where needed." },
    { step: "Launch", text: "Test links, mobile views, form paths, SEO files, and handover instructions." }
  ],
  faqs: [
    {
      q: "Can you build only the frontend?",
      a: "Yes. I can build a polished static website or frontend UI and keep PHP/MySQL only where forms or storage are required."
    },
    {
      q: "Do you work on student Java projects?",
      a: "Yes. I can help structure Java, JDBC, MySQL, and documentation-friendly project flows."
    },
    {
      q: "Can I request WhatsApp lead generation?",
      a: "Yes. WhatsApp CTAs, click-to-call, email buttons, and contact forms can all be included."
    },
    {
      q: "Will the website be mobile responsive?",
      a: "Yes. The layout is built mobile-first and tested across phone, tablet, laptop, and desktop widths."
    }
  ],
  typingRoles: [
    "Frontend Developer",
    "Full Stack Developer",
    "Java Project Builder",
    "Website Designer"
  ]
};

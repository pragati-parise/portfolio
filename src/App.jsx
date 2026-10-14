import { useEffect, useState } from "react";

const email = "parise.pragati1909@gmail.com";
const resume = "/Pragati-Parise-Resume.pdf";
const social = {
  github: "https://github.com/pragati-parise",
  linkedin: "https://www.linkedin.com/in/pragati-parise-36298a267",
  instagram: "https://www.instagram.com/pragati_parise_",
};

const navigation = [
  ["about", "About"], ["skills", "Skills"], ["projects", "Projects"],
  ["education", "Education"], ["experience", "Work Experience"],
  ["certifications", "Certifications"], ["achievements", "Achievements"], ["contact", "Contact"],
];

const skillGroups = [
  { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Vite", "Responsive Design"] },
  { title: "Backend & Database", skills: ["Python", "FastAPI", "REST APIs", "Pydantic", "SQLAlchemy", "PostgreSQL", "SQL", "Neon PostgreSQL"] },
  { title: "AI & Security", skills: ["Google Gemini API", "Prompt Engineering", "Generative AI", "JWT", "Authentication", "API Integration"] },
  { title: "Cloud & Development", skills: ["AWS", "DevOps", "Software Testing", "DSA", "Git", "GitHub", "Render"] },
  { title: "Soft Skills", skills: ["Communication", "Teamwork", "Time Management", "Self-Learning", "Leadership", "Problem Solving"] },
];

const projectFeatures = [
  ["Resume PDF upload & text extraction", "AI resume scoring & ATS analysis", "Missing-skill insights and improvement suggestions", "Job-description matching"],
  ["Project and task management", "Kanban board with drag-and-drop", "Team collaboration, priorities & deadlines", "AI task breakdown and project planning"],
  ["Product search and filtering", "Shopping cart and order history", "Secure user authentication", "AI-powered watch recommendations"],
  ["Habit creation and daily tracking", "Streak and progress monitoring", "Dashboard analytics", "AI habit coaching and recommendations"],
  ["Responsive portfolio design", "Projects with live demos and GitHub links", "Skills, education and experience sections", "Certifications, achievements and contact links"],
];

const projects = [
  { title: "AI Resume Analyzer", category: "AI · Career tools", description: "An AI-powered full-stack web application that analyzes resumes, evaluates ATS compatibility, and provides personalized improvement suggestions.", tech: "React.js · FastAPI · Python · PostgreSQL · SQLAlchemy · Gemini API · JWT", github: "https://github.com/pragati-parise/ai-resume-analyzer", live: "https://ai-resume-analyzer-f3cw.onrender.com" },
  { title: "ProjectFlow", subtitle: "AI-Powered Project Management Tool", category: "AI · Collaboration", description: "An AI-powered full-stack project management application designed to help teams organize projects, manage tasks, and improve productivity.", tech: "React.js · FastAPI · Python · PostgreSQL · SQLAlchemy · Gemini API · JWT", github: "https://github.com/pragati-parise/projectflow-ai-project-management", live: "https://projectflow-ai-project-management-e9iy.onrender.com" },
  { title: "Samay Sutra", subtitle: "AI-Powered Watch E-Commerce Platform", category: "E-commerce · AI", description: "An AI-powered full-stack e-commerce platform for browsing watches, managing orders, and receiving personalized AI-based watch recommendations.", tech: "React.js · FastAPI · Python · PostgreSQL · SQLAlchemy · Gemini API · JWT", github: "https://github.com/pragati-parise/samay-sutra-ai-watch-store", live: "https://samay-sutra-frontend.onrender.com" },
  { title: "Habit Flow", subtitle: "AI-Powered Habit Tracker", category: "Productivity · AI", description: "An AI-powered full-stack habit tracking application that helps users build consistent habits through personalized AI coaching and insights, with daily progress.", tech: "React.js · FastAPI · Python · PostgreSQL · SQLAlchemy · Gemini API · JWT", github: "https://github.com/pragati-parise/ai-powered-habit-tracker", live: "https://habitflow-web-gtz9.onrender.com" },
  { title: "Personal Portfolio", category: "Personal website", description: "A responsive personal portfolio website showcasing my skills, projects, education, experience, certifications, achievements, and professional journey.", tech: "HTML5 · CSS3 · JavaScript · React.js · Responsive Design", github: "https://github.com/pragati-parise/portfolio", live: "https://pragatiiparise.netlify.app" },
];

const education = [
  { degree: "M.Sc. Computer Science", school: "B.K. Birla College, Kalyan", year: "2027", result: "Grade A", description: "Completed my master’s degree in Computer Science, strengthening my academic and technical foundation." },
  { degree: "B.Sc. Computer Science", school: "B.K. Birla College, Kalyan", year: "2025", result: "CGPA · 9.13", description: "Built a strong foundation in programming, databases, software concepts, and problem solving." },
  { degree: "HSC", school: "B.K. Birla College, Kalyan", year: "2022", result: "First Class", description: "Completed Higher Secondary education with a focus on building my academic foundation." },
  { degree: "SSC", school: "Jai Bharat English High School, Dombivli", year: "2020", result: "88%", description: "Completed secondary education and developed a lasting interest in learning." },
];

const experience = [
  { role: "Software Development Intern", org: "Code B Solutions Pvt. Ltd., Mulund", date: "May 2026 – July 2026", bullets: ["Gained hands-on exposure to software development and real-world project workflows.", "Worked on development tasks and strengthened technical problem-solving skills."], certificate: "https://drive.google.com/file/d/1ggwpycIt25jYt0Kd8Iz1qW9plzRysNbV/view?usp=drivesdk" },
  { role: "Web Development Intern", org: "CodSoft", date: "Mar 2026 – Apr 2026", bullets: ["Worked on web development projects and strengthened practical frontend development skills.", "Built responsive web interfaces using modern web technologies.", "Gained experience with development workflows and project implementation."], certificate: "https://drive.google.com/file/d/1o3qp1MXuOmlqWstZqMhMZL5p4Sp4BBuf/view?usp=drivesdk" },
  { role: "Founder & Tutor", org: "Pragati Coaching Classes", date: "Oct 2022 – Oct 2025", bullets: ["Founded and independently managed coaching classes, including teaching, lesson planning, and day-to-day operations.", "Handled admission enquiries and communicated with prospective families to encourage enrolment.", "Managed students and parents while building leadership, communication, time-management, and mentoring skills."] },
  { role: "Teacher & Faculty", org: "Shree Classes · Science Academy · Little Stars Academy · Advanced Academy", date: "Oct 2025 – Present", bullets: ["Teach and guide students across subjects, plan lessons and daily schedules, and support their academic progress.", "Communicate with parents about student progress, address concerns, follow up, and handle enquiries.", "Maintain attendance, fee receipts, marks, and student records using class systems and record books.", "Check papers, prepare question papers, update marks, supervise exams, organize competitions, and coordinate classroom activities."] },
];

const certifications = [
  ["Generative AI Software Development", "https://drive.google.com/file/d/1o2qqMyqs4zkGtxuGAFv94pukhV5d2u4u/view?usp=drivesdk"],
  ["LLM Prompting with Gemini", "https://drive.google.com/file/d/16YLRNMqDDnWMEo61jnXl99GIBRMot6-W/view?usp=drivesdk"],
  ["Prompt Engineering", "https://drive.google.com/file/d/1mzD5oN7MUUrMwcUF-awaGGTQtTHDkdxy/view?usp=drivesdk"],
  ["PostgreSQL & SQL Development", "https://drive.google.com/file/d/12YRhtrJeIf0h3f7TVDCCP53hFBzmQZDa/view?usp=drivesdk"],
  ["ReactJS", "https://drive.google.com/file/d/19W4tJU9QBI9zwG58OLpsrqq_j7tvdi3j/view?usp=drivesdk"],
  ["JavaScript", "https://drive.google.com/file/d/1IkQB2FRCRDtZ6a-xyRZLINusurXvGWqC/view?usp=drivesdk"],
  ["Python", "https://drive.google.com/file/d/1tpAtjVKWr15Ao3bDzHh-JL4vm8kSX3D8/view?usp=drivesdk"],
  ["Data Structures and Algorithms in Python", "https://drive.google.com/file/d/1geMDqImLS6BHTVoWrwFDHtF2J2M_r_YH/view?usp=drivesdk"],
  ["SQL", "https://drive.google.com/file/d/1IMJ-aAjvIh7X2yk4y_nxjSFtQFWFilAY/view?usp=drivesdk"],
  ["AWS", "https://drive.google.com/file/d/1rf0pAQJ_Pwz9FDkSjvwrOJcmmqm4jIFA/view?usp=drivesdk"],
];

function SectionHeading({ label, title, intro }) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-wrap container">
    <a className="brand" href="#home" onClick={() => setOpen(false)}>Pragati Parise</a>
    <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}><span/><span/><span/></button>
    <nav id="site-navigation" className={`site-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
      {navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
  </div></header>;
}

function SocialLinks({ compact = false }) {
  return <div className={`social-links${compact ? " compact" : ""}`} aria-label="Social links">
    <HeroIconLink label="GitHub" href={social.github}/>
    <HeroIconLink label="LinkedIn" href={social.linkedin}/>
    <HeroIconLink label="Instagram" href={social.instagram}/>
    <HeroIconLink label="Gmail" href={`mailto:${email}`}/>
  </div>;
}

const socialIcons = {
  GitHub: "M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 1 .9 1.4 2.4 1 3 .8.1-.7.4-1 .7-1.3-2.7-.3-5.6-1.3-5.6-6A4.8 4.8 0 0 1 5.8 8c-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2a4.8 4.8 0 0 1 1.3 3.4c0 4.8-2.9 5.7-5.6 6 .4.3.8 1 .8 2v3c0 .4.2.7.8.6A12 12 0 0 0 12 .7z",
  LinkedIn: "M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5zM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-.9 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V21h-4z",
  Instagram: "M7 2.5h10A4.5 4.5 0 0 1 21.5 7v10a4.5 4.5 0 0 1-4.5 4.5H7A4.5 4.5 0 0 1 2.5 17V7A4.5 4.5 0 0 1 7 2.5zm0 1.5A3 3 0 0 0 4 7v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm10.75 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5z",
  Gmail: "M3 5.5h18a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 21 18.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5zm0 1.5v.2l9 6.3 9-6.3V7H3zm18 10V9l-8.6 6a.75.75 0 0 1-.8 0L3 9v8h18z",
};

function HeroIconLink({ label, href }) {
  const external = href.startsWith("http");
  return <a className="hero-icon-button" href={href} aria-label={label} title={label} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={socialIcons[label]}/></svg></a>;
}

function Hero() {
  return <section className="hero-section" id="home"><div className="container hero-grid">
    <div className="hero-copy"><p className="eyebrow">Hello, my name is</p><h1>Pragati Parise <span className="wave" aria-label="waving hand">👋🏻</span></h1>
      <p className="hero-role">I am a Full Stack Developer with AI Skills.</p>
      <p className="hero-description">I build modern, responsive web applications and integrate practical AI solutions to create useful digital experiences.</p>
      <div className="hero-actions"><a className="button button-dark" href="#projects">View Projects</a><a className="button button-outline hero-resume" href={resume} download="Pragati-Parise-Resume.pdf"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a.75.75 0 0 1 .75.75v8.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V4.25A.75.75 0 0 1 12 3.5zM5 15.5a.75.75 0 0 1 .75.75v1.25c0 .14.11.25.25.25h12c.14 0 .25-.11.25-.25v-1.25a.75.75 0 0 1 1.5 0v1.25A1.75 1.75 0 0 1 18 19.25H6a1.75 1.75 0 0 1-1.75-1.75v-1.25A.75.75 0 0 1 5 15.5z"/></svg>Resume</a><HeroIconLink label="GitHub" href={social.github}/><HeroIconLink label="LinkedIn" href={social.linkedin}/><HeroIconLink label="Instagram" href={social.instagram}/><HeroIconLink label="Gmail" href={`mailto:${email}`}/></div>
    </div>
    <div className="hero-portrait"><div className="portrait-frame"><img src="/formal_photo.jpeg" alt="Pragati Parise"/></div></div>
  </div><a className="scroll-cue" href="#about" aria-label="Scroll to About Me">SCROLL TO EXPLORE <span>↓</span></a></section>;
}

function About() {
  const blocks = [
    ["01 / Profile", "I’m Pragati Parise, a Full Stack Developer with AI Skills. I have completed my M.Sc. in Computer Science and enjoy building practical, user-friendly web applications that solve real-world problems."],
    ["02 / What I Work With", "I work with technologies across frontend, backend, databases, APIs, and AI integration. My toolkit includes HTML, CSS, JavaScript, React, Python, FastAPI, REST APIs, PostgreSQL, and Gemini API."],
    ["03 / What I Want Next", "I’m looking to grow as a Full Stack Developer with strong AI skills, contribute to real-world software projects, and continue learning technologies that help me build smarter and more impactful applications."],
  ];
  return <section className="section about-section" id="about"><div className="container"><SectionHeading label="About Me" title="Curiosity, meet code." intro="A curious developer who enjoys learning, building, and turning ideas into practical digital solutions."/><div className="about-grid">{blocks.map(([title, body]) => <article className="about-block" key={title}><p className="eyebrow">{title}</p><p>{body}</p></article>)}</div></div></section>;
}

function Skills() {
  return <section className="section skills-section" id="skills"><div className="container"><SectionHeading label="My Skills" title="Technologies I use"/><div className="skills-list">{skillGroups.map((group, index) => <div className="skill-row" key={group.title}><span className="skill-number">0{index + 1}</span><h3>{group.title}</h3><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div></div></section>;
}

function ProjectCard({ project, index }) {
  return <article className="project-card"><div className="project-detail"><p className="eyebrow project-category">{project.category}</p><div className="project-title-line"><div><h3>{project.title}</h3>{project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}</div></div><p className="project-description">{project.description}</p><div className="feature-list"><p className="eyebrow">Key features</p><ul>{projectFeatures[index].map(feature => <li key={feature}>{feature}</li>)}</ul></div><p className="tech-stack">{project.tech}</p><div className="project-links">{project.github ? <a className="project-action-link" href={project.github} target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={socialIcons.GitHub}/></svg>GitHub</a> : <span className="link-pending">GitHub link to be added</span>}{project.live ? <a className="project-action-link" href={project.live} target="_blank" rel="noreferrer"><span className="project-action-emoji" aria-hidden="true">🌐</span>Live Demo</a> : <span className="link-pending">Live demo to be added</span>}</div></div></article>;
}

function Projects() {
  return <section className="section projects-section" id="projects"><div className="container"><SectionHeading label="My Projects" title="Things I’ve been building." intro="Practical projects exploring full-stack development and thoughtful AI integration."/><div className="projects-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title}/>)}</div></div></section>;
}

function Education() {
  return <section className="section education-section" id="education"><div className="container"><SectionHeading label="Education" title="Academic background that supports my software foundation"/><div className="education-list">{education.map(({ degree, school, year, result, description }) => <article className="education-item" key={degree}><div className="education-title-row"><h3>{degree}</h3><span className="education-year">{year}</span></div><p className="education-school">{school}</p><p className="education-description">{description}</p><span className="education-result">{result}</span></article>)}</div></div></section>;
}

function Experience() {
  return <section className="section experience-section" id="experience"><div className="container"><SectionHeading label="Work Experience" title="Experience built through doing."/><div className="experience-list">{experience.map(item => <article className="experience-item" key={item.role}><div className="experience-meta"><p className="eyebrow">{item.date}</p><h3>{item.role}</h3><p className="experience-org">{item.org}</p></div><div className="experience-copy"><ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>{item.certificate && <a href={item.certificate} target="_blank" rel="noreferrer" className="text-link">View Internship Certificate ↗</a>}</div></article>)}</div></div></section>;
}

function Certifications() {
  return <section className="section certifications-section" id="certifications"><div className="container"><SectionHeading label="Certifications" title="Certifications that strengthen my programming and database skills"/><div className="certification-list">{certifications.map(([name, link]) => <article className="certification-item" key={name}><h3>{name}</h3>{link ? <a href={link} target="_blank" rel="noreferrer">View Certificate <span>↗</span></a> : <span className="link-pending">Link to be added</span>}</article>)}</div></div></section>;
}

function Achievements() {
  const items = [
    ["Certificate of Appreciation — Shree Classes", "Recognized for dedicated service, hard work, positive attitude, and contribution towards shaping and inspiring students.", "September 2026", "https://drive.google.com/file/d/1nPHyK4RIv4NjDxfGEu5EpnM-5zAW_caY/view?usp=drivesdk"],
    ["Certificate of Appreciation — Advanced Academy", "Recognized for dedicated service and valuable contribution towards the growth of the academy.", "March 2024", "https://drive.google.com/file/d/1M0egK3FzQAVqDXm9ZkMvP9pJrNhe148u/view?usp=drivesdk"],
  ];
  return <section className="section achievements-section" id="achievements"><div className="container"><SectionHeading label="Achievements" title="Appreciation along the way."/><div className="achievement-list">{items.map(([title, description, date, certificate]) => <article className="achievement-item" key={title}><div className="achievement-card-heading"><span className="achievement-star" aria-hidden="true">✳</span><span className="achievement-date">{date}</span></div><div className="achievement-copy"><h3>{title}</h3><p>{description}</p></div><a href={certificate} target="_blank" rel="noreferrer" className="achievement-certificate-button">View Certificate <span aria-hidden="true">↗</span></a></article>)}</div></div></section>;
}

function Contact() {
  function prepareEmail(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(form.get("subject"));
    const body = encodeURIComponent(`From: ${form.get("name")} (${form.get("email")})\n\n${form.get("message")}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
  return <section className="section contact-section" id="contact"><div className="container contact-wrap"><div className="contact-copy"><SectionHeading label="Contact" title="Let's connect and build something meaningful together" intro="I am open to internships, full-time opportunities, collaborations, and freelance projects where I can contribute my skills, solve real-world problems, and continue to grow as a Full Stack Developer with AI Skills."/><a className="button button-dark" href={`mailto:${email}`}>Get In Touch <span aria-hidden="true">↗</span></a><div className="contact-actions"><a className="button button-outline hero-resume" href={resume} download="Pragati-Parise-Resume.pdf"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a.75.75 0 0 1 .75.75v8.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V4.25A.75.75 0 0 1 12 3.5zM5 15.5a.75.75 0 0 1 .75.75v1.25c0 .14.11.25.25.25h12c.14 0 .25-.11.25-.25v-1.25a.75.75 0 0 1 1.5 0v1.25A1.75 1.75 0 0 1 18 19.25H6a1.75 1.75 0 0 1-1.75-1.75v-1.25A.75.75 0 0 1 5 15.5z"/></svg>Resume</a><SocialLinks compact/></div></div><form className="contact-form" onSubmit={prepareEmail}><p className="eyebrow">Get In Touch</p><label>Your Name<input name="name" autoComplete="name" required/></label><label>Your Email<input type="email" name="email" autoComplete="email" required/></label><label>Subject<input name="subject" required/></label><label>Message<textarea name="message" rows="4" required/></label><button className="button button-dark" type="submit">Prepare Email <span aria-hidden="true">↗</span></button><p className="form-note">Your email app will open with this message ready to send.</p></form></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-main"><div><a className="brand" href="#home">Pragati Parise<span>.</span></a><p>Full Stack Developer with AI Skills</p></div><SocialLinks compact/><a className="back-top" href="#home">Back to Top ↑</a></div><div className="container footer-bottom"><span>Designed & developed by Pragati Parise</span><span>© 2027 Pragati Parise. All rights reserved.</span></div></footer>;
}

export default function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".section-heading, .about-block, .skill-row, .project-card, .education-item, .experience-item, .certification-item, .achievement-item, .contact-form");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      revealItems.forEach(item => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });

    revealItems.forEach(item => {
      item.classList.add("reveal-on-scroll");
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return <><Navbar/><main><Hero/><About/><Skills/><Projects/><Education/><Experience/><Certifications/><Achievements/><Contact/></main><Footer/></>;
}

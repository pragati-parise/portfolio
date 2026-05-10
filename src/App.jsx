import { useEffect } from "react";

const navLinks = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["experience", "Experience"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
];

const skills = [
  { name: "HTML", image: "/html_logo.png", className: "tech-logo-orb" },
  { name: "CSS", image: "/css_logo.png", className: "tech-logo-orb" },
  { name: "JavaScript", image: "/javascript_logo.png", className: "javascript-orb" },
  { name: "React.js", image: "/react_logo.png", className: "tech-logo-orb" },
  { name: "Python", image: "/python_logo.png", className: "tech-logo-orb" },
  { name: "Flask", image: "/flask_logo.png", className: "tech-logo-orb" },
  { name: "SQL", image: "/sql_logo.png", className: "sql-orb" },
  { name: "MongoDB", image: "/mongodb_logo.png", className: "mongodb-orb" },
  { name: "Git", image: "/git_logo.png", className: "tech-logo-orb" },
  { name: "GitHub", image: "/github_logo1.png", className: "tech-logo-orb" },
  { name: "DSA", image: "/dsa_logo.png", className: "dsa-image-orb" },
  { name: "AWS", image: "/aws_logo.png", className: "aws-orb" },
  { name: "DevOps", image: "/devops_logo.png", className: "devops-orb" },
  { name: "Software Testing", image: "/software_testing_logo.png", className: "software-testing-orb" },
];

const projects = [
  {
    category: "E-Commerce",
    index: "01",
    title: "Samay Sutra Watch Store",
    description:
      "A full-stack Indian watch e-commerce website with user registration, login, product search, brand and category filters, price sorting, cart management, checkout, and order history",
    github: "https://github.com/pragati-parise/watch-store",
    live: "https://watch-store-1-h47t.onrender.com",
  },
  {
    category: "Management App",
    index: "02",
    title: "ProjectFlow",
    description:
      "A project management tool where users can create projects, manage tasks, assign teammates, set deadlines, add comments, search projects, and track progress through a drag-and-drop board",
    github: "https://github.com/pragati-parise/project-management",
    live: "https://project-management-j5vg.onrender.com",
  },
  {
    category: "Productivity",
    index: "03",
    title: "Habit Tracker",
    description:
      "A full-stack habit tracker that lets users add habits, mark daily completion, track completed dates, view streak counts, and manage habits through a simple productivity-focused interface",
    github: "https://github.com/pragati-parise/habit-tracker",
    live: "https://habit-tracker-i8cp.onrender.com",
  },
  {
    category: "Portfolio",
    index: "04",
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website built to showcase my skills, projects, internship experience, certificates, and contact details with a clean React-based interface",
    github: "https://github.com/pragati-parise/portfolio",
    live: "https://pragatiiparise.netlify.app/",
  },
];

const certificates = [
  {
    title: "Python Certificate",
    text: "Python programming concepts and practical problem-solving skills",
    link: "https://drive.google.com/file/d/1tpAtjVKWr15Ao3bDzHh-JL4vm8kSX3D8/view?usp=drivesdk",
  },
  {
    title: "SQL Certificate",
    text: "Database querying, structured data handling, and SQL concepts",
    link: "https://drive.google.com/file/d/1IMJ-aAjvIh7X2yk4y_nxjSFtQFWFilAY/view?usp=drivesdk",
  },
  {
    title: "JavaScript Certificate",
    text: "Interactive frontend development and dynamic web application skills",
    link: "https://drive.google.com/file/d/1IkQB2FRCRDtZ6a-xyRZLINusurXvGWqC/view?usp=drivesdk",
  },
];

const githubPath =
  "M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.6-1.3-1.4-1.7-1.4-1.7-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 1 .9 1.4 2.4 1 3 .8.1-.7.4-1 .7-1.3-2.7-.3-5.6-1.3-5.6-6A4.8 4.8 0 0 1 5.8 8c-.1-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2a4.8 4.8 0 0 1 1.3 3.4c0 4.8-2.9 5.7-5.6 6 .4.3.8 1 .8 2v3c0 .4.2.7.8.6A12 12 0 0 0 12 .7z";
const linkedinPath =
  "M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5zM3 9h4v12H3zm7 0h3.8v1.7h.1c.5-.9 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V21h-4z";
const instagramPath =
  "M7 2.5h10A4.5 4.5 0 0 1 21.5 7v10a4.5 4.5 0 0 1-4.5 4.5H7A4.5 4.5 0 0 1 2.5 17V7A4.5 4.5 0 0 1 7 2.5zm0 1.5A3 3 0 0 0 4 7v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm10.75 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5z";
const mailPath =
  "M3 5.5h18a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 21 18.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5zm0 1.5v.2l9 6.3 9-6.3V7H3zm18 10V9l-8.6 6a.75.75 0 0 1-.8 0L3 9v8h18z";
const downloadPath =
  "M12 3.5a.75.75 0 0 1 .75.75v8.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V4.25A.75.75 0 0 1 12 3.5zm-7 12a.75.75 0 0 1 .75.75v1.25c0 .14.11.25.25.25h12c.14 0 .25-.11.25-.25v-1.25a.75.75 0 0 1 1.5 0v1.25A1.75 1.75 0 0 1 18 19.25H6A1.75 1.75 0 0 1 4.25 17.5v-1.25A.75.75 0 0 1 5 15.5z";
const resumeFilePath = "/Pragati-Parise-Resume.pdf";

function IconButton({ href, label, path }) {
  const external = href.startsWith("http");
  return (
    <a
      className="button secondary icon-button"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" role="img">
        <path d={path} />
      </svg>
    </a>
  );
}

function ContactIcon({ href, label, path }) {
  const external = href.startsWith("http");
  return (
    <a
      className="icon-button"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
    >
      <span className="contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <path d={path} />
        </svg>
      </span>
    </a>
  );
}

function ProjectGithubLink({ href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <span className="project-link-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <path d={githubPath} />
        </svg>
      </span>
      <span>GitHub</span>
    </a>
  );
}

function ResumeDownloadLink({ className = "button secondary resume-button", children }) {
  return (
    <a className={className} href={resumeFilePath} download="Pragati-Parise-Resume.pdf">
      <span className="resume-link-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <path d={downloadPath} />
        </svg>
      </span>
      {children}
    </a>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="page-noise"></div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            Pragati Parise
          </a>
          <nav className="site-nav">
            {navLinks.map(([href, label]) => (
              <a key={href} href={`#${href}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="kicker">Hello, my name is</p>
              <h1>Pragati Parise</h1>
              <p className="hero-role">I am a Full Stack Developer</p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View Projects
                </a>
                <ResumeDownloadLink>Resume</ResumeDownloadLink>
                <IconButton href="https://github.com/pragati-parise" label="GitHub" path={githubPath} />
                <IconButton href="https://www.linkedin.com/in/pragati-parise-36298a267" label="LinkedIn" path={linkedinPath} />
                <IconButton href="https://www.instagram.com/pragati_parise_" label="Instagram" path={instagramPath} />
                <IconButton href="mailto:parise.pragati1909@gmail.com" label="Gmail" path={mailPath} />
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="photo-shell">
                <div className="photo-ring"></div>
                <img
                  src="/formal_photo.jpeg"
                  alt="Portrait of Pragati Parise"
                  className="profile-photo"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-header reveal">
              <p className="section-label">About Me</p>
              <h2>Developer focused on building real projects with clear impact</h2>
            </div>
            <div className="about-layout">
              <article className="panel reveal">
                <h3>Profile</h3>
                <p>
                  I am a Full Stack Developer with a B. Sc. degree in Computer Science.
                  My interests include frontend interfaces, backend logic, database
                  design, and creating web experiences that are simple to use and
                  visually polished
                </p>
              </article>
              <article className="panel reveal">
                <h3>What I Work With</h3>
                <p>
                  I build projects with HTML, CSS, JavaScript, React.js, Python,
                  Flask, SQL, Git, and GitHub. I also have a foundational understanding
                  of Data Structures and Algorithms and actively work on improving my
                  problem-solving skills
                </p>
              </article>
              <article className="panel reveal">
                <h3>What I Want Next</h3>
                <p>
                  I am looking for opportunities where I can contribute to real
                  products, keep improving as a developer, and collaborate on work
                  that blends functionality, code quality, and user experience
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-header centered reveal">
              <p className="section-label">Explore My</p>
              <h2>Skills</h2>
            </div>
            <div className="skills-icon-grid reveal">
              {skills.map((skill) => (
                <article className="skill-orb" key={skill.name}>
                  <div
                    className={`skill-orb-circle${skill.className ? ` ${skill.className}` : ""}`}
                  >
                    {skill.image ? (
                      <img src={skill.image} alt={`${skill.name} logo`} />
                    ) : (
                      <span>{skill.text}</span>
                    )}
                  </div>
                  <p>{skill.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-header reveal">
              <p className="section-label">Projects</p>
              <h2>Featured work built with modern frontend and backend tools</h2>
            </div>
            <div className="projects-layout">
              {projects.map((project) => (
                <article className="project-card reveal" key={project.title}>
                  <div className="project-topline">
                    <span className="project-category">{project.category}</span>
                    <span className="project-index">{project.index}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-actions">
                    <ProjectGithubLink href={project.github} />
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container">
            <div className="section-header reveal">
              <p className="section-label">Education</p>
              <h2>Academic background that supports my software foundation</h2>
            </div>
            <div className="timeline reveal">
              <article className="timeline-card">
                <div className="timeline-content">
                  <h3>B. Sc. (Computer Science)</h3>
                  <p>
                    Completed graduation in Computer Science, building a strong
                    foundation in programming, databases, software concepts, and
                    problem solving
                  </p>
                  <p className="timeline-label cgpa-line">CGPA - 9.13</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <div className="section-header reveal">
              <p className="section-label">Experience</p>
              <h2>Internship experience that strengthened my practical development skills</h2>
            </div>
            <div className="timeline reveal">
              <article className="timeline-card">
                <div className="timeline-content">
                  <p className="timeline-label">March 2026 - April 2026</p>
                  <h3>Web Development Intern - CodSoft</h3>
                  <p>
                    Completed a Web Development internship at CodSoft, where I
                    worked on full stack projects and strengthened my practical
                    understanding of frontend development, backend integration,
                    project execution, professional communication, and real-world
                    problem solving through hands-on work
                  </p>
                  <a
                    className="experience-link"
                    href="https://drive.google.com/file/d/1o3qp1MXuOmlqWstZqMhMZL5p4Sp4BBuf/view?usp=drivesdk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Internship Certificate
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section certificates-section" id="certificates">
          <div className="container">
            <div className="section-header reveal">
              <p className="section-label">Certificates</p>
              <h2>Certifications that strengthen my programming and database skills</h2>
            </div>
            <div className="certificate-layout">
              {certificates.map((certificate) => (
                <article className="certificate-card reveal" key={certificate.title}>
                  <p className="certificate-type">Certification</p>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.text}</p>
                  <a href={certificate.link} target="_blank" rel="noreferrer">
                    View Certificate
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-header reveal">
              <p className="section-label">Contact</p>
              <h2>Let's connect and build something meaningful together</h2>
            </div>
            <div className="contact-layout">
              <article className="panel reveal contact-panel">
                <h3>Get In Touch</h3>
                <p>
                  I am open to internships, collaborations, freelance work, and
                  job opportunities where I can contribute and grow
                </p>
                <div className="contact-links">
                  <ResumeDownloadLink className="contact-resume-link">
                    Resume
                  </ResumeDownloadLink>
                  <ContactIcon href="mailto:parise.pragati1909@gmail.com" label="Gmail" path={mailPath} />
                  <ContactIcon href="https://github.com/pragati-parise" label="GitHub" path={githubPath} />
                  <ContactIcon href="https://www.linkedin.com/in/pragati-parise-36298a267" label="LinkedIn" path={linkedinPath} />
                  <ContactIcon href="https://www.instagram.com/pragati_parise_" label="Instagram" path={instagramPath} />
                </div>
              </article>

              <form className="panel contact-form reveal" action="#" method="post">
                <h3>Send Message</h3>
                <div className="form-grid">
                  <label className="form-field">
                    <span>Your Name</span>
                    <input type="text" name="name" placeholder="Enter your name" required />
                  </label>
                  <label className="form-field">
                    <span>Your Email</span>
                    <input type="email" name="email" placeholder="Enter your email" required />
                  </label>
                </div>
                <label className="form-field">
                  <span>Subject</span>
                  <input type="text" name="subject" placeholder="Enter subject" required />
                </label>
                <label className="form-field">
                  <span>Message</span>
                  <textarea name="message" rows="6" placeholder="Write your message" required></textarea>
                </label>
                <button className="button primary form-button" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>Designed and developed by Pragati Parise</p>
          <a href="#home">Back to Top ↑</a>
        </div>
      </footer>
    </>
  );
}

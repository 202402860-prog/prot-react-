'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const skills = ["HTML", "CSS", "Bootstrap", "JavaScript", "TypeScript", "Python", "C++", "OOP", "DSA", "React", "Next.js", "Tailwind CSS", "Django", "MySQL", "Git", "GitHub", "VS Code", "Figma", "Leaflet"];
  const strengths = ["Problem Solving", "Programming Fundamentals", "OOP", "DSA", "Web Development", "Database Fundamentals", "Teamwork", "Continuous Learning", "UI/UX Design Fundamentals"];

  return (
    <div className={styles.portfolio}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Rana Ali</div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.badge}>Welcome to my Portfolio</span>
          <h1>Rana Ali Mohammed Mahmoud Ali</h1>
          <h2>Computer Science Student | Aspiring Software Developer | Full-Stack Developer</h2>
          <p>📍 Alexandria, Egypt</p>
          <div className={styles.heroBtns}>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>Contact Me</a>
            <a href="#projects" className={`${styles.btn} ${styles.btnOutline}`}>View Projects</a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/images/profile.jpg" alt="Rana Ali" width={280} height={280} priority />
        </div>
      </header>

      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.card}>
          <p>Hi, I am Rana Ali, a Computer Science student at Pharos University in Alexandria with a passion for software development and web technologies.</p>
          <p>I enjoy building practical projects, solving problems through code, and continuously improving my programming and development skills. I am currently focusing on Full-Stack Development and working toward becoming a professional Software Developer.</p>
          <p>I am always interested in learning new technologies, building useful projects, and turning ideas into practical digital experiences.</p>
        </div>
      </section>

      <section id="education" className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.card}>
          <h3>Pharos University in Alexandria</h3>
          <p className={styles.subtitle}>Bachelor of Computer Science</p>
          <p className={styles.highlight}>Expected Graduation: 2028</p>
        </div>
      </section>

      <section id="skills" className={styles.section}>
        <h2 className={styles.sectionTitle}>Technical Skills & Strengths</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.card}>
            <h3>Technical Skills</h3>
            <div className={styles.tags}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.tag}>{skill}</span>
              ))}
            </div>
          </div>
          <div className={styles.card}>
            <h3>Core Strengths</h3>
            <div className={styles.tags}>
              {strengths.map((strength, index) => (
                <span key={index} className={`${styles.tag} ${styles.tagAccent}`}>{strength}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <div>
              <h3>Stayly — Accommodation Booking Platform</h3>
              <span className={styles.projectTagline}>"Where stays feel like home."</span>
            </div>
            <p className={styles.techStack}>React | Tailwind CSS | Leaflet | JavaScript</p>
            <p>An Airbnb-style accommodation platform designed to provide users with an easy way to search for and explore available stays.</p>
            <ul>
              <li>Built Search Results interface and reusable Hotel Card components.</li>
              <li>Implemented search, filtering, and image sliders.</li>
              <li>Integrated interactive Leaflet map connected with markers and favorites system.</li>
            </ul>
          </div>

          <div className={styles.projectCard}>
            <div>
              <h3>Car Showroom Management System</h3>
            </div>
            <p className={styles.techStack}>Python | Django | MySQL</p>
            <p>A web-based management system designed to organize and manage the operations of a car showroom.</p>
            <ul>
              <li>Customer, Car, and Sales management modules.</li>
              <li>Document and Installment tracking.</li>
              <li>System-wide search functionality and automated data backup.</li>
            </ul>
          </div>

          <div className={styles.projectCard}>
            <div>
              <h3>ScoreQuest <span className={styles.teamBadge}>Team Project</span></h3>
            </div>
            <p className={styles.techStack}>Web Technologies</p>
            <p>Collaborative sports platform project.</p>
            <ul>
              <li>Contributed to the News module.</li>
              <li>Developed Live Updates and Analytical features.</li>
            </ul>
          </div>

          <div className={styles.projectCard}>
            <div>
              <h3>C++ To-Do & Calculator</h3>
            </div>
            <p className={styles.techStack}>C++</p>
            <p>Programming project focused on implementing practical desktop applications applying programming logic, Data Structures, and OOP concepts.</p>
          </div>

          <div className={styles.projectCard}>
            <div>
              <h3>Restaurant UI Design</h3>
            </div>
            <p className={styles.techStack}>Figma</p>
            <p>A comprehensive restaurant interface design consisting of 10 custom screens, focusing on creating a clear and user-friendly visual experience.</p>
          </div>
        </div>
      </section>

      <section id="goal" className={styles.section}>
        <h2 className={styles.sectionTitle}>Career Goal</h2>
        <div className={`${styles.card} ${styles.highlightCard}`}>
          <p>My goal is to grow as a Software Developer with a strong focus on Full-Stack Development, while continuing to build real-world projects and improve my technical and problem-solving skills.</p>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact & Links</h2>
        <div className={styles.contactGrid}>
          <div className={`${styles.card} ${styles.contactItem}`}>
            <div>
              <h4>📞 Phone</h4>
              <p>01205279944 / 01034150908</p>
            </div>
          </div>
          <a href="https://github.com/202402860-prog" target="_blank" rel="noreferrer" className={`${styles.card} ${styles.contactItem} ${styles.linkCard}`}>
            <div>
              <h4>💻 GitHub</h4>
              <p>github.com/202402860-prog ↗</p>
            </div>
          </a>
          <a href="https://linkedin.com/in/rana-ali-elrafey" target="_blank" rel="noreferrer" className={`${styles.card} ${styles.contactItem} ${styles.linkCard}`}>
            <div>
              <h4>🔗 LinkedIn</h4>
              <p>linkedin.com/in/rana-ali-elrafey ↗</p>
            </div>
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Rana Ali Mohammed Mahmoud Ali. All rights reserved.</p>
      </footer>
    </div>
  );
}
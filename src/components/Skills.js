import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Product Interfaces',
    description: 'Responsive, accessible interfaces for data-rich products and interactive tools.',
    skills: ['TypeScript', 'JavaScript ES6+', 'React', 'Vite', 'React Router', 'Responsive UI'],
  },
  {
    title: 'APIs & Services',
    description: 'Secure provider integrations, validation, caching, routing, and friendly failure states.',
    skills: ['Node.js', 'Express', 'REST APIs', 'CORS', 'Environment Variables', 'Server-side TypeScript'],
  },
  {
    title: 'Data & Persistence',
    description: 'Practical modeling and storage for inventories, user preferences, and production workflows.',
    skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'CRUD Workflows', 'CSV Imports', 'Data Modeling'],
  },
  {
    title: 'Testing & Quality',
    description: 'Client, API, accessibility, and end-to-end checks built into the delivery process.',
    skills: ['Vitest', 'Playwright', 'Supertest', 'React Testing Library', 'ESLint', 'Accessibility Testing'],
  },
  {
    title: 'Delivery & Cloud',
    description: 'Deployment-ready applications with CI checks and managed media and storage services.',
    skills: ['Vercel', 'GitHub Actions', 'Cloudinary', 'API Configuration', 'Build Pipelines', 'Git/GitHub'],
  },
  {
    title: 'Engineering Foundations',
    description: 'Core programming, algorithms, modular architecture, and maintainable application structure.',
    skills: ['Data Structures', 'Linked Lists', 'Hash Maps', 'Algorithms', 'Modular JavaScript', 'Unit Testing'],
  },
];

const certifications = [
  {
    title: 'JavaScript (Basic)',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/0f41040d3d05',
    logo: '/hackerrankLogo.png',
  },
  {
    title: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/fef3f522842a',
    logo: '/hackerrankLogo.png',
  },
  {
    title: 'CSS (Basic)',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/897fa0c1e80c',
    logo: '/hackerrankLogo.png',
  },
  {
    title: 'Node (Basic)',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/907b57933fa5',
    logo: '/hackerrankLogo.png',
  },
  {
    title: 'Connecting to a MongoDB Database',
    issuer: 'MongoDB University',
    url: 'https://learn.mongodb.com/c/7QVuPqjrRmuzsnjivBkrjg',
    logo: '/mongoLogo.png',
  },
  {
    title: 'Getting Started with MongoDB Atlas',
    issuer: 'MongoDB University',
    url: 'https://learn.mongodb.com/c/2evdjaAhSruH00LD2R8kIw',
    logo: '/mongoLogo.png',
  },
  {
    title: 'Introduction to MongoDB',
    issuer: 'MongoDB University',
    url: 'https://learn.mongodb.com/c/xZCLzSsHTKa46w00rVpHXg',
    logo: '/mongoLogo.png',
  },
  {
    title: 'MongoDB Aggregation',
    issuer: 'MongoDB University',
    url: 'https://learn.mongodb.com/c/PC91ci4WRCWAO9IppXiteg',
    logo: '/mongoLogo.png',
  },
  {
    title: 'MongoDB Atlas Search',
    issuer: 'MongoDB University',
    url: 'https://learn.mongodb.com/c/0JOmHIPtQnGhzLduieg0ug',
    logo: '/mongoLogo.png',
  },
  {
    title: 'MongoDB CRUD Operations',
    issuer: 'MongoDB University',
    url: 'https://learn.mongodb.com/c/3IvkiSJ4RnaMtbhJrx7MXw',
    logo: '/mongoLogo.png',
  },
  {
    title: 'MongoDB Data Modeling Intro',
    issuer: 'MongoDB University',
    url: 'https://learn.mongodb.com/c/dwHgrXY-TB-4j6CFAqQoYg',
    logo: '/mongoLogo.png',
  },
  {
    title: 'MongoDB Indexes',
    issuer: 'MongoDB University',
    url: 'https://learn.mongodb.com/c/sPK81EbxTzCPIoPcwrIfEQ',
    logo: '/mongoLogo.png',
  },
  {
    title: 'MongoDB Transactions',
    issuer: 'MongoDB University',
    url: 'https://learn.mongodb.com/c/exw2SDTET1WcAlLAZkewaw',
    logo: '/mongoLogo.png',
  },
  {
    title: 'MongoDB and the Document Model',
    issuer: 'MongoDB University',
    url: 'https://learn.mongodb.com/c/YDwZ5hibSNGMUy1ytwEG0g',
    logo: '/mongoLogo.png',
  },
];

const training = [
  'The Odin Project - Full Stack JavaScript Path',
  'freeCodeCamp Relational Database coursework and Bash/PostgreSQL exercises',
];

const Skills = () => (
  <section id="skills">
    <div className="section-heading">
      <span>Toolkit</span>
      <h2>A toolkit shaped by the work.</h2>
      <p>Technologies I use to take products from a useful idea to a tested, deployed experience.</p>
    </div>

    <div className="skills-grid" aria-label="Technical skills">
      {skillGroups.map((group) => (
        <article key={group.title} className="skill-card">
          <div>
            <h3 className="skill-title">{group.title}</h3>
            <p className="skill-description">{group.description}</p>
          </div>
          <div className="skill-tags" aria-label={`${group.title} skills`}>
            {group.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      ))}
    </div>

    <div className="credentials-layout">
      <div className="training-panel">
        <span className="credentials-eyebrow">Completed Training</span>
        <h3>Structured Learning</h3>
        <ul>
          {training.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="certifications-panel">
        <span className="credentials-eyebrow">Credentials</span>
        <h3>Certifications</h3>
        <div className="certificates-grid">
          {certifications.map((certificate) => (
            <a
              key={`${certificate.issuer}-${certificate.title}`}
              href={certificate.url}
              className="certificate-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={certificate.logo} alt={`${certificate.issuer} logo`} />
              <span>
                <strong>{certificate.title}</strong>
                <small>{certificate.issuer}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;

import React from 'react';
import './Portfolio.css';

const projects = [
  {
    name: 'NASA Mission Control', label: 'Flagship project', visual: 'nasa',
    description: 'A responsive command-center experience for exploring live NASA imagery, asteroid encounters, space weather, Earth observation, and source-checked mission history.',
    highlights: ['Multiple NASA data services', 'Flight Log persistence', 'Accessible, tested interactions'],
    stack: ['React', 'TypeScript', 'Express', 'TanStack Query', 'Playwright'],
    live: 'https://nasa-mission-control-alpha.vercel.app', repo: 'https://github.com/jamesdoom/nasa-mission-control',
  },
  {
    name: 'Music Power', label: 'Interactive music tool', visual: 'music',
    description: 'A focused guitar companion for exploring scales and song keys through a fast, approachable browser interface.',
    highlights: ['Music-theory utility', 'Responsive interaction', 'Production deployment'],
    stack: ['React', 'TypeScript', 'Vercel'],
    live: 'https://music-power.vercel.app', repo: 'https://github.com/jamesdoom/music-power',
  },
  {
    name: 'API Playground Dashboard', label: 'Full-stack dashboard', visual: 'dashboard',
    description: 'One consistent dashboard for weather, crypto, stocks, and news—backed by shared TypeScript services and server-side credential protection.',
    highlights: ['Four provider integrations', 'Caching and normalized errors', 'Desktop-to-mobile E2E tests'],
    stack: ['React', 'TypeScript', 'Vite', 'Vercel Functions', 'Vitest'],
    live: 'https://api-playground-dashboard-sigma.vercel.app', repo: 'https://github.com/jamesdoom/api-playground-dashboard',
  },
  {
    name: 'Image Editor', label: 'Production workflow', visual: 'image',
    description: 'A print-ready decal sheet tool for uploading artwork, arranging designs on canvas, exporting production files, and submitting customer orders for review.',
    highlights: ['Interactive Konva canvas', 'PDF and PNG export', 'Postgres and R2 submission storage'],
    stack: ['React', 'TypeScript', 'Express', 'Konva', 'PostgreSQL'],
    live: 'https://img-prev.vercel.app', repo: 'https://github.com/jamesdoom/imgPrev',
  },
];

const building = [
  { name: 'News Bias', description: 'Comparing how multiple outlets frame the same event, then extracting shared facts into a neutral AI-assisted summary.', repo: 'https://github.com/jamesdoom/news-bias' },
  { name: 'Algorithm Arena', description: 'A practice environment designed to make algorithm drills more visual, repeatable, and engaging.', repo: 'https://github.com/jamesdoom/algorithm-arena' },
];

const moreWork = [
  { name: 'MemorabiliaDB', description: 'Sports-card inventory, valuation, image, grading-candidate, and listing workflows backed by PostgreSQL and Prisma.', repo: 'https://github.com/jamesdoom/memorabiliaDB' },
  { name: 'Big Wheel', description: 'A weighted picker with normal, elimination, and accumulation modes plus locally saved preferences.', repo: 'https://github.com/jamesdoom/wheel', live: 'https://wheel-gold-seven.vercel.app' },
];

// The preview is private to this module and only receives values from the curated project data above.
// eslint-disable-next-line react/prop-types
const ProjectVisual = ({ type, name }) => (
  <div className={`project-visual project-visual-${type}`} aria-label={`${name} interface preview`} role="img">
    <div className="visual-toolbar"><span /><span /><span /></div>
    {type === 'nasa' && <div className="nasa-preview"><div className="orbit"><span className="planet" /></div><div className="telemetry"><small>LIVE TELEMETRY</small><strong>MISSION CONTROL</strong><span>APOD · NEO · DONKI · EPIC</span></div></div>}
    {type === 'music' && <div className="music-preview"><div className="music-copy"><small>KEY EXPLORER</small><strong>E Major</strong><span>F♯m · G♯m · A · B · C♯m</span></div><div className="fretboard">{Array.from({ length: 18 }, (_, index) => <i key={index} className={index % 5 === 0 ? 'active' : ''} />)}</div></div>}
    {type === 'dashboard' && <div className="dashboard-preview"><div className="metric metric-weather"><small>CHICAGO</small><strong>72°</strong><span>Clear skies</span></div><div className="metric"><small>BITCOIN</small><strong>$64.2K</strong><span className="positive">+2.8%</span></div><div className="chart">{Array.from({ length: 7 }, (_, index) => <i key={index} />)}</div></div>}
    {type === 'image' && <div className="image-preview"><div className="toolrail"><i /><i /><i /><i /></div><div className="canvas-preview"><span className="decal decal-one">BP</span><span className="decal decal-two">PRINT</span></div><div className="layers"><small>LAYERS</small><span>Artwork 02</span><span>Artwork 01</span></div></div>}
  </div>
);

const Portfolio = () => (
  <section id="portfolio">
    <div className="section-heading section-heading-left">
      <span>Selected work</span>
      <h2>Products built to be used.</h2>
      <p>Recent full-stack projects that combine thoughtful interfaces, dependable data, and real-world workflows.</p>
    </div>
    <div className="featured-projects">
      {projects.map((project, index) => (
        <article key={project.name} className="featured-project">
          <ProjectVisual type={project.visual} name={project.name} />
          <div className="featured-project-copy">
            <p className="project-label"><span>{String(index + 1).padStart(2, '0')}</span>{project.label}</p>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            <div className="project-stack" aria-label={`${project.name} technology`}>{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <div className="project-actions">
              <a className="button button-primary" href={project.live} target="_blank" rel="noopener noreferrer">Open live app <span aria-hidden="true">↗</span></a>
              <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">View source <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </article>
      ))}
    </div>
    <div className="building-section">
      <div className="building-intro"><p className="project-label"><span className="status-dot" />Now building</p><h3>Ideas in active development</h3><p>Early-stage explorations where the product direction is taking shape.</p></div>
      <div className="building-list">
        {building.map((project) => <a key={project.name} href={project.repo} target="_blank" rel="noopener noreferrer" className="building-card"><span className="building-arrow" aria-hidden="true">↗</span><h4>{project.name}</h4><p>{project.description}</p></a>)}
      </div>
    </div>
    <div className="more-work-section">
      <div className="more-work-heading"><p className="project-label">More shipped work</p><h3>Additional full-stack and interactive projects</h3></div>
      <div className="more-work-list">
        {moreWork.map((project) => <article key={project.name} className="more-work-card"><div><h4>{project.name}</h4><p>{project.description}</p></div><div>{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live app ↗</a>}<a href={project.repo} target="_blank" rel="noopener noreferrer">Source →</a></div></article>)}
      </div>
    </div>
  </section>
);

export default Portfolio;

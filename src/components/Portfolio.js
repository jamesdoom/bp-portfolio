import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';

const featuredProjectNames = [
  'api-playground-dashboard',
  'memorabiliaDB',
  'wheel',
  'imgPrev',
  'bp-portfolio',
  'bp-shopping-cart',
  'bp-battleship-app',
];

const projectDisplayTitles = {
  'api-playground-dashboard': 'API Playground Dashboard',
  memorabiliaDB: 'MemorabiliaDB',
  imgPrev: 'Image Editor',
};

const projectHighlights = {
  'api-playground-dashboard': 'Interactive dashboard work with a modern TypeScript stack and API-driven UI patterns.',
  memorabiliaDB: 'Inventory-style application work focused on collection data, filtering, and practical workflows.',
  wheel: 'A polished selector tool that turns a simple utility into an interactive browser experience.',
  imgPrev: 'Image editing and preview tooling focused on a clean, practical browser workflow.',
  'bp-portfolio': 'The portfolio you are viewing now, built with React and continuously refined.',
  'bp-shopping-cart': 'React shopping-cart project with product browsing and stateful cart behavior.',
  'bp-battleship-app': 'Browser game project practicing modular JavaScript, game state, and interaction logic.',
};

const toTitleCase = (title) =>
  title.replace(/\b\w/g, (letter) => letter.toUpperCase());

const formatProjectTitle = (projectName) => {
  if (projectDisplayTitles[projectName]) {
    return projectDisplayTitles[projectName];
  }

  return toTitleCase(
    projectName
      .replace(/^bp[-_]+/i, '')
      .replaceAll('-', ' ')
      .replaceAll('_', ' ')
  );
};

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const username = process.env.REACT_APP_GITHUB_USERNAME || 'jamesdoom';

    axios
      .get(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      })
      .then((response) => {
        const publicProjects = response.data.filter((project) => !project.fork);
        const curatedProjects = featuredProjectNames
          .map((projectName) => publicProjects.find((project) => project.name === projectName))
          .filter(Boolean);

        setProjects(curatedProjects);
        setStatus('ready');
      })
      .catch((error) => {
        console.error('Error fetching repositories:', error);
        setStatus('error');
      });
  }, []);

  const formatUpdatedDate = (date) =>
    new Intl.DateTimeFormat('en', {
      month: 'short',
      year: 'numeric',
    }).format(new Date(date));

  return (
    <section id="portfolio">
      <div className="section-heading">
        <span>Selected Work</span>
        <h2>Featured Projects</h2>
        <p>A focused set of public repositories that best represents my current full-stack direction.</p>
      </div>
      {status === 'loading' && <p className="portfolio-status">Loading public GitHub repositories...</p>}
      {status === 'error' && (
        <p className="portfolio-status portfolio-status-error">
          GitHub repositories could not be loaded right now. You can still view them on GitHub.
        </p>
      )}
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <div className="project-content">
              <h3 className="project-title">{formatProjectTitle(project.name)}</h3>
              <p className="project-description">
                {projectHighlights[project.name] || project.description || 'A selected public repository from my development portfolio.'}
              </p>
            </div>
            <div className="project-meta">
              {project.language && <span>{project.language}</span>}
              <span>Updated {formatUpdatedDate(project.updated_at)}</span>
              {project.stargazers_count > 0 && <span>{project.stargazers_count} stars</span>}
            </div>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
              View Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

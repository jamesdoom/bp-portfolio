import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';

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
        const publicProjects = response.data
          .filter((project) => !project.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setProjects(publicProjects);
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
      <h2>Portfolio</h2>
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
              <h3 className="project-title">{project.name.replaceAll('-', ' ')}</h3>
              <p className="project-description">
                {project.description || 'A public GitHub repository from my development portfolio.'}
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

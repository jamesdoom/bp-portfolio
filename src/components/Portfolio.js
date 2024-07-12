import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const username = process.env.REACT_APP_GITHUB_USERNAME; 
    const accessToken = process.env.REACT_APP_GITHUB_TOKEN;

    axios
      .get(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching repositories:', error);
      });
  }, []);

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h3 className="project-title">{project.name}</h3>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { 
      title: 'JavaScript', 
      description: 'Experienced in ES6+, Node.js, and frameworks like React and Angular.', 
      certificates: [
        { 
          title: 'JavaScript(Basic)', 
          url: 'https://www.hackerrank.com/certificates/0f41040d3d05',
          logo: '/hackerrankLogo.png' 
        },
        { 
          title: 'JavaScript(Intermediate)', 
          url: 'https://www.hackerrank.com/certificates/fef3f522842a',
          logo: '/hackerrankLogo.png' 
        }
      ]
    },
    { 
      title: 'HTML & CSS', 
      description: 'Proficient in modern HTML5 and CSS3, including Flexbox and Grid.',
      certificates: [ 
        { 
          title: 'CSS(Basic)', 
          url: 'https://www.hackerrank.com/certificates/897fa0c1e80c',
          logo: '/hackerrankLogo.png' 
        }
      ]
    },
    { 
      title: 'Backend Development', 
      description: 'Skilled in server-side technologies like Node.js, Express, and MongoDB.',
      certificates: [
        { 
          title: 'Node(Basic)', 
          url: 'https://www.hackerrank.com/certificates/907b57933fa5',
          logo: '/hackerrankLogo.png' 
        },
        { 
          title: 'Connecting to a MongoDB Database', 
          url: 'https://learn.mongodb.com/c/7QVuPqjrRmuzsnjivBkrjg',
          logo: '/mongoLogo.png' 
        },
        { 
          title: 'Getting Started with MongoDB Atlas', 
          url: 'https://learn.mongodb.com/c/2evdjaAhSruH00LD2R8kIw',
          logo: '/mongoLogo.png' 
        },
        { 
          title: 'Introduction to MongoDB', 
          url: 'https://learn.mongodb.com/c/xZCLzSsHTKa46w00rVpHXg',
          logo: '/mongoLogo.png' 
        },
        { 
          title: 'MongoDB Aggregation', 
          url: 'https://learn.mongodb.com/c/PC91ci4WRCWAO9IppXiteg',
          logo: '/mongoLogo.png' 
        },
        { 
          title: 'MongoDB Atlas Search', 
          url: 'https://learn.mongodb.com/c/0JOmHIPtQnGhzLduieg0ug',
          logo: '/mongoLogo.png' 
        },
        { 
          title: 'MongoDB CRUD Operations', 
          url: 'https://learn.mongodb.com/c/3IvkiSJ4RnaMtbhJrx7MXw',
          logo: '/mongoLogo.png' 
        },
        { 
          title: 'MongoDB Data Modeling Intro', 
          url: 'https://learn.mongodb.com/c/dwHgrXY-TB-4j6CFAqQoYg',
          logo: '/mongoLogo.png' 
        },
        { 
          title: 'MongoDB Indexes', 
          url: 'https://learn.mongodb.com/c/sPK81EbxTzCPIoPcwrIfEQ',
          logo: '/mongoLogo.png' 
        },
        { 
          title: 'MongoDB Transactions', 
          url: 'https://learn.mongodb.com/c/exw2SDTET1WcAlLAZkewaw',
          logo: '/mongoLogo.png' 
        },
        { 
          title: 'MongoDB and the Document Model', 
          url: 'https://learn.mongodb.com/c/YDwZ5hibSNGMUy1ytwEG0g',
          logo: '/mongoLogo.png' 
        }
      ] 
    },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className={`skill ${skill.title === 'Backend Development' ? 'large' : 'small'}`}>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
            {skill.certificates && (
              <div className={`certificates-container ${skill.title === 'Backend Development' ? 'two-columns' : ''}`}>
                {skill.certificates.map((certificate, certIndex) => (
                  <a 
                    key={certIndex}
                    href={certificate.url} 
                    className="certificate-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={certificate.logo} alt={`${certificate.title} logo`} />
                    {certificate.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

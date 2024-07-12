import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      university: 'Wittenberg University',
      degreeType: 'Bachelor of Arts',
      major: 'Business Management',
      location: 'Springfield, OH',
      logo: '/wittenberg.png',
    },
    {
      university: 'Saint Leo University',
      degreeType: 'Bachelor of Science',
      major: 'Computer Information Systems',
      honors: 'Cum Laude',
      location: 'San Antonio, FL',
      logo: '/leo.png',
    },
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <img src={edu.logo} alt={`${edu.university} logo`} className="education-logo" />
            <div className="education-details">
              <h3>{edu.university}</h3>
              <p className="degree-type">{edu.degreeType}</p>
              <p>{edu.major}</p>
              {edu.honors && <p className="honors">{edu.honors}</p>}
              <p>{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

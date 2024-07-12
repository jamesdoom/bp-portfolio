import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-content">
        <img src="/brian.png" alt="Brian Palmer" className="about-image" />
        <p>Hello, I&apos;m Brian. For as long as I can remember, I&apos;ve been deeply interested and involved in computer technology. Even when my professional titles had very little to do with IT, I always ended up being &apos;that&apos; guy who could troubleshoot problems and implement new tech.</p>

        <p>To pursue a full-time career in the world of technology, I acquired my second degree - a Bachelor of Science in Computer Information Systems. I have completed The Odin Project&apos;s Full Stack JavaScript Developer path and I&apos;ll be regularly updating my project list with the public GitHub repositories I&apos;m currently working on or have finished.</p>

        <p>As an enthusiastic learner, I actively seek out opportunities to expand my skill set. I&apos;ve delved into backend development, database management, and responsive design techniques. I look forward to collaborating with others and continuing to grow professionally!</p>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <main className="content">
      <div className="about-content">
        <div className="content-text">
          <h1>Kori B. Riddick</h1>
          <h3>Front-End/Full-Stack Software Engineer | Building Thoughtful Web & Mobile Experiences with React | Mission-Driven & Design-Led</h3>
          <span className="icon">
            <a href="https://www.linkedin.com/in/kori-riddick" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/IvySwing" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="mailto:kori.b.riddick@gmail.com?Subject=I saw your website...">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}

export default About;

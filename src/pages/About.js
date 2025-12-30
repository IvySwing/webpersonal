
function About() {
  return (
    <main className="content">
      <div className="about-content">
        <div className="content-text">
          <h1>Kori B. Riddick</h1>
          <h3>Front-End/Full-Stack Software Engineer | Building Thoughtful Web & Mobile Experiences with React | Mission-Driven & Design-Led</h3>
          <span className="icon">
            <a href="https://www.linkedin.com/in/kori-riddick" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-fw" style={{fontSize: '45px'}}></i>
            </a>
            <a href="https://github.com/IvySwing" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-square fa-fw" style={{fontSize: '45px'}}></i>
            </a>
            <a href="mailto:kori.b.riddick@gmail.com?Subject=I saw your website...">
              <i className="fas fa-envelope-square fa-fw" style={{fontSize: '45px'}}></i>
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}

export default About;
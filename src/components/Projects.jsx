import React from 'react';
import '../index.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-box">
          <h3>Tesla Clone</h3>
          <p>Made a Tesla Website Clone with the help of HTML,CSS And Little Javacript.</p>
          <a href="https://github.com/nimish2004/Tesla-Clone" target="_blank" rel="noopener noreferrer">
            GitHub Link
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <h3>calculator in javascript</h3>
          <p>made a simple calculator using javascript with the help of chatgpt and myself ;)</p>
          <a href="https://github.com/nimish2004/caluclator-in-javascript " target="_blank" rel="noopener noreferrer">
            GitHub Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

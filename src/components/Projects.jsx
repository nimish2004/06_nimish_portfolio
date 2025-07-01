import React from 'react';
import '../index.css';

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-box">
          <h3>Tesla Website Clone</h3>
          <p>Recreated the Tesla landing page using HTML, CSS, and a bit of JavaScript to mimic UI layout and interactivity.</p>
          <a href="https://github.com/nimish2004/Tesla-Clone" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <h3>Admin Dashboard</h3>
          <p>Built a responsive admin dashboard for managing analytics and user data using React and Tailwind CSS.</p>
          <a href="https://github.com/nimish2004/dash" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-box">
          <h3>Spotify 2.0 Clone</h3>
          <p>Developed a full-featured music streaming web app using React, Tailwind CSS, and the Spotify Web API, including player controls and dynamic playlists.</p>
          <a href="https://github.com/nimish2004/spotify-2.0" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        {/* Project 4 */}
        <div className="project-box">
          <h3>MyTube – YouTube Clone</h3>
          <p>A React-based video platform powered by the YouTube Data API. Features search, playback, and dynamic suggestions.</p>
          <a href="https://github.com/nimish2004/mytube" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

      </div>
    </div>
  );
};

export default Projects;

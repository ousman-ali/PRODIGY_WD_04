import React, { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1: Landing Page",
      description:
        "Developed a landing page that showcases a well-crafted design with a harmonious color palette, intuitive navigation, and engaging content. The overall impression is that of a professional and polished website, reflecting the attention to detail and my commitment to creating an exceptional user experience.",
      githubLink: "https://github.com/username/project1"
    },
    {
      id: 2,
      title: "Project 2: Stop Watch",
      description:
        "Built a stop watch application using React and CSS. Implemented features like starting, pausing, and resetting the stopwatch as well as tracking and displaying lap times so that users can accurately measure and record time intervals.",
      githubLink: "https://github.com/username/project2"
    },
    {
      id: 3,
      title: "Project 3: Tic Tac Toe Game",
      description:
        "Built a Tic Tac Toe Game web application using React. Implemented functions like handling user clicks, tracking game states and check for meaning condtions. So that users can play againest each other aiming to get three markers in a row to win the game.",
      githubLink: "https://github.com/username/project2"
    },
    {
      id: 4,
      title: "Project : Personal Portfolio Website",
      description:
        "Built a Personal Portfolio Website application using React. That showcases the skills, projects and accomplishments as a web developer. It includes a home page with a captivating headline, professional photo, summery of my skills and an 'About Me' section with detail background, education and experience.",
      githubLink: "https://github.com/username/project2"
    }
  ]);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      {projects.map((project) => (
        <div key={project.id} id="project-i">
          <div id="proj">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
const Portfolio = (props) => {
  const { info } = props;

  const projects = info.portfolio.map((project, index) => (
    <li>
      <div
        key={index}
        className="individualProjects"
      >
        <h2>{project.title}</h2>
        <div>
          <p>
            <small>{project.about}</small>
          </p>
        </div>
        <div className="projectLinks">
          <a
            href={project.source}
            target="_blank"
          >
            <button>GitHub</button>
          </a>
          <a
            href={project.live}
            target="_blank"
          >
            <button>Live</button>
          </a>
        </div>
      </div>
    </li>
  ));

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="projectsContainer">
        <ul className="projects">{projects}</ul>
      </div>
    </div>
  );
};

export default Portfolio;

const Portfolio = (props) => {
  const { info } = props;

  const projects = info.portfolio.map((project, index) => (
    <div
      key={index}
      className="individualProjects"
    >
      <h2>{project.title}</h2>
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
  ));

  return (
    <div>
      <h1>Portfolio</h1>
      <ul className="projects">
        <li>{projects}</li>
      </ul>
    </div>
  );
};

export default Portfolio;

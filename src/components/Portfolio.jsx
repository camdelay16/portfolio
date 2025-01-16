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
        <div className="projectLinksContainer">
          <div className="projectLinks">
            <a
              href={project.source}
              target="_blank"
            >
              <button className="projectButtons">GitHub</button>
            </a>
            <a
              href={project.live}
              target="_blank"
            >
              <button className="projectButtons">Live</button>
            </a>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="infoContainer">
      <div className="pageTitleContainer">
        <h1 className="pageTitle">Portfolio</h1>
      </div>
      <div className="projectsContainer">
        <ul className="projects">{projects}</ul>
      </div>
    </div>
  );
};

export default Portfolio;

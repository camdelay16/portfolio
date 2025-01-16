const AboutMe = (props) => {
  const { info } = props;

  const proficientWith = info.skills.proficientWith.map((skill, index) => (
    <div
      key={index}
      className="proficientWith"
    >
      <li>{skill}</li>
    </div>
  ));

  return (
    <div className="infoContainer">
      <div className="pageTitleContainer">
        <h1 className="pageTitle">About Me</h1>
      </div>
      <div className="bioContainer">
        <p>{info.bio}</p>
      </div>
      <div className="proficientWithContainer">
        <h2>Proficient With:</h2>
        <ul className="proficientWithList">{proficientWith}</ul>
      </div>
    </div>
  );
};

export default AboutMe;

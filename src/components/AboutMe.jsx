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
    <div>
      <h1>About Me</h1>
      <p>{info.bio}</p>
      <div className="proficientWithContainer">
        <h2>Proficient With:</h2>
        <ul>{proficientWith}</ul>
      </div>
    </div>
  );
};

export default AboutMe;

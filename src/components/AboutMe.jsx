import Stars from "./Stars";
const AboutMe = (props) => {
  const { info } = props;

  const proficientWith = info.skills.proficientWith.map((skill, index) => (
    <div
      key={index}
      className="proficientWith"
    >
      <li>
        <i className={skill.icon} /> {skill.label}
      </li>
    </div>
  ));

  const exposedTo = info.skills.exposedTo.map((skill, index) => (
    <div
      key={index}
      className="exposedTo"
    >
      <li>
        <i className={skill.icon} /> {skill.label}
      </li>
    </div>
  ));

  const hobbies = info.hobbies.map((hobby, index) => (
    <div
      key={index}
      className="hobbies"
    >
      <li className="hobbyListItem">
        <span className="emoji">{hobby.emoji}</span>{" "}
        <span className="hobbyLabel">&nbsp;{hobby.label}</span>
      </li>
    </div>
  ));

  return (
    <>
      <div className="infoContainer">
        <div className="pageTitleContainer">
          <h1 className="pageTitle">About Me</h1>
        </div>
        <div className="bioContainer">
          <p>{info.bio}</p>
        </div>
        <div className="aboutMeInfoContainer">
          <div className="proficientWithContainer">
            <h2>Proficient With:</h2>
            <ul className="proficientWithList">{proficientWith}</ul>
          </div>
          <div className="exposedToContainer">
            <h2>Exposed To:</h2>
            <ul className="exposedToList">{exposedTo}</ul>
          </div>
          <div className="hobbiesContainer">
            <h2>Hobbies:</h2>
            <ul className="hobbiesList">{hobbies}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

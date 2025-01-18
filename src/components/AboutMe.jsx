import Stars from "./Stars";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const AboutMe = (props) => {
  const { info } = props;

  const proficientWith = info.skills.proficientWith.map((skill, index) => (
    <div
      key={index}
      className="proficientWith"
    >
      <li className="listItem">
        <i className={skill.icon} /> {skill.label}
      </li>
    </div>
  ));

  const exposedTo = info.skills.exposedTo.map((skill, index) => (
    <div
      key={index}
      className="exposedTo"
    >
      <li className="listItem">
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
          <div className="reveal proficientWithContainer">
            <h2 className="aboutTitle">Proficient With:</h2>
            <ul className="proficientWithList">{proficientWith}</ul>
          </div>
          <div className="reveal exposedToContainer">
            <h2 className="aboutTitle">Exposed To:</h2>
            <ul className="exposedToList">{exposedTo}</ul>
          </div>
          <div className="reveal hobbiesContainer">
            <h2 className="aboutTitle">Hobbies:</h2>
            <ul className="hobbiesList">{hobbies}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

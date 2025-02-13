import SocialIcon from "./SocialIcon";
import ProfilePic from "../assets/profilepic.svg";
import React, { useState, useEffect } from "react";
import TypedComponent from "./TypedComponent";

const Home = (props) => {
  const { info } = props;
  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  const strings = [
    "a software engineer.",
    "a web developer.",
    "a problem solver.",
    "a lifelong learner.",
  ];

  return (
    <div className={`homeInfoContainer ${fadeIn ? "fade-in" : ""}`}>
      <div className="profileImgContainer">
        <img
          src={ProfilePic}
          alt="Cameron Delay"
          className="profileImg"
        />
      </div>
      <h1>
        Welcome! I'm <span className="name-gradient">Cameron</span>
      </h1>
      <h2>
        I'm <TypedComponent strings={strings} />
      </h2>
      <div className="contactLinks">
        <SocialIcon info={info} />
      </div>
      <br />
      <div>
        <button className="projectButtons">
          <a
            href=""
            download
            className="btn"
          >
            Download My Resume
          </a>
        </button>
      </div>
      <br />
      <br />
      <div className="arrowContainer">
        <i
          className="fa-solid fa-arrow-down-long"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        ></i>
      </div>
    </div>
  );
};

export default Home;

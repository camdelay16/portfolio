import SocialIcon from "./SocialIcon";
import ProfilePic from "../assets/profilepic.svg";
import React, { useState, useEffect } from "react";

const Home = (props) => {
  const { info } = props;
  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

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
      <h2>I'm a software engineer. </h2>
      <div className="contactLinks">
        <SocialIcon info={info} />
      </div>
    </div>
  );
};

export default Home;

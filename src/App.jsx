import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import { info } from "./info/info";
import ScrollReveal from "scrollreveal";
import Stars from "./components/Stars";
import { Link, Element, animateScroll as scroll } from "react-scroll";

import "./App.css";
import "./Star.css";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
      mobile: true,
    });

    sr.reveal(
      ".reveal, .exposedTo, .proficientWith, .hobbies, .individualProjects, .bioContainer",
      {
        beforeReveal: (el) => {
          el.classList.add("is-visible");
        },
        beforeReset: (el) => {
          el.classList.remove("is-visible");
        },
      }
    );

    sr.reveal(".pageTitle", {
      distance: "20px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
      mobile: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <div className="content">
        <div
          className="reveal content"
          id="home"
        >
          <Home info={info} />
          <br />
          <br />
          <br />
          <div className="arrowContainer">
            <i
              className="fa-solid fa-arrow-down-long fa-bounce"
              style={{
                "--fa-bounce-start-scale-x": 1,
                "--fa-bounce-start-scale-y": 1,
                "--fa-bounce-jump-scale-x": 1,
                "--fa-bounce-jump-scale-y": 1,
                "--fa-bounce-land-scale-x": 1,
                "--fa-bounce-land-scale-y": 1,
                "--fa-bounce-rebound": 0,
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            ></i>
          </div>
        </div>
        <Stars />
        <br />
        <br />
        <div
          className="reveal content"
          id="aboutme"
        >
          <AboutMe info={info} />
        </div>
        <Stars />
        <div
          className="reveal content"
          id="portfolio"
        >
          <Portfolio info={info} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <Stars />
        <Footer />
      </div>
    </>
  );
}

export default App;

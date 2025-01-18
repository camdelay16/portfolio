import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import { info } from "./info/info";
import ScrollReveal from "scrollreveal";
import Stars from "./components/Stars";

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
    });

    sr.reveal(".reveal", {
      beforeReveal: (el) => {
        el.classList.add("is-visible");
      },
      beforeReset: (el) => {
        el.classList.remove("is-visible");
      },
    });

    // Reveal the title as soon as it appears
    sr.reveal(".pageTitle", {
      distance: "20px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="content">
        <div
          className="reveal content"
          id="home"
        >
          <Home info={info} />
        </div>
        <Stars />
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

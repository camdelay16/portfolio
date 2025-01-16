import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import { info } from "./info/info";

import "./App.css";
import "./Star.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Routes>
        <Route
          path="/"
          element={<Home info={info} />}
        />
        <Route
          path="/aboutme"
          element={<AboutMe info={info} />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio info={info} />}
        />
      </Routes>
    </>
  );
}

export default App;

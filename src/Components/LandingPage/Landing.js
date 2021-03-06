// Add App summary and User Guide

import React from "react";
// import "./Landing.css";
import SearchBar from "../Home/SearchBar";
import Navbar from "../Navbar/Navbar";
import WelcomeMessage from "../LandingPage/WelcomeMessage";

function Landing() {
  return (
    <section>
      <div className="App">
        <Navbar />
        <section>
          <WelcomeMessage />
        </section>
        <SearchBar />
      </div>
    </section>
  );
}

export default Landing;

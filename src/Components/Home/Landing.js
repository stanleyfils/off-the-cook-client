// All files specific to Home Page are rendered here
// Add App summary and User Guide

import React from "react";
import "./Landing.css";
import Header from "../Landing/Header";
import SearchBar from "../Landing/SearchBar";
import Navbar from "../Navbar/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import WelcomeMessage from "../Landing/WelcomeMessage";

function Landing() {
  return (
    <section>
      <div className="App">
        <Navbar />
        <section>
          <WelcomeMessage />
        </section>
        <Header />
        <SearchBar />
      </div>
    </section>
  );
}

export default Landing;

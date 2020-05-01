// All files specific to Home Page are rendered here
// Add App summary and User Guide

import React from "react";
import "./Landing.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import PrimarySearchAppBar from "../NavBar/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";

function Landing() {
  return (
    <section>
      <div className="App">
        <PrimarySearchAppBar />
        <Header />
        <SearchBar />
      </div>
    </section>
  );
}

export default Landing;

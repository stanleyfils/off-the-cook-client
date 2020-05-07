// All files specific to Home Page are rendered here

import React from "react";
import "./Home.css";
import Header from "../Home/Header";
import SearchBar from "../Home/SearchBar";
import PrimarySearchAppBar from "../Navbar/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

function Home() {
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

export default Home;

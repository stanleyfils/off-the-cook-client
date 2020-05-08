// All files specific to Home Page are rendered here

import React from "react";
import "./Home.css";
import Header from "../Home/Header";
import SearchBar from "../Home/SearchBar";
import Navbar from "../Navbar/Navbar";
import Collections from "../Home/Collections";
import { Switch, Route, Redirect } from "react-router-dom";

function Home() {
  return (
    <section>
      <div className="App">
        <Navbar />
        <Header />
        <SearchBar />
        <Collections />
      </div>
    </section>
  );
}

export default Home;

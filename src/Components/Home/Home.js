// All files specific to Home Page are rendered here

import React from "react";
import "./Home.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Navbar from "../Navbar/Navbar";
import Collections from "./Collections";
import ShowRecipes from "./ShowRecipes";

const Home = (props) => {
  return (
    <section>
      <div className="App">
        <Navbar />
        <Header />
        <SearchBar {...props} search={props.search} />
        <Collections />
        <ShowRecipes recipes={props.recipes} />
      </div>
    </section>
  );
};

export default Home;

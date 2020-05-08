import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./Components/Home/Landing";
import Home from "./Components/Home/Home";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import RecipeService from "./Services/RecipeService";
import RecipeBookService from "./Services/RecipeBookService";
import SearchBar from "./Components/Home/SearchBar";

class App extends Component {
  state = {
    search: "",
  };

  searchRecipes = (param) => {
    RecipeService.searchRecipes(param)
      .then((recipesFromExternalApi) => {
        console.log(recipesFromExternalApi.data);
        this.setState({ recipes: recipesFromExternalApi.data });
      })
      .catch((err) => console.log("error"));
  };

  render() {
    return (
      <section>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/home"
              render={(props) => (
                <Home {...props} search={this.searchRecipes} />
              )}
            />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/recipes" component={RecipeList} /> */}
            <Route
              exact
              path="/home"
              render={(props) => (
                <SearchBar {...props} search={this.searchRecipes} />
              )}
            />
          </Switch>
        </div>
      </section>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Home/Landing";
import Home from "./Components/Home/Home";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import RecipeService from "./Services/RecipeService";
import AddRecipeBook from "./Components/Home/AddRecipeBook";
import { AuthContext } from "./context/index";
import ShowRecipes from "./Components/Home/ShowRecipes";
import RecipeBookService from "./Services/RecipeBookService";

class App extends Component {
  state = {
    search: "",
    recipes: [],
  };

  // get recipes from external API
  searchRecipes = (param) => {
    RecipeService.searchRecipes(param)
      .then((recipesFromExternalApi) => {
        console.log(recipesFromExternalApi.data);
        this.setState({ recipes: recipesFromExternalApi.data });
      })
      .catch((err) => console.log("error"));
  };

  // create new recipe book
  createNewRecipeBook = (title, description) => {
    RecipeBookService.addNewRecipeBook(title, description)
      .then((response) => {
        this.setState({
          recipeBooks: response.data,
        });
      })
      .catch((err) =>
        console.log("Error while creating a new Recipe Book: ", {
          err: err.response,
        })
      );
  };

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          return (
            <div className="App">
              <Switch>
                {context.state.isLoggedIn ? (
                  <>
                    <Route
                      exact
                      path="/showRecipes"
                      render={(props) => (
                        <ShowRecipes {...props} recipes={this.state.recipes} />
                      )}
                    />
                    <Route
                      exact
                      path="/home"
                      render={(props) => (
                        <Home
                          {...props}
                          search={this.searchRecipes}
                          recipes={this.state.recipes}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/addRecipeBook"
                      component={AddRecipeBook}
                    />
                  </>
                ) : (
                  <>
                    <Route
                      exact
                      path="/showRecipes"
                      render={(props) => (
                        <ShowRecipes {...props} recipes={this.state.recipes} />
                      )}
                    />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <Route path="/" component={Landing} />
                  </>
                )}
              </Switch>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default App;

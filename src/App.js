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
    recipeBooks: [],
  };

  componentDidMount() {
    this.fetchRecipeBooks();
  }
  fetchRecipeBooks() {
    // console.log("Im in App.js");
    RecipeBookService.getRecipeBooks()
      .then((recipeBooks) => {
        console.log("recipeBooks", recipeBooks);
        this.setState({
          recipeBooks: recipeBooks.data,
        });
        // window.location.reload();
      })
      .catch((err) => console.log("error while getting recipe books", err));
  }

  addRecipe = (recipeId, recipeBookId) => {
    const newRecipe = this.state.recipes.find(
      (recipe) => recipe.id === recipeId
    );
    newRecipe.bookId = recipeBookId;
    RecipeService.addRecipe(newRecipe)
      .then((recipe) => {
        // console.log("New Recipe: ", recipe.data);
      })
      .catch((err) => console.log("Error while adding a recipe: ", err));
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
    RecipeBookService.createRecipeBook(title, description)
      .then((response) => {
        this.setState({
          recipeBooks: [...this.state.recipeBooks, response.data],
        });
        console.log(this.state.recipeBooks);
      })
      .catch((err) =>
        console.log("Error while creating a new Recipe Book: ", err)
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
                        <ShowRecipes
                          {...props}
                          recipes={this.state.recipes}
                          recipeBooks={this.state.recipeBooks}
                          addRecipe={this.addRecipe}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/home"
                      render={(props) => (
                        <Home
                          {...props}
                          search={this.searchRecipes}
                          // recipes={this.state.recipes}
                          fetchRecipeBooks={this.fetchRecipeBooks}
                          recipeBooks={this.state.recipeBooks}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/addRecipeBook"
                      render={(props) => (
                        <AddRecipeBook
                          {...props}
                          createNewRecipeBook={this.createNewRecipeBook}
                        />
                      )}
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

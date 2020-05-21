import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing";
import Home from "./Components/Home/Home";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import RecipeService from "./Services/RecipeService";
import AddRecipeBook from "./Components/Home/RecipeBooks/AddRecipeBook";
import { AuthContext } from "./context/index";
import ShowRecipes from "./Components/Home/RecipesSearch/ShowRecipes";
import RecipeBookService from "./Services/RecipeBookService";
import RecipeBookDetails from "./Components/Home/RecipeBooks/RecipeBookDetails";
import RecipeBookList from "./Components/Home/RecipeBooks/RecipeBookList";
import axios from "axios";

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
    RecipeBookService.getRecipeBooks()
      .then((recipeBooks) => {
        console.log("recipeBooks", recipeBooks);
        this.setState({
          recipeBooks: recipeBooks.data,
        });
      })
      .catch((err) => console.log("error while getting recipe books", err));
  }

  deleteRecipeBook = (recipeBookId) => {
    axios
      .post(
        process.env.REACT_APP_SERVER_POINT +
          `/recipeBooks/${recipeBookId}/delete`
      )
      .then((messageAfterDeletingRecipeBook) => {
        console.log({ messageAfterDeletingRecipeBook });
        this.fetchRecipeBooks();
      })
      .catch((err) => console.log({ err }));
  };

  addRecipe = (recipeId, recipeBookId) => {
    const newRecipe = this.state.recipes.find(
      (recipe) => recipe.id === recipeId
    );
    newRecipe.bookId = recipeBookId;
    RecipeService.addRecipe(newRecipe)
      .then((recipe) => {})
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
                      path="/recipeBooks/:recipeBookId"
                      render={(props) => (
                        <RecipeBookDetails
                          {...props}
                          fetchRecipeBooks={this.fetchRecipeBooks}
                          recipeBooks={this.state.recipeBooks}
                          deleteRecipeBook={this.deleteRecipeBook}
                        />
                      )}
                    />
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
                      path="/recipeBooks"
                      component={RecipeBookList}
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
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
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

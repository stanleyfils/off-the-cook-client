// get Recipe List

import React, { Component } from "react";
import axios from "axios";
import AddRecipe from "./AddRecipeService";
import { Route, Switch, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// ***************REQUIRED FOR EXTERNAL API****************************
const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const SpoonacularService = {
  getRecipes: () => {
    return service
      .get("./complexSearch")
      .then((res) => res.json())
      .catch((err) => console.log(err));
  },
};

// ******************LOCAL API CODE**********************************
class RecipeList extends Component {
  state = {
    recipeList: [],
  };

  // here we call the function to make the axios call which gets all the recipes from the db, we must do this prior to the render in order to get the needed information so that we can use that information to display something in the component allowing axios to make its request and receive its response.
  componentDidMount() {
    this.getRecipeList();
  }

  // this function will pass down to the add recipe child component which will allow us to update the state for the this (the parent) component and display the updated full list of recipes
  newRecipeAdded = () => {
    this.getRecipeList();
  };

  // after we delete the trip from the db we will need to then call the function which gets all the trips from the db in order to update the list with the deleted trip missing.
  deleteRecipe = (recipeId) => {
    axios
      .post(`http://localhost:3001/recipes/${recipeId}/delete`)
      .then((messageAfterDeletingRecipe) => {
        console.log({ messageAfterDeletingRecipe });
        this.getRecipeList();
      })
      .catch((err) => console.log({ err }));
  };

  // this function will be used in order to get the full list of recipes as well as update the state whenever we make a change like adding or deleting a recipe.
  getRecipeList = () => {
    axios
      .get("http://localhost:3001/recipes")
      .then((recipeListFromAPI) => {
        this.setState({ recipeList: recipeListFromAPI.data });
      })
      .catch((err) => console.log({ err }));
  };

  showRecipe = () => {
    return this.state.recipeList.length === 0 ? (
      <h2>No Recipes to Display</h2>
    ) : (
      this.state.recipeList.map((recipe, i) => {
        return (
          <div key={i}>
            <h2>
              <Link to={`/recipes/${recipe._id}`}>{recipe.recipeName}</Link>
            </h2>
            {/* <h2>{recipe.Title}</h2> */}
            <h3>{recipe.title}</h3>
            {/* <h4>Prep Time: {recipe.prepTime}</h4>
            <h4>Cook Time: {recipe.cookTime}</h4>
            <h4>Servings: {recipe.servings}</h4>
            <h4>Ingredients: {recipe.ingredients}</h4>
            <h4>Directions: {recipe.directions}</h4>
            <h4>Nutrition: {recipe.nutrition}</h4> */}

            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => this.deleteRecipe(recipe._id)}
            >
              Delete
            </Button>
          </div>
        );
      })
    );
  };

  render() {
    return (
      <div>
        {/* <AddRecipe updateState={this.newRecipeAdded} /> */}
        <hr />
        {this.state.recipeList && this.showRecipe()}
      </div>
    );
  }
}

export default RecipeList;

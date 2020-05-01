import React, { Component } from "react";
import axios from "axios";
import AddRecipe from "./AddRecipe";
import { Route, Switch, Link } from "react-router-dom";

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
      .post(`http://localhost:3001/trips/${recipeId}/delete`)
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
            {/* <h2>{recipe.recipeName}</h2> */}
            <h3>Title: {recipe.recipeTitle}</h3>
            <h4>Prep Time: {recipe.prepTime}</h4>
            <h4>Cook Time: {recipe.cookTime}</h4>
            <h4>Ingredients: {recipe.recipeIngredients}</h4>
            <h4>Directions: {recipe.recipeDirections}</h4>
            <h4>Nutrition: {recipe.recipeNutrition}</h4>

            <button onClick={() => this.deleteRecipe(recipe._id)}>
              Delete
            </button>
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
        {this.state.recipeList && this.showRecipes()}
      </div>
    );
  }
}

export default RecipeList;

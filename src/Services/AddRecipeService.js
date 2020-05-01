// add recipe functionality and form

import React, { Component } from "react";
import axios from "axios";

class AddRecipe extends Component {
  state = {
    recipeTitle: "",
    recipePrepTime: "",
    recipeCookTime: "",
    recipeServings: "",
    recipeIngredients: "",
    recipeDirections: "",
    recipeNutrition: "",
  };

  submit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/recipes", this.state)
      .then((newlyCreatedRecipeFromAPI) => {
        console.log({ newlyCreatedRecipeFromAPI });

        this.props.updateState();
        this.setState({
          recipeTitle: "",
          recipePrepTime: "",
          recipeCookTime: "",
          recipeServings: "",
          recipeIngredients: "",
          recipeDirections: "",
          recipeNutrition: "",
        });
      })
      .catch((err) => console.log({ err }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>Recipe Title:</label>
          <input
            type="text"
            name="recipeTitle"
            value={this.state.recipeTitle}
            onChange={this.handleChange}
          />
          <br />
          <label>Prep Time:</label>
          <input
            type="text"
            name="recipePrepTime"
            value={this.state.recipePrepTime}
            onChange={this.handleChange}
          />
          <br />
          <label>Cook Time:</label>
          <input
            type="text"
            name="recipeCookTime"
            value={this.state.recipeCookTime}
            onChange={this.handleChange}
          />
          <br />
          <label>Servings:</label>
          <input
            type="text"
            name="recipeServings"
            value={this.state.recipeServings}
            onChange={this.handleChange}
          />
          <br />
          <label>Ingredients:</label>
          <input
            type="text"
            name="recipeIngredients"
            value={this.state.recipeIngredients}
            onChange={this.handleChange}
          />
          <br />
          <label>Directions:</label>
          <input
            type="text"
            name="recipeDirections"
            value={this.state.recipeDirections}
            onChange={this.handleChange}
          />
          <br />
          <label>Nutrition Facts:</label>
          <input
            type="text"
            name="recipeNutrition"
            value={this.state.recipeNutrition}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Add Recipe" />
        </form>
      </div>
    );
  }
}

export default AddRecipe;

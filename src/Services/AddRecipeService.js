// add recipe functionality and form

import React, { Component } from "react";
import axios from "axios";

class AddRecipe extends Component {
  state = {
    title: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    ingredients: "",
    directions: "",
    nutrition: "",
  };

  submit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/recipes", this.state)
      .then((newlyCreatedRecipeFromAPI) => {
        console.log({ newlyCreatedRecipeFromAPI });

        this.props.updateState();
        this.setState({
          title: "",
          prepTime: "",
          cookTime: "",
          servings: "",
          ingredients: "",
          directions: "",
          nutrition: "",
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
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <label>Prep Time:</label>
          <input
            type="number"
            name="prepTime"
            value={this.state.prepTime}
            onChange={this.handleChange}
          />
          <br />
          <label>Cook Time:</label>
          <input
            type="number"
            name="cookTime"
            value={this.state.cookTime}
            onChange={this.handleChange}
          />
          <br />
          <label>Servings:</label>
          <input
            type="number"
            name="servings"
            value={this.state.servings}
            onChange={this.handleChange}
          />
          <br />
          <label>Ingredients:</label>
          <input
            type="text"
            name="ingredients"
            value={this.state.ingredients}
            onChange={this.handleChange}
          />
          <br />
          <label>Directions:</label>
          <input
            type="text"
            name="directions"
            value={this.state.directions}
            onChange={this.handleChange}
          />
          <br />
          <label>Nutrition Facts:</label>
          <input
            type="text"
            name="nutrition"
            value={this.state.nutrition}
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

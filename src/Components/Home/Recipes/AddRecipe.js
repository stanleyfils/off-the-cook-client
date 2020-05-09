// add recipe functionality and form

import React, { Component } from "react";
// import axios from "axios";

class AddRecipe extends Component {
  state = {
    title: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    ingredients: "",
    directions: "",
    nutrition: "",
    bookId: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  createRecipe = (event) => {
    event.preventDefault();
    this.props.addNewRecipe(this.state);
  };

  // research
  handleSelectChange = (event) => {
    const { value } = event.target;
    if (value === "new") {
      this.props.history.push("/new-recipebook");
    } else {
      this.setState({
        bookID: value,
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.createRecipe(event)}>
          <label>Recipe Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <br />
          <label>Prep Time:</label>
          <input
            type="number"
            name="prepTime"
            value={this.state.prepTime}
            onChange={this.handleInput}
          />
          <br />
          <label>Cook Time:</label>
          <input
            type="number"
            name="cookTime"
            value={this.state.cookTime}
            onChange={this.handleInput}
          />
          <br />
          <label>Servings:</label>
          <input
            type="number"
            name="servings"
            value={this.state.servings}
            onChange={this.handleInput}
          />
          <br />
          <label>Ingredients:</label>
          <input
            type="text"
            name="ingredients"
            value={this.state.ingredients}
            onChange={this.handleInput}
          />
          <br />
          <label>Directions:</label>
          <input
            type="text"
            name="directions"
            value={this.state.directions}
            onChange={this.handleInput}
          />
          <br />
          <label>Nutrition Facts:</label>
          <input
            type="text"
            name="nutrition"
            value={this.state.nutrition}
            onChange={this.handleInput}
          />
          <br />
          <button type="submit" value="Add Recipe" />
        </form>
      </div>
    );
  }
}

export default AddRecipe;

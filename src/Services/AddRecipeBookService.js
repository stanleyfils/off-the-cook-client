// add recipe book functionality and form

import React, { Component } from "react";
import axios from "axios";

class AddRecipeBook extends Component {
  state = {
    recipeBookTitle: "",
    recipeBookDescription: "",
  };

  submit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/recipeBooks", this.state)
      .then((newlyCreatedRecipeBookFromAPI) => {
        console.log({ newlyCreatedRecipeBookFromAPI });

        this.props.updateState();
        this.setState({
          recipeBookTitle: "",
          recipeBookDescription: "",
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
          <label>Recipe Book Title:</label>
          <input
            type="text"
            name="recipeBookTitle"
            value={this.state.recipeBookTitle}
            onChange={this.handleChange}
          />
          <br />
          <label>Prep Time:</label>
          <input
            type="text"
            name="recipeBookDescription"
            value={this.state.recipeBookDescription}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Add Recipe Book" />
        </form>
      </div>
    );
  }
}

export default AddRecipeBook;

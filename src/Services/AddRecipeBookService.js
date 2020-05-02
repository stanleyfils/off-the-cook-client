// add recipe book functionality and form

import React, { Component } from "react";
import axios from "axios";

class AddRecipeBook extends Component {
  state = {
    title: "",
    description: "",
  };

  submit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/recipeBooks", this.state)
      .then((newlyCreatedRecipeBookFromAPI) => {
        console.log({ newlyCreatedRecipeBookFromAPI });

        this.props.updateState();
        this.setState({
          title: "",
          description: "",
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
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <label>Prep Time:</label>
          <input
            type="number"
            name="description"
            value={this.state.description}
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

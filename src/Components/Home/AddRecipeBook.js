// add recipe book functionality and form

import React, { Component } from "react";
import axios from "axios";

class AddRecipeBook extends Component {
  state = {
    title: "",
    description: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  createRecipeBook = (event) => {
    event.preventDefault();
    this.props.addNewRecipeBook(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.createRecipeBook(event)}>
          <label>Recipe Book Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit" value="Add Recipe Book" />
        </form>
      </div>
    );
  }
}

export default AddRecipeBook;

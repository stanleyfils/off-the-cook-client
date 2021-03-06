// add recipe book functionality and form

import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./AddRecipeBook.css";

class AddRecipeBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  createRecipeBook = (event) => {
    event.preventDefault();
    this.props.createNewRecipeBook(this.state);
    this.props.history.push("/Home");
  };

  render() {
    return (
      <div>
        <Button
          className="back-btn"
          onClick={() => this.props.history.goBack()}
        >
          Back
        </Button>
        <form onSubmit={(event) => this.createRecipeBook(event)}>
          {/* <label>Recipe Book Title: </label> */}
          <TextField
            id="outlined-basic"
            label="Recipe Book Title"
            variant="outlined"
            className="inputField"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <br />
          {/* <label>Description: </label> */}
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            className="inputField"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInput}
          />
          <br />
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Add Recipe Book
          </Button>
        </form>
      </div>
    );
  }
}

export default AddRecipeBook;

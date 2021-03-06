// update recipe book

import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class UpdateRecipeBook extends Component {
  constructor(props) {
    super(props);
    const { title, description, recipes } = this.props.theRecipeBook;
    this.state = {
      title,
      description,
      recipes,
    };
  }

  // for all fields except images and specs
  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // stop the page refresh
    event.preventDefault();

    // PUT and POST requests receive a 2nd argument: the info to submit
    // (we are submitting the state we've gathered from the form)
    axios
      .post(
        process.env.REACT_APP_SERVER_POINT +
          `/recipeBooks/${this.props.theRecipeBook._id}/update`,
        this.state,
        { withCredentials: true } // FORCE axios to send cookies across domains
      )
      .then((response) => {
        //   instead of using <Redirect /> we use this.props.history.push()
        // this.props.history.push("/home");
      })
      .catch((err) => {
        console.log("Update Recipe Book ERROR", err);
        alert("Sorry! Something went wrong.");
      });
  }

  render() {
    // console.log('0 000 0 0 0 00 0 ',this.props);
    // console.log(" = = = == =", this.state);
    const { title, description } = this.state;
    return (
      <section>
        <Button
          className="back-btn"
          onClick={() => this.props.history.goBack()}
        >
          Back
        </Button>
        <h2>Edit: {title} </h2>

        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label> Title: </label>
          <input
            value={title}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="title"
          />

          <label> Description: </label>
          <input
            value={description}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="description"
          />

          <button>Save</button>
        </form>
      </section>
    );
  }
}

export default UpdateRecipeBook;

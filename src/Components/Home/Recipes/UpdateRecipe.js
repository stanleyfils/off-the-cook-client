// update recipe

import React, { Component } from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";

class UpdateRecipe extends Component {
  constructor(props) {
    super(props);
    const {
      title,
      prepTime,
      servings,
      ingredients,
      directions,
      nutrition,
    } = this.props.theTrip;
    this.state = {
      title,
      prepTime,
      servings,
      ingredients,
      directions,
      nutrition,
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
          `/recipes/${this.props.theRecipe._id}/update`,
        this.state,
        { withCredentials: true } // FORCE axios to send cookies across domains
      )
      .then((response) => {
        //   instead of using <Redirect /> we use this.props.history.push()
        this.props.history.push("/recipes");
      })
      .catch((err) => {
        console.log("Update Recipe ERROR", err);
        alert("Sorry! Something went wrong.");
      });
  }

  render() {
    // console.log('0 000 0 0 0 00 0 ',this.props);
    // console.log(" = = = == =", this.state);
    const {
      title,
      prepTime,
      cookTime,
      servings,
      ingredients,
      directions,
      nutrition,
    } = this.state;
    return (
      <section>
        <h2>Edit: {title} </h2>

        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label> Title: </label>
          <input
            value={title}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="title"
          />

          <label> Prep Time: </label>
          <input
            value={prepTime}
            onChange={(event) => this.genericSync(event)}
            type="number"
            name="prepTime"
          />

          <label> Cook Time: </label>
          <input
            value={cookTime}
            onChange={(event) => this.genericSync(event)}
            type="number"
            name="cookTime"
          />

          <label> Servings: </label>
          <input
            value={servings}
            onChange={(event) => this.genericSync(event)}
            type="number"
            name="servings"
          />

          <label> Ingredients: </label>
          <input
            value={ingredients}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="ingredients"
          />

          <label> Directions: </label>
          <input
            value={directions}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="directions"
          />

          <label> Nutrition: </label>
          <input
            value={nutrition}
            onChange={(event) => this.genericSync(event)}
            type="text"
            name="nutrition"
          />

          <button> Save </button>
        </form>
      </section>
    );
  }
}

export default UpdateRecipe;

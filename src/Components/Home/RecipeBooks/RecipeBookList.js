import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";

class RecipeBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeBooks: "",
    };
  }

  // here we call the function to make the axios call which gets all the recipe books from the db, we must do this prior to the render in order to get the needed information so that we can use that information to display something in the component allowing axios to make its request and receive its response.
  componentDidMount() {
    this.getRecipeBookList();
  }

  // this function will pass down to the add recipe book child component which will allow us to update the state for the this (the parent) component and display the updated full list of recipe books
  newRecipeBookAdded = () => {
    this.getRecipeBookList();
  };

  // after we delete the recipe book from the db we will need to then call the function which gets all the trips from the db in order to update the list with the deleted recipe book missing.
  deleteTrip = (recipeBookId) => {
    axios
      .post(
        process.env.REACT_APP_SERVER_POINT +
          `recipeBooks/${recipeBookId}/delete`
      )
      .then((messageAfterDeletingRecipe) => {
        console.log({ messageAfterDeletingRecipe });
        this.getRecipeBookList();
      })
      .catch((err) => console.log({ err }));
  };

  // this function will be used in order to get the full list of recipe books as well as update the state whenever we make a change like adding or deleting a trip.
  getRecipeBookList = () => {
    axios
      .get(process.env.REACT_APP_SERVER_POINT + "recipeBooks")
      .then((recipeBookListFromAPI) => {
        this.setState({ recipeBookList: recipeBookListFromAPI.data });
      })
      .catch((err) => console.log({ err }));
  };

  showRecipeBooks = () => {
    return this.state.recipeBookList.length === 0 ? (
      <h2>No Recipe Books to Display</h2>
    ) : (
      this.state.recipeBookList.map((recipeBook, i) => {
        return (
          <div key={i}>
            <h2>
              <Link to={`/recipeBooks/${recipeBook._id}`}>
                {recipeBook.title}
              </Link>
            </h2>
            {/* <h2>{trip.tripName}</h2> */}
            <h3>Title: {recipeBook.title}</h3>
            <h4>Description: {recipeBook.description}</h4>

            <button onClick={() => this.deleteRecipeBook(recipeBook._id)}>
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
        {/* <AddRecipeBooK updateState={this.newRecipeBookAdded} /> */}
        <hr />
        {this.state.recipeBookList && this.showRecipeBooks()}
      </div>
    );
  }
}

export default RecipeBookList;

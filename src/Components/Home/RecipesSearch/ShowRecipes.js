import React, { Component } from "react";
import "./ShowRecipes.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class showRecipes extends Component {
  state = {
    bookID: "",
  };

  handleSelectChange = (e) => {
    const { value } = e.target;
    if (value === "new") {
      this.props.history.push("/addRecipeBook");
    } else {
      this.setState({
        bookId: value,
      });
    }
  };

  render() {
    console.log(this.props);
    const recipes = this.props.recipes || [];
    return (
      <>
        <div>
          <Button
            className="back-btn"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </Button>
        </div>
        <div className="recipes">
          {recipes.map((recipe) => {
            // console.log("Image", recipe.image);
            return (
              <div className="recipes" key={recipe.id}>
                <img
                  src={`https://spoonacular.com/recipeImages/${recipe.image}`}
                  alt={recipe.title}
                />
                <div>{recipe.title}</div>
                <div>
                  <select
                    defaultValue="default"
                    onChange={this.handleSelectChange}
                  >
                    <option disabled value="default">
                      Select Recipe Book
                    </option>
                    {this.props.recipeBooks.length !== 0 ? (
                      this.props.recipeBooks.map((recipeBook, index) => {
                        return (
                          <option key={index} value={recipeBook._id}>
                            {recipeBook.title}
                          </option>
                        );
                      })
                    ) : (
                      <option value="new">Create New</option>
                    )}
                  </select>
                </div>
                <div className="add-button">
                  <i
                    onClick={() =>
                      this.props.addRecipe(recipe.id, this.state.bookId)
                    }
                    className="fas fa-plus fa-fw"
                    to="/home"
                    component={Link}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default showRecipes;

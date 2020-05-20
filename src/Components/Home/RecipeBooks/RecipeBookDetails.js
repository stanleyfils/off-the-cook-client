// get recipe book details

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateRecipeBook from "./UpdateRecipeBook";
import Button from "@material-ui/core/Button";

class RecipeBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,

      // we need the initial "specs" array to avoid an error with ".map()"
      //   recipeList: [],
    };
  }

  // React will call "componentDidMount()" automatically when PhoneDetails loads
  componentDidMount() {
    const { params } = this.props.match;
    // console.log("component mounting: ");
    axios
      .get(
        process.env.REACT_APP_SERVER_POINT +
          `/recipeBooks/${params.recipeBookId}`,
        this.state
      )
      .then((responseFromApi) => {
        console.log("this is res: ", responseFromApi);
        this.setState(responseFromApi.data);
      })
      .catch((err) => console.log(err));
  }

  showEditForm() {
    this.setState({ showEdit: true });
  }

  render() {
    // console.log("state: ", this.state);
    const { title, description, recipes } = this.state;

    // console.log("Look here!!!", { title, recipes });
    return this.state.recipes ? (
      <section>
        {this.state.showEdit ? (
          <UpdateRecipeBook theRecipeBook={this.state} {...this.props} />
        ) : (
          <section>
            <div>
              <Button
                className="back-btn"
                onClick={() => this.props.history.goBack()}
              >
                Back
              </Button>
            </div>
            <h1>Recipe Book: {title} </h1>
            <h4>Description: {description}</h4>
            <ul>
              {recipes.map((recipe, i) => (
                <li key={i}>{recipe.title}</li>
              ))}
            </ul>

            {/* <ul>
              {specs.map((oneSpec, index) => {
                return <li key={index}> {oneSpec} </li>;
              })}
            </ul> */}

            {/* {this.showEditForm()} */}
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => this.showEditForm()}
            >
              Edit Recipe Book
            </Button>
            <br />
            <Button
              href="#contained-buttons"
              component={Link}
              variant="contained"
              to="/home"
              color="default"
              size="small"
              className="styleButton"
              onClick={() => this.props.deleteRecipeBook(this.state._id)}
            >
              Delete
            </Button>
            {/* <button onClick={() => this.props.deleteRecipeBook(this.state._id)}>
              Delete Recipe Book
            </button> */}
          </section>
        )}

        <Link to={"/recipeBooks"}>View Your Recipe Books</Link>
      </section>
    ) : (
      <h2>No Recipes to Display</h2>
    );
  }
}

export default RecipeBookDetails;

// get recipe details

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateRecipe from "./UpdateRecipe";

class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      // we need the initial "specs" array to avoid an error with ".map()"
      //   recipeList: [],
    };
  }

  // React will call "componentDidMount()" automatically when recipe details load
  componentDidMount() {
    const { params } = this.props.match;

    axios
      .get(
        process.env.REACT_APP_SERVER_POINT + `recipes/${params.recipeId}`,
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
    // console.log('state: ', this.state);
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
        {this.state.showEdit ? (
          <UpdateRecipe theRecipe={this.state} {...this.props} />
        ) : (
          <section>
            <h1> Recipe Details! </h1>
            <h2> {title} </h2>
            <h4>Prep Time: {prepTime}</h4>
            <h4>Cook Time: {cookTime}</h4>
            <h4>Servings: {servings}</h4>
            <h4>Ingredients: {ingredients}</h4>
            <h4>Directions: {directions}</h4>
            <h4>Nutrition: {nutrition}</h4>

            {/* <ul>
              {specs.map((oneSpec, index) => {
                return <li key={index}> {oneSpec} </li>;
              })}
            </ul> */}

            {/* {this.showEditForm()} */}
            <button onClick={() => this.showEditForm()}>Edit Recipe</button>
            {/* <button onClick={() => this.deleteRecipe()}>Delete Recipe</button> */}
          </section>
        )}

        <Link to={"/recipes"}>View Your Recipes</Link>
      </section>
    );
  }
}

export default RecipeDetails;

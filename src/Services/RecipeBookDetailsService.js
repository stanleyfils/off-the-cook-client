// get recipe book details

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateRecipeBook from "./UpdateRecipeBookService";
import RecipeBookList from "./RecipeBookService";

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
    console.log(" = == = = =", this.props.match.params);
    const { params } = this.props.match;

    axios
      .get(
        `http://localhost:3001/recipeBooks/${params.recipeBookId}`,
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
    const { _id, title, description } = this.state;
    return (
      <section>
        {this.state.showEdit ? (
          <UpdateRecipeBook theRecipeBook={this.state} {...this.props} />
        ) : (
          <section>
            <h1> Recipe Book Details! </h1>
            <h2> {title} </h2>
            <h4>Description: {description}</h4>

            {/* <ul>
              {specs.map((oneSpec, index) => {
                return <li key={index}> {oneSpec} </li>;
              })}
            </ul> */}

            {/* {this.showEditForm()} */}
            <button onClick={() => this.showEditForm()}>
              Edit Recipe Book
            </button>
            {/* <button onClick={() => this.deleteRecipeBook()}>Delete Recipe Book</button> */}
          </section>
        )}

        <Link to={"/recipeBooks"}>View Your Recipe Books</Link>
      </section>
    );
  }
}

export default RecipeBookDetails;
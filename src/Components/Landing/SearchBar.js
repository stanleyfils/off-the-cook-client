import React, { Component } from "react";
import "./SearchBar.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SpoonacularService from "../../Services/RecipeService";

class SearchBar extends Component {
  state = {
    searchRecipes: "",
  };

  // to get anything from any API (our or 3rd party) we have to use AXIOS (which we do in services)
  // so we have to place the service in the componentDidMount()
  // componentDidMount() {
  //   SpoonacularService.getRecipes()
  //     .then((resFromApi) => {
  //       console.log(resFromApi);
  //       this.setState({ searchRecipes: resFromApi.data });
  //     })
  //     .catch((err) => console.log(err));
  // }

  handleChange(event) {
    this.setState({ searchRecipes: event.target.value });
  }

  handleSubmit(event) {
    // alert(`You typed: ${this.state.search}`);
    event.preventDefault();
    this.setState({ searchRecipes: "" });
  }

  render() {
    const { searchRecipes } = this.state;
    return (
      <div className="rolloverIcons">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <TextField
            id="outlined-basic"
            label="search..."
            variant="outlined"
            className="searchBar"
            type="text"
            value={searchRecipes}
            placeholder="search recipes"
            onChange={this.handleChange}
          />
        </form>
        <Button variant="contained" color="primary" size="large">
          Surprise Me
        </Button>
        <Button variant="contained" color="primary" size="large">
          Search
        </Button>
      </div>
    );
  }
}

export default SearchBar;

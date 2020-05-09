import React, { Component } from "react";
import "./SearchBar.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class SearchBar extends Component {
  state = {
    searchInput: "",
  };

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = async (event) => {
    // alert(`You typed: ${this.state.searchInput}`);
    event.preventDefault();
    // console.log(this.props);
    await this.props.search(this.state.searchInput);
    this.props.history.push("/showRecipes");
  };

  render() {
    const { searchInput } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="search"
            variant="outlined"
            className="searchBar"
            type="text"
            value={searchInput}
            placeholder="search recipes"
            onChange={this.handleChange}
          />
          <br />
          <Button
            className="searchButton"
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
            size="large"
          >
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default SearchBar;

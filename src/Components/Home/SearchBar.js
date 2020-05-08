import React, { Component } from "react";
import "./SearchBar.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class SearchBar extends Component {
  state = {
    searchInput: "",
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = (event) => {
    // alert(`You typed: ${this.state.searchInput}`);
    event.preventDefault();
    console.log(this.props);
    this.props.search(this.state.searchInput);
  };

  render() {
    const { searchInput } = this.state;
    return (
      <div className="rolloverIcons">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="search..."
            variant="outlined"
            className="searchBar"
            type="text"
            value={searchInput}
            placeholder="search recipes"
            onChange={this.handleChange}
          />
          <Button variant="contained" color="primary" size="large">
            Search
          </Button>
        </form>
        {/* <Button variant="contained" color="primary" size="large">
          Surprise Me
        </Button> */}
      </div>
    );
  }
}

export default SearchBar;

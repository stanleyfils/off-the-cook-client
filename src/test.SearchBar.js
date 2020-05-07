import React, { Component } from "react";
import "./SearchBar.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handleSubmit(event) {
    // alert(`You typed: ${this.state.search}`);
    event.preventDefault();
    this.setState({ searchQuery: "" });
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="rolloverIcons">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="search..."
            variant="outlined"
            className="searchBar"
            type="text"
            value={searchQuery}
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
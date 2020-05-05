import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class ManageRecipes extends Component {
  render() {
    return (
      <div>
        <h1>Manage Recipes</h1>
        <Button variant="contained" color="primary" size="small">
          See recipes
        </Button>
        <Button variant="contained" color="primary" size="small">
          Add Recipe
        </Button>
      </div>
    );
  }
}

export default ManageRecipes;

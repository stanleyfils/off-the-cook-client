import React, { Component } from "react";

export class WelcomeMessage extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Off The Cook Recipe Manager</h2>
        <h4>
          Using Off The Cook is fun and simple!
          <br />
          Search our database of over 360,000 recipes to create your own recipe
          books, menus, and meal plans!
        </h4>
      </div>
    );
  }
}

export default WelcomeMessage;

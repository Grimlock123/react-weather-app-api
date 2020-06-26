import React, { Component } from "react";

class Titles extends Component {
  render() {
    const titleStyle={
      textAlign:"center",
      color:"green"
    }
    return (
      <div style={titleStyle}>
        <h1>Weather Finder</h1>
        <p>Find out temperature, conditions, and more</p>
      </div>
    );
  }
}

export default Titles;

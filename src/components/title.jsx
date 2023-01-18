import React, { Component } from "react";

import "./styles.css";

class Title extends Component {
  state = {};
  render() {
    return (
      <h1 className="head">
        <p className="titleFont">
          Episodes of the{" "}
          <span className="titleFont" style={{ fontFamily: "Lato-bold" }}>
            4th
          </span>
        </p>
        <p className="titleFont">season of the series</p>
        <p className="titleRnM">Rick and Morty</p>
      </h1>
    );
  }
}

export default Title;

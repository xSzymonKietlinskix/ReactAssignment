import React, { Component } from "react";

import "./styles.css";

class Title extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="title">
          Episodes of the <span className="title">4th</span>{" "}
        </h1>
        <h2 className="title">season of the series</h2>
        <h3 className="title">Rick and Morty</h3>
      </div>
    );
  }
}

export default Title;

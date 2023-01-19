import React, { Component } from "react";

import "./styles.css";

class Bar extends Component {
  state = {};
  render() {
    return (
      <div className="barContainer">
        <div className="greenRectangle">
          <h1 className="textBar">LOREM</h1>
        </div>
        <div className="blueTriangle" />
        <div className="blueRectangle" />
      </div>
    );
  }
}

export default Bar;

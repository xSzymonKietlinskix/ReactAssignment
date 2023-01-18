import React, { Component } from "react";

import "./styles.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="greenRectangle">
          <h1 className="textHeader">LOREM</h1>
        </div>
        <div />
        <div className="blueTriangle" />
        <div className="blueRectangle" />
      </div>
    );
  }
}

export default Header;

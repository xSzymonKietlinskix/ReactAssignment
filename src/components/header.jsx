import React, { Component } from "react";

import "./styles.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <object className="greenRectangle" />
        <h1 className="textHeader">LOREM</h1>
        <object className="blueRectangle" />
        <object className="blueTriangle" />
      </header>
    );
  }
}

export default Header;

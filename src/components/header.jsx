import React, { Component } from "react";

import "./styles.css";

class Header extends Component {
  render() {
    return (
      <h1 className="headerContainer">
        <div className="headerFont">
          Episodes of the{" "}
          <span className="headerFont" style={{ fontFamily: "Lato-bold" }}>
            4th
          </span>
        </div>
        <p className="headerFont">season of the series</p>
        <p className="headerRnM">Rick and Morty</p>
      </h1>
    );
  }
}

export default Header;

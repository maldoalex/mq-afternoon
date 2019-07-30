import React, { Component } from "react";
import "./reset.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuStatus: ""
    };
  }

  toggleMenu = () => {
    if (this.state.menuStatus === "menu-open") {
      this.setState({ menuStatus: "menu-close" });
    } else {
      this.setState({ menuStatus: "menu-open" });
    }
  };
  render() {
    return (
      <div className="App">
        <nav>
          <div className="navContainer">
            <div className="bootstrap">Start Bootstrap</div>
            <div className="navLinks">
              <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Team</li>
              <li>Contact</li>
            </div>
            <div onClick={this.toggleMenu} className="menu">
              menu
            </div>
          </div>
        </nav>

        <div className={this.state.menuStatus} id="dropdownMenu">
          <div className="dropdownLinks">
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
          </div>
        </div>

        <main />
      </div>
    );
  }
}

export default App;

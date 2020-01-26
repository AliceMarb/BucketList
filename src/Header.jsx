import React, { Component } from "react";
import {Button, Navbar, NavDropdown} from "react-bootstrap";
import "./App.css";

// Header is the top bar containing all the buttons and the text
// of the equality vote search
class Header extends Component {
    constructor(props) {
      super(props);
      // this.state = {
      //   buttonColor: "#23395d",
      // };
}

// // changes the color of the state button on click
// usStateChange = () => {
//       if (this.state.us_state_color === "") {
//           this.setState({us_state_color: "#23395d"})
//       } else {
//           this.setState({us_state_color: ""})
//       }
//       this.props.sortByState();
// }

// // changes the color of the fav button on click
// favButton = () => {
//     if (this.state.fav_color === "") {
//         this.setState({fav_color: "#23395d"})
//     } else {
//         this.setState({fav_color: ""})
//     }
//     this.props.onClickFav();
// }

render() {
    return (
        <div className="header">
        <h1>BrownBucket</h1>
        <p>BrownBucket is a social network to find cool activities around Brown University.<br/><br/>
        Don't miss out!</p>
        <img src="https://media.giphy.com/media/QX7uOSUG8WRpbm1v79/giphy.gif"/>
        <div id="welcome">
          <h3>WELCOME BACK USER!</h3>
        </div>
        <h2>Top Picks</h2>
        <h3>Filter by:</h3>
        {this.props.renderButtons()}
        {/* drop down item allows choices of sort and filters */}
        <Navbar bg="light" expand="lg">
        {/* <Button onClick={this.usStateChange} style={{backgroundColor: this.state.us_state_color}}>Sort by US State (A-Z)</Button> */}
        </Navbar>

        </div>
    );
  }
}

export default Header;

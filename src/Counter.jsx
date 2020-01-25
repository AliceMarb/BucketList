import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5
    };
  }

  incrementCount = () => {
    /* TODO (Counter): Use setState() to modify the count. Here’s an example:
        this.setState({
          field: newValue
        });
    */
   this.setState({
    count: this.state.count + 1
    })
  };

  render() {
    return (
      <div className="counter">
        {/*TODO (Counter): display the value of count*/}
        {this.state.count}
        {/* TODO (Counter): add a button that calls incrementCount() when clicked */}
        <button onClick={this.incrementCount}></button>
      </div>
    );
  }
}

export default Counter;

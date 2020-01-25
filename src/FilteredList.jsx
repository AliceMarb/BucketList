import React, { Component } from "react";
import List from "./List";
import "./App.css";
import Header from "./Header";
import { Card, Button } from "react-bootstrap";


// Filtered list is the component that defines which people appear
// on screen
class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // tags being filtered on
      filters : [],
    };
  }

  addFilter = tag => {
    // Create a new array based on current state:
    let filters = [...this.state.filters];
    // Add item to it
    if (filters.includes(tag)){
      // remove if already in -- they want to remove 
      filters = filters.filter(oneTag => oneTag != tag);
    } else {
      filters.push(tag);
    }
    
    // Set state
    this.setState({filters});
    console.log(tag);
    console.log(filters);
  };

  filterItems = item => {
    if (this.state.filters.length == 0){
      return true;
    }
    for (var i=0; i < this.state.filters.length; i++) {
      if (item.tags.includes(this.state.filters[i])){
        return true;
      }
    }
    return false;
  }

  sortRating = (a,b) => (a.rating > b.rating)? -1 : 1

  renderButtons = () => {
    const buttons = this.props.tags.map(tag =>     
      {return <Button key={tag} onClick={() => this.addFilter(tag)}>{tag}</Button>});
    return buttons;
  }

  render() {
    return (
      <div>
        {/* {this.renderButtons()} */}
        <Header renderButtons={this.renderButtons}></Header>
        <List items={this.props.items.filter(this.filterItems).sort(this.sortRating)}/>
      </div>
    );
  }
}

export default FilteredList;

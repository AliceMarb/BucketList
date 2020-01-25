import React, { Component } from "react";
import TopPicksList from "./TopPicksList";
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

  favClick = index => {
    if (this.props.items[index].fav === false) {
        this.props.items[index].fav = true
        this.props.items[index].color = "red"
        // returns the color back to the Person card, 
        // to change the button to red
        return "red"
    } else {
        // If the fav is true and being changed to false,
        // we need to immediately remove it from the favorites 
        // list. So if in favorite filter,
        // we set the state again. This seems redundant, but 
        // actually it causes the filteredlist to rerender
        // and thus remove the unfavorited items.
        if (this.state.fav){
          // if in favorites, need to re-render.
          this.setState({fav: true})}
        this.props.items[index].fav = false
        // "" is blue because that is the default for Card
        this.props.items[index].color = ""
        return ""

    }
}

  render() {
    return (
      <div>
        {/* {this.renderButtons()} */}
        <Header renderButtons={this.renderButtons}></Header>
        <TopPicksList favClick={this.favClick} items={this.props.items.map((item, index) => {
            item["index"] = index
            // we didn't want an additional color key initially because fav is 
            // equivalent and makes it redundant -- if fav is true, color is 
            // red, otherwise blue.
            if (item.fav){item["color"] = "red"} else {item["color"] = " "}
            return item
            // filters and sorts the items according to the above filtera
        }).filter(this.filterItems).sort(this.sortRating)}/>
      </div>
    );
  }
}

export default FilteredList;

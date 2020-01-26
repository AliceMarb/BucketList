import React, { Component } from "react";
import TopPicksList from "./TopPicksList";
import MyList from "./MyList";
import MyFinList from "./MyFinList";
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
      bgColor: {},
      rerender: ""
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
    // console.log(tag);
    // console.log(filters);
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

  filterFav = item => {
    // console.log(item.fav)
    // this.props.items[0].fav = true
    
    return item.fav && !item.finished
}

filterFin= item => {
  console.log(item.finished)
  // this.props.items[0].fav = true 
  return item.fav && item.finished
}

  sortRating = (a,b) => (a.rating > b.rating)? -1 : 1

  renderButtons = () => {
    const buttons = this.props.tags.map(tag =>     
      {return <Button style={{backgroundColor:this.state.bgColor[tag]}} key={tag} onClick={() => this.addFilter(tag)}>{tag}</Button>});
    return buttons;
  }

  favClick = index => {
    
    if (this.props.items[index].fav === false) {
        this.props.items[index].fav = true
        this.props.items[index].color = "red"
        // add to myList
        // returns the color back to the Person card, 
        // to change the button to red
        // console.log(this.props.items[index]);
        this.setState({rerender:"true"});
        // this.props.items.map(item => this.filterFav(item))
        return "red"
    } else {
        this.props.items[index].fav = false
        // "" is blue because that is the default for Card
        this.props.items[index].color = ""
        // console.log(this.props.items[index]);
        this.setState({rerender:"true"});
        // this.props.items.map(item => this.filterFav(item))
        return ""
    }
    
}

finClick = index => {
  console.log("fin clicked!")
  if (this.props.items[index].finished === false) {
      this.props.items[index].finished = true
      this.props.items[index].color = "red"
      // add to myList
      // returns the color back to the Person card, 
      // to change the button to red
      console.log(this.props.items[index]);
      this.setState({rerender:"true"});
      // this.props.items.map(item => this.filterFav(item))
      return "red"
  } else {
      this.props.items[index].finished = false
      // "" is blue because that is the default for Card
      this.props.items[index].color = ""
      console.log(this.props.items[index]);
      this.setState({rerender:"true"});
      // this.props.items.map(item => this.filterFav(item))
      return ""
  }
  
}

  render() {
    return (
      <div>
        {/* {this.renderButtons()} */}
        <Header renderButtons={this.renderButtons}></Header>
        <TopPicksList favClick={this.favClick} items={this.props.items.filter(this.filterItems).sort(this.sortRating)}/>
        <MyList finClick={this.finClick} favClick={this.favClick} items={this.props.items.filter(this.filterFav)}/>
        <MyFinList finClick={this.finClick} favClick={this.favClick} items={this.props.items.filter(this.filterFin)}/>
      </div>
    );
  }
}

export default FilteredList;

import React, { Component } from "react";
import "./App.css";
import FilteredList from "./FilteredList";
import MyList from "./MyList";


// This is the list of dictionaries of people who tagsd on the equality act
// we got this through the code at the bottom, but found it easier and
// clearer to copy it in.
const items = [
{description: "A fun place", numTried: "5", tags: ["Nighttime", "Cultural", "Summer", "Anyone", "Free"], rating: "5", name: "Waterfire", img: "https://i2.wp.com/waterfire.org/wp-content/uploads/2019/04/FEATURED-2018-8-25-WaterFire-Lighting-Photograph-by-Jen-Bonin.jpg?fit=720%2C480&ssl=1", fav: false },
{description: "A fun place", numTried: "6", tags: ["Daring", "Drinking", "All year", "Free"], rating: "4", name: "SciliChallenge", img: "https://pbs.twimg.com/media/Cw8FDA-UQAEr5Bb.jpg", fav: false },
{description: "A fun place", numTried: "50", tags: ["Daring", "All year", "Spooky", "Free"], rating: "3", name: "Andrews Tunnel", img: "https://www.outtherecolorado.com/wp-content/uploads/2019/04/Red-Rocks-Tunnel-Josh-Lenz-Christian-Murdock-The-Gazette-1024x682.jpg", fav: false },
{description: "A fun place", numTried: "33", tags: ["Cultural", "Historical", "Restricted", "Free"], rating: "2", name: "John Hay Special books", img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/John_Hay_Library_at_Brown_University_%E2%80%93_Providence%2C_RI.jpg", fav: false },
{description: "A fun place", numTried: "22", tags: ["Food", "Dessert", "All year", "Anyone", "Paid"], rating: "5", name: "Vivi bubble tea", img: "https://media-cdn.tripadvisor.com/media/photo-s/09/27/bd/83/vivi-bubble-tea.jpg", fav: false },
];

const tagsList = ["Nighttime", "Cultural", "Summer", "Anyone", "Free", "Daring", "Drinking", "Food", "Dessert", "All year", "Paid"];
var myList = [];




class App extends Component {
  // renderButtons = () => {
  //   console.log("rendering!")
  //   return <MyList items={myList}/>
  // }

  addToMyList = item => {
    if (myList.includes(item)){
      // remove if already in -- they want to remove 
      console.log("includes!");
      myList = myList.filter(oneItem => oneItem != item);
      console.log("here's my list" + myList);
    } else {
      console.log("doesn't include!");
      myList.push(item);
    } 
    // this.renderButtons();
  }
  
  render() {
    return (
      <div className="App">
         <FilteredList items={items.map((item, index) => {
           item["fav"] = false
           item["index"] = index
           item["finished"] = false
           if (item.fav){item["color"] = "red"} else {item["color"] = " "}
           return item})} 
          tags={tagsList}
          myList={myList}
          addToMyList={this.addToMyList} />
          {/* <MyList items={myList}/> */}
      </div>
    );
  }
}

export default App;

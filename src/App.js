import React, { Component } from "react";
import "./App.css";
import FilteredList from "./FilteredList";
import MyList from "./MyList";


// This is the list of dictionaries of people who tagsd on the equality act
// we got this through the code at the bottom, but found it easier and
// clearer to copy it in.
const tagsList = ["Nighttime", "Cultural", "Summer", "Anyone", "Free", "Daring", "Drinking", "Food", "Dessert", "All year", "Paid", "Spooky", "Historical", "Restricted"];
 
 
// This is the list of dictionaries of people who tagsd on the equality act
// we got this through the code at the bottom, but found it easier and
// clearer to copy it in.
const items = [
{description: "Are you on fire? Don't jump into the Providence river! It's polluted!", numTried: 5, tags: [tagsList[0], tagsList[1], tagsList[2], tagsList[3], tagsList[4], tagsList[7]], rating: "5", name: "Waterfire", img: "https://i2.wp.com/waterfire.org/wp-content/uploads/2019/04/FEATURED-2018-8-25-WaterFire-Lighting-Photograph-by-Jen-Bonin.jpg?fit=720%2C480&ssl=1"},
{description: "Drink a shot on every floor. No liability if you get alcohol poisoning!", numTried: 6, tags: [tagsList[5], tagsList[6], tagsList[9], tagsList[4]], rating: "4", name: "SciliChallenge", img: "https://pbs.twimg.com/media/Cw8FDA-UQAEr5Bb.jpg"},
{description: "Legend has it 5 students have stayed stuck in here since 1965.", numTried: 50, tags: [tagsList[5], tagsList[9], tagsList[11], tagsList[4]], rating: "3", name: "Andrews Tunnel", img: "https://www.outtherecolorado.com/wp-content/uploads/2019/04/Red-Rocks-Tunnel-Josh-Lenz-Christian-Murdock-The-Gazette-1024x682.jpg"},
{description: "Book a tour of the special collection. Don't spill your HydroFlask!", numTried: 33, tags: [tagsList[1], tagsList[12], tagsList[13], tagsList[4]], rating: "2", name: "John Hay Special books", img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/John_Hay_Library_at_Brown_University_%E2%80%93_Providence%2C_RI.jpg"},
{description: "Nomnomnom. Boba. What else can I say?", numTried: "22", tags: [tagsList[7], tagsList[8], tagsList[9], tagsList[3], tagsList[4]], rating: "4", name: "Vivi bubble tea", img: "https://media-cdn.tripadvisor.com/media/photo-s/09/27/bd/83/vivi-bubble-tea.jpg"},
{description: "See some bird feathers at this museum. Great for fulfilling your desire for fried chicken.", numTried: 40, tags: [tagsList[3], tagsList[4], tagsList[9], tagsList[12], tagsList[1]], rating: "2.5", name: "Providence Museum of Natural History and Planetarium", img: "http://www.providenceri.gov/wp-content/uploads/2017/05/11101256_10155625128690221_6365294528398489100_n.jpg"},
{description: "Check out the house of your favorite founder... and slave owner.", numTried: 25, tags: [tagsList[1], tagsList[4], tagsList[12]], rating: "2.5", name: "John Brown House Museum", img: "https://media-cdn.tripadvisor.com/media/photo-s/05/29/22/5e/john-brown-house-museum.jpg"},
{
  description: "Get Your Skills Sharpened!!",
  numTried: 20,
  tags: [tagsList[3], tagsList[10]],
  rating: "5",
  name: "Providence Rink Ice Skating",
  img:
    "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_80,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/rhodeisland/ice-skating-winter-2018-10-c3f3f7755056a36_c3f3f8e9-5056-a36a-0928cbf82a439cdf.jpg"
},
{
  description: "Time to Find a Job!!",
  numTried: 50,
  tags: [tagsList[3], tagsList[4]],
  rating: "4",
  name: "Career Fair",
  img:
    "https://www.brown.edu/academics/engineering/sites/brown.edu.academics.engineering/files/images/career%20fair%20b2b.ursa-feature-image.jpg"
},
{
  description: "Time for music, drinking, and ... don't get arrested",
  numTried: 100,
  tags: [tagsList[2], tagsList[4], tagsList[5],tagsList[6], tagsList[3]],
  rating: "5",
  name: "Spring Weekend",
  img:
    "https://thebruinclub.files.wordpress.com/2014/04/1610113713.jpg"
},
{
  description: "One of the thrice-a-year concerts. Make sure to get there early or you won't get in!",
  numTried: 73,
  tags: [tagsList[0], tagsList[3], tagsList[4],tagsList[11]],
  rating: "5",
  name: "Halloween Organ Concert",
  img:
    "https://66.media.tumblr.com/tumblr_mcrvn5722m1rqdpo0o1_640.jpg"
},
{
  description: "Watch out for that scary pumpkin!",
  numTried: 27,
  tags: [tagsList[0], tagsList[1], tagsList[5]],
  rating: "4",
  name: "Pumpkin patch",
  img:
    "http://cdn2.creativecirclemedia.com/providencemedia/original/1505311891_3876.jpg"
 }
 
];

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
           if (item.fav){item["color"] = "red"} else {item["color"] = "rgb(98, 189, 219"}
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

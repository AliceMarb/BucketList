import React, {Component} from 'react';
import Person from "./Person";

class MyList extends Component {

  renderList() {
    const items = this.props.items.map(item => {
        console.log(item)
      return <Person key={item.name} color={item["color"]} index={item["index"]} 
      description={item.description} name={item.name} tags={item.tags} rating={item.rating} 
      numTried={item.numTried}
        img={item.img} favClick={this.props.favClick}/>
    });
    return items;
  }

  render() {
    return (
        <div className="person_list">
        <h1>My Bucket List</h1>
        {this.renderList()}
        </div>
    );
  }
}

export default MyList;

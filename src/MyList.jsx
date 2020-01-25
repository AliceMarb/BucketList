import React, {Component} from 'react';
import Person from "./Person";

class MyList extends Component {

  renderList() {
    console.log("hello" + this.props.items)
    const items = this.props.items.map(item => {
      return <Person key={item.name} color={item["color"]} index={item["index"]} description={item.description} name={item.name} tags={item.tags} rating={item.rating} numTried={item.numTried}
        img={item.img} favClick={this.props.favClick}/>
    });
    return items;
  }

  render() {
    return (
        <div className="person_list">
        <h1>My BucketList</h1>
        {this.renderList()}
        </div>
    );
  }
}

export default MyList;

import React, {Component} from 'react';
import MyDrop from "./MyDrop";

class MyFinList extends Component {

  renderList() {
    const items = this.props.items.map(item => {
        console.log(item)
      return <MyDrop key={item.name} color={item["color"]} index={item["index"]} 
      description={item.description} name={item.name} tags={item.tags} rating={item.rating} 
      numTried={item.numTried}
        img={item.img} favClick={this.props.favClick} />
    });
    return items;
  }

  render() {
    return (
        <div className="Drop_list">
        <h1>My Finished List</h1>
        {this.renderList()}
        </div>
    );
  }
}

export default MyFinList;

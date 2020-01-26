import React, {Component} from 'react';
import MyDrop from "./MyDrop";

class MyList extends Component {

  renderList() {
    const items = this.props.items.map(item => {
        console.log(item)
      return <MyDrop key={item.name} color={item["color"]} index={item["index"]} 
      description={item.description} name={item.name} tags={item.tags} rating={item.rating} 
      numTried={item.numTried}
        img={item.img} favClick={this.props.favClick} finClick={this.props.finClick}/>
    });
    return items;
  }

  render() {
    return (
        <div className="Drop_list" class="bucketList">
        <h1>My Bucket List</h1>
        {this.renderList()}
        </div>
    );
  }
}

export default MyList;

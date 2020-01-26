import React, {Component} from 'react';
import Drop from "./Drop";

class TopPicksList extends Component {

  renderList() {

    const items = this.props.items.map(item => {
      return <Drop key={item.name} color={item["color"]} index={item["index"]} description={item.description} name={item.name} tags={item.tags} rating={item.rating} numTried={item.numTried}
        img={item.img} favClick={this.props.favClick}/>
    });
    return items;
  }

  render() {
    return (
        <div className="Drop_list">
        {this.renderList()}
        </div>
    );
  }
}

export default TopPicksList;

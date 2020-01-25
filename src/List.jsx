import React, {Component} from 'react';
import Person from "./Person";

class List extends Component {

  renderList() {

    const items = this.props.items.map(item => {
      return <Person key={item.name} color={item["color"]} index={item["index"]} description={item.description} name={item.name} tags={item.tags} rating={item.rating} numTried={item.numTried}
        img={item.img} boxClick={this.props.boxClick}/>
    });
    return items;
  }

  render() {
    return (
        <div className="person_list">
        {this.renderList()}
        </div>
    );
  }
}

export default List;

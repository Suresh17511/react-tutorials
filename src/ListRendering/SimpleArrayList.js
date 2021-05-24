import React, {Component} from 'react';

export class SimpleArrayList extends Component {
  render() {
    var array = [1, 2, 4, 5, 8];
    const MapArray = array.map((x) => x * 2);
    return <div>{MapArray}</div>;
  }
}

export default SimpleArrayList;

import React, {Children, Component} from 'react';
import Child from './Child';

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ParentName: 'Prabhakar',
    };
  }
  greetParent = (name) => {
    alert(`Hello ${this.state.ParentName} greeting from ${name}`);
  };
  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default Parent;

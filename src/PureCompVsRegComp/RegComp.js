import React, {Component} from 'react';

export class RegComp extends Component {
  render() {
    console.log('Regular Component');
    return (
      <div>
        <h2>{this.props.name}'s Regular Component</h2>
      </div>
    );
  }
}

export default RegComp;

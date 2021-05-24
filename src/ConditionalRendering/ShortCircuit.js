import React, {Component} from 'react';

export class ShortCircuit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <h1>Welcome Surya</h1>;
  }
}

export default ShortCircuit;

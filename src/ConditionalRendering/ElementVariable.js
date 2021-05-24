import React, {Component} from 'react';

export class ElementVariable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <h1>Hello Surya....!!!</h1>;
    } else {
      message = <h1>Hello Guest</h1>;
    }
    return <div>{message}</div>;
  }
}

export default ElementVariable;

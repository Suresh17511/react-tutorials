import React, {Component} from 'react';

export class IfElse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: 1,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Hello Surya</div>;
    } else {
      return <div>Hello Guest</div>;
    }
  }
}

export default IfElse;

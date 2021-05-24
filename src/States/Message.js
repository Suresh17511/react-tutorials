import React, {Component} from 'react';

export class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Welcome Visitor',
    };
  }
  changeMessage = () => {
    this.setState({
      message: 'Thanks for Subscribing...!!!',
    });
  };
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default Message;

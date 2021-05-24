import React, {Component} from 'react';

export class ApproachTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello...!!!',
    };
  }
  changeMessage() {
    this.setState({
      message: 'Good Bye...!!!',
    });
  }
  render() {
    const {message} = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Change Content
        </button>
      </div>
    );
  }
}

export default ApproachTwo;

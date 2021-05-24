import React, {Component} from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  // incrementCounter = () => {
  //   this.setState(
  //     {
  //       count: this.state.count + 1,
  //     },
  //     () => {
  //       console.log('callBack', this.state.count);
  //     }
  //   );
  // };
  incrementCounter = () => {
    this.setState((prevState) => {
      return {count: prevState.count + 1};
    });
  };
  render() {
    return (
      <div>
        <h2>Count - {this.state.count}</h2>
        <button onClick={this.incrementCounter}>Increment Count</button>
      </div>
    );
  }
}

export default Counter;

import React, {Component} from 'react';

export class SampleRender extends Component {
  render() {
    return <div>{this.props.name(0)}</div>;
  }
}

export default SampleRender;

import React, {Component} from 'react';

export class ClassProps extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.name} as {this.props.heroName}
        </h2>
      </div>
    );
  }
}

export default ClassProps;

import React, {Component} from 'react';

export class DestructingProps extends Component {
  render() {
    const {name, heroName} = this.props;
    return (
      <div>
        <h2>
          {name} as {heroName}
        </h2>
      </div>
    );
  }
}

export default DestructingProps;

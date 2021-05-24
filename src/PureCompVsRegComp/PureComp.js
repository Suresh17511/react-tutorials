import React, {PureComponent} from 'react';

export class PureComp extends PureComponent {
  render() {
    console.log('Pure Component');
    return <div>{this.props.name}'s Pure Component</div>;
  }
}

export default PureComp;

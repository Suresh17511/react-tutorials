import React, {Component} from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Surya',
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Surya',
      });
    }, 2000);
  }
  render() {
    console.log('parent Component');
    const {name} = this.state;
    return (
      <div>
        <h2>Parent Component</h2>
        <PureComp name={name} />
        <RegComp name={name} />
      </div>
    );
  }
}

export default ParentComp;

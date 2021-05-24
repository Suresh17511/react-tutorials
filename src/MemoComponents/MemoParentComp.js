import React, {Component} from 'react';
import MemoComp from './MemoComp';

export class MemoParentComp extends Component {
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
        <MemoComp name={name} />
      </div>
    );
  }
}

export default MemoParentComp;

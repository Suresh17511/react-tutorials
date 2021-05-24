import React, {Component} from 'react';
import UpdatedComponent from './hocComponent';

export class ClickCounter extends Component {
  render() {
    const {count, incrementCount} = this.props;
    return (
      <div>
        hello {this.props.name}
        <div>
          <button onClick={incrementCount}>
            {this.props.name} Clicked {count} times
          </button>
        </div>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter, 5);

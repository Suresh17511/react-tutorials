import React, {Component} from 'react';

export class CbRef extends Component {
  constructor(props) {
    super(props);
    this.cbRef = null;
  }
  componentDidMount() {
    this.cbRef.focus();
  }
  render() {
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
    return (
      <div>
        <input type="text" ref={this.setCbRef} />
      </div>
    );
  }
}

export default CbRef;

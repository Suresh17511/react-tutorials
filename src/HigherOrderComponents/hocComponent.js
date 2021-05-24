import React from 'react';
const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        console.log(prevState.count + incrementNumber);
        return {
          count: prevState.count + incrementNumber,
        };
      });
    };
    render() {
      return (
        <div>
          <OriginalComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;

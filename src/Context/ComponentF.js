import React, {Component} from 'react';
import {UserConsumer} from './createContext';

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(user) => {
          return <h2>Hello {user}</h2>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;

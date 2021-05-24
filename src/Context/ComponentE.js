import React, {Component} from 'react';
import ComponentF from './ComponentF';
import UserContext from './createContext';

export class ComponentE extends Component {
  render() {
    return (
      <div>
        <h2>Component E Context {this.context}</h2>
        <ComponentF />
      </div>
    );
  }
}
ComponentE.contextType = UserContext;

export default ComponentE;

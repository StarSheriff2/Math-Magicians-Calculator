import React from 'react';
import Display from './display';
import OtherOperations from './otherOperations';
import Digits from './digits';
import Operators from './operators';
import Equal from './equal';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Calculator-container">
        <Display />
        <OtherOperations />
        <Digits />
        <Operators />
        <Equal />
      </div>
    );
  }
}

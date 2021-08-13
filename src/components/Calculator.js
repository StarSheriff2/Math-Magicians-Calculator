import React from 'react';
import Display from './display';
import OtherOperations from './otherOperations';
import Digits from './digits';
import Operators from './operators';
import Equal from './equal';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    const output = calculate(this.state, buttonName);
    this.updateState(output);
  }

  updateState(newState) {
    this.setState({ ...newState });
  }

  render() {
    const { total, next } = this.state;

    return (
      <div className="Calculator-container">
        <Display
          total={total}
          next={next}
        />
        <OtherOperations handleClick={this.handleClick} />
        <Digits handleClick={this.handleClick} />
        <Operators handleClick={this.handleClick} />
        <Equal handleClick={this.handleClick} />
      </div>
    );
  }
}

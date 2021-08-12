import React from 'react';
import Display from './display';
import OtherOperations from './otherOperations';
import Digits from './digits';
import Operators from './operators';
import Equal from './equal';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  async handleClick(buttonName) {
    await this.setState({ total: buttonName });
    console.log(this.state.total);
  }

  render() {
    const { total } = this.state;
    const { next } = this.state;

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

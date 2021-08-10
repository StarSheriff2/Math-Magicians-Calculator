import React from 'react';
import Display from './display';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Calculator-container">
        <Display />
      </div>
    )
  }
}

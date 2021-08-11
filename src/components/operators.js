import React from 'react';

export default class Operators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Operators-container">
        <button type="button" className="Operators-btn btn" value="/">÷</button>
        <button type="button" className="Operators-btn btn" value="*">×</button>
        <button type="button" className="Operators-btn btn" value="-">−</button>
        <button type="button" className="Operators-btn btn" value="+">+</button>
      </div>
    );
  }
}

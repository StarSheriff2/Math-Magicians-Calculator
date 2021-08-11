import React from 'react';

export default class Digits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Digits-container">
        <button type="button" className="Digits-btn btn" value="7">7</button>
        <button type="button" className="Digits-btn btn" value="8">8</button>
        <button type="button" className="Digits-btn btn" value="9">9</button>
        <button type="button" className="Digits-btn btn" value="4">4</button>
        <button type="button" className="Digits-btn btn" value="5">5</button>
        <button type="button" className="Digits-btn btn" value="6">6</button>
        <button type="button" className="Digits-btn btn" value="1">1</button>
        <button type="button" className="Digits-btn btn" value="2">2</button>
        <button type="button" className="Digits-btn btn" value="3">3</button>
        <button type="button" className="Digits-btn zero-btn btn" value="0">0</button>
        <button type="button" className="Digits-btn btn" value=".">.</button>
      </div>
    );
  }
}

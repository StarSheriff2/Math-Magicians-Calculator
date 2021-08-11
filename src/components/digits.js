import React from 'react';
export default class Digits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Digits-container">
        <button type="button" className="Digits-btn btn">7</button>
        <button type="button" className="Digits-btn btn">8</button>
        <button type="button" className="Digits-btn btn">9</button>
        <button type="button" className="Digits-btn btn">4</button>
        <button type="button" className="Digits-btn btn">5</button>
        <button type="button" className="Digits-btn btn">6</button>
        <button type="button" className="Digits-btn btn">1</button>
        <button type="button" className="Digits-btn btn">2</button>
        <button type="button" className="Digits-btn btn">3</button>
        <button type="button" className="Digits-btn zero-btn btn">0</button>
        <button type="button" className="Digits-btn btn">.</button>
      </div>
    )
  }
};

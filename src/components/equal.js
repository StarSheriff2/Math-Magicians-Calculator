import React from 'react';

export default class Equal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Equal-container">
        <button type="button" className="Equal-btn btn">=</button>
      </div>
    );
  }
}

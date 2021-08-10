import React from 'react';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Display-container">
        <p className="Display-display">0</p>
      </div>
    )
  }
}

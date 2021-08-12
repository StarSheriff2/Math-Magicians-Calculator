import React from 'react';

export default class OtherOperations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Other-Operations-container">
        <button type="button" className="Other-Operations-btn btn" value="AC">AC</button>
        <button type="button" className="Other-Operations-btn btn" value="+/-">+ / -</button>
        <button type="button" className="Other-Operations-btn btn" value="%">%</button>
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';

export default class OtherOperations extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick(e) {
    const { handleClick } = this.props;
    handleClick(e.target.value);
  }

  render() {
    return (
      <div className="Other-Operations-container">
        <button onClick={this.handleClick} type="button" className="Other-Operations-btn btn" value="AC">AC</button>
        <button onClick={this.handleClick} type="button" className="Other-Operations-btn btn" value="+/-">+ / -</button>
        <button onClick={this.handleClick} type="button" className="Other-Operations-btn btn" value="%">%</button>
      </div>
    );
  }
}

OtherOperations.propTypes = { handleClick: PropTypes.func };

OtherOperations.defaultProps = { handleClick: null };

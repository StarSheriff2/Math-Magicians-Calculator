import React from 'react';
import PropTypes from 'prop-types';

export default class Operators extends React.Component {
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
      <div className="Operators-container">
        <button onClick={this.handleClick} type="button" className="Operators-btn btn" value="÷">÷</button>
        <button onClick={this.handleClick} type="button" className="Operators-btn btn" value="x">×</button>
        <button onClick={this.handleClick} type="button" className="Operators-btn btn" value="-">−</button>
        <button onClick={this.handleClick} type="button" className="Operators-btn btn" value="+">+</button>
      </div>
    );
  }
}

Operators.propTypes = { handleClick: PropTypes.func };

Operators.defaultProps = { handleClick: null };

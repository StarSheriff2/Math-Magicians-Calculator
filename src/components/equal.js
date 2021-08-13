import React from 'react';
import PropTypes from 'prop-types';

export default class Equal extends React.Component {
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
      <div className="Equal-container">
        <button onClick={this.handleClick} type="button" className="Equal-btn btn" value="=">=</button>
      </div>
    );
  }
}

Equal.propTypes = { handleClick: PropTypes.func };

Equal.defaultProps = { handleClick: null };

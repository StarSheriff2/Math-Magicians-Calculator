import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.isNull = this.isNull.bind(this);
    this.state = {};
  }

  isNull(total) {
    return (!total) ? 0 : total;
  }

  render() {
    const { total } = this.props;

    return (
      <div className="Display-container">
        <p className="Display-display">{ this.isNull(total).toString() }</p>
      </div>
    );
  }
}

// Display.defaultProps = { total: "0" };

// Display.propTypes = { total: PropTypes.string };

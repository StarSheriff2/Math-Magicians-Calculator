import React from 'react';
import PropTypes from 'prop-types';

const isNull = (prop) => {
  if (!prop) {
    return '0';
  }
  return prop;
};

const current = (total, next) => {
  if (total) {
    return total;
  }
  return isNull(next);
};

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total } = this.props;
    const { next } = this.props;

    return (
      <div className="Display-container">
        <p className="Display-display">{ current(total, next) }</p>
      </div>
    );
  }
}

Display.defaultProps = {
  total: null,
  next: null,
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';

const isNull = (total) => {
  if (!total) {
    return '0';
  }
  return total;
};
export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total } = this.props;

    return (
      <div className="Display-container">
        <p className="Display-display">{ isNull(total) }</p>
      </div>
    );
  }
}

Display.defaultProps = { total: null };

Display.propTypes = { total: PropTypes.string };

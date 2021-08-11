import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentDisplay } = this.props;

    return (
      <div className="Display-container">
        <p className="Display-display">{ currentDisplay.toString() }</p>
      </div>
    );
  }
}

Display.defaultProps = { currentDisplay: 0 };

Display.propTypes = { currentDisplay: PropTypes.number };

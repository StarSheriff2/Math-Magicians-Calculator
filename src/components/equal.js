import React from 'react';
import PropTypes from 'prop-types';

const Equal = (props) => {
  const handleClick = (e) => {
    const { handleClick } = props;
    handleClick(e.target.value);
  };

  return (
    <div className="Equal-container">
      <button onClick={handleClick} type="button" className="Equal-btn btn" value="=">=</button>
    </div>
  );
};

Equal.propTypes = { handleClick: PropTypes.func };

Equal.defaultProps = { handleClick: null };

export default Equal;

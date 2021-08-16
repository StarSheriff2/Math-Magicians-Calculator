import React from 'react';
import PropTypes from 'prop-types';

const Operators = (props) => {
  const handleClick = (e) => {
    const { handleClick } = props;
    handleClick(e.target.value);
  };

  return (
    <div className="Operators-container">
      <button onClick={handleClick} type="button" className="Operators-btn btn" value="÷">÷</button>
      <button onClick={handleClick} type="button" className="Operators-btn btn" value="x">×</button>
      <button onClick={handleClick} type="button" className="Operators-btn btn" value="-">−</button>
      <button onClick={handleClick} type="button" className="Operators-btn btn" value="+">+</button>
    </div>
  );
};

Operators.propTypes = { handleClick: PropTypes.func };

Operators.defaultProps = { handleClick: null };

export default Operators;

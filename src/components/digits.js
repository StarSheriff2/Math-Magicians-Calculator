import React from 'react';
import PropTypes from 'prop-types';

const Digits = (props) => {
  const handleClick = (e) => {
    const { handleClick } = props;
    handleClick(e.target.value);
  };

  return (
    <div className="Digits-container">
      <button onClick={handleClick} type="button" className="Digits-btn btn" value="7">7</button>
      <button onClick={handleClick} type="button" className="Digits-btn btn" value="8">8</button>
      <button onClick={handleClick} type="button" className="Digits-btn btn" value="9">9</button>
      <button onClick={handleClick} type="button" className="Digits-btn btn" value="4">4</button>
      <button onClick={handleClick} type="button" className="Digits-btn btn" value="5">5</button>
      <button onClick={handleClick} type="button" className="Digits-btn btn" value="6">6</button>
      <button onClick={handleClick} type="button" className="Digits-btn btn" value="1">1</button>
      <button onClick={handleClick} type="button" className="Digits-btn btn" value="2">2</button>
      <button onClick={handleClick} type="button" className="Digits-btn btn" value="3">3</button>
      <button onClick={handleClick} type="button" className="Digits-btn zero-btn btn" value="0">0</button>
      <button onClick={handleClick} type="button" className="Digits-btn btn" value=".">.</button>
    </div>
  );
};

Digits.propTypes = { handleClick: PropTypes.func };

Digits.defaultProps = { handleClick: null };

export default Digits;

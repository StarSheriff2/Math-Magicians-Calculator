import React from 'react';
import PropTypes from 'prop-types';

const OtherOperations = (props) => {
  const handleClick = (e) => {
    const { handleClick } = props;
    handleClick(e.target.value);
  };

  return (
    <div className="Other-Operations-container">
      <button onClick={handleClick} type="button" className="Other-Operations-btn btn" value="AC">AC</button>
      <button onClick={handleClick} type="button" className="Other-Operations-btn btn" value="+/-">+ / -</button>
      <button onClick={handleClick} type="button" className="Other-Operations-btn btn" value="%">%</button>
    </div>
  );
};

OtherOperations.propTypes = { handleClick: PropTypes.func };

OtherOperations.defaultProps = { handleClick: null };

export default OtherOperations;

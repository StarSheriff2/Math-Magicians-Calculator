import React, { useState, useEffect } from 'react';
import Display from './display';
import OtherOperations from './otherOperations';
import Digits from './digits';
import Operators from './operators';
import Equal from './equal';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialObj = { total: null, next: null, operation: null };
  const [state, setState] = useState(initialObj);
  const [error, setError] = useState({ status: false });

  const updateState = (newState) => setState((actualState) => ({ ...actualState, ...newState }));

  const errorHandler = () => {
    setError({ status: true });
    setState({ total: 'Invalid operation: Can\'t Divide by Zero', next: null, operation: null });
  };

  useEffect(() => {
    if ('savedInput' in error) {
      setError({ status: false });

      const output = calculate(state, error.savedInput);
      updateState(output);
    }
  }, [error]);

  const handleClick = (buttonName) => {
    if (error.status) {
      setError({ savedInput: buttonName });
      setState(initialObj);
      return;
    }

    let output;
    try {
      output = calculate(state, buttonName);
    } catch (err) {
      errorHandler();
    }
    updateState(output);
  };

  return (
    <div className="page-container calculator-page-container">
      <h2 className="page-title calculator-page-title">Let&apos;s do some Math</h2>
      <div className="Calculator-container">
        <Display
          total={state.total}
          next={state.next}
        />
        <OtherOperations handleClick={handleClick} />
        <Digits handleClick={handleClick} />
        <Operators handleClick={handleClick} />
        <Equal handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;

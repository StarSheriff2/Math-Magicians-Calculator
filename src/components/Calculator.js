import React, { useState } from 'react';
import Display from './display';
import OtherOperations from './otherOperations';
import Digits from './digits';
import Operators from './operators';
import Equal from './equal';
import calculate from '../logic/calculate';

export default function Calculator() {
  const initialObj = { total: null, next: null, operation: null };
  const [state, setState] = useState(initialObj);

  const updateState = (newState) => setState((actualState) => ({ ...actualState, ...newState }));

  const handleClick = (buttonName) => {
    const output = calculate(state, buttonName);
    updateState(output);
  };

  return (
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
  );
}

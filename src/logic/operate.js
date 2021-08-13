import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      const display = document.querySelector('.Display-display');
      display.textContent = 'Invalid Operation: Can\'t divide by zero';
      return null;
    }
  }
  if (operation === '%') {
    return one.mod(two).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}

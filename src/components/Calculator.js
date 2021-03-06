import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const clickHandler = (e) => {
    const { total, next } = state;
    if (!total && !next && e.target.classList[0] === 'arithmetic_operand') {
      return;
    }
    if (!total && !next && e.target.classList[0] === 'other_operators') {
      return;
    }
    setState((objName) => calculate(objName, e.target.dataset.buttonName));
  };

  const displayResult = () => {
    const { total, next, operation } = state;
    let result = null;

    if (total === null && next === null) {
      result = 0;
    } else if (next !== null && total === null) {
      result = next;
    } else if (next !== null && total !== null) {
      if (operation !== null && operation !== undefined) {
        result = `${total} ${operation} ${next}`;
      } else {
        result = total;
      }
    } else if (next === null && total !== null) {
      if (operation !== null && operation !== undefined) {
        result = `${total} ${operation}`;
      } else {
        result = total;
      }
    }
    return result;
  };

  return (
    <div className="calc-container">
      <div className="calc_display">{ displayResult() }</div>
      <div className="int_values" role="button" data-button-name="AC" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>AC</div>
      <div className="other_operators" role="button" data-button-name="+/-" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>+/-</div>
      <div className="other_operators" role="button" data-button-name="%" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>%</div>
      <div className="arithmetic_operand" role="button" data-button-name="÷" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>÷</div>
      <div className="int_values" role="button" data-button-name="1" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>1</div>
      <div className="int_values " role="button" data-button-name="2" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>2</div>
      <div className="int_values " role="button" data-button-name="3" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>3</div>
      <div className="arithmetic_operand" role="button" data-button-name="x" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>x</div>
      <div className="int_values " role="button" data-button-name="4" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>4</div>
      <div className="int_values " role="button" data-button-name="5" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>5</div>
      <div className="int_values " role="button" data-button-name="6" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>6</div>
      <div className="arithmetic_operand" role="button" data-button-name="-" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>-</div>
      <div className="int_values " role="button" data-button-name="7" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>7</div>
      <div className="int_values " role="button" data-button-name="8" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>8</div>
      <div className="int_values " role="button" data-button-name="9" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>9</div>
      <div className="arithmetic_operand" role="button" data-button-name="+" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>+</div>
      <div className="int_values zero" role="button" data-button-name="0" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>0</div>
      <div className="int_values " role="button" data-button-name="." onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>.</div>
      <div className="arithmetic_operand" role="button" data-button-name="=" onClick={clickHandler} onKeyDown={clickHandler} tabIndex={0}>=</div>
    </div>
  );
};

export default Calculator;

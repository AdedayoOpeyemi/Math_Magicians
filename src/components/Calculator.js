import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.displayResult = this.displayResult.bind(this);
  }

  clickHandler(e) {
    this.setState((objName) => calculate(objName, e.target.dataset.buttonName));
  }

  displayResult() {
    const { total, next, operation } = this.state;
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
  }

  render() {
    return (
      <div className="calc-container">
        <div className="calc_display">{ this.displayResult() }</div>
        <div className="int_values" role="button" data-button-name="AC" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>AC</div>
        <div className="int_values" role="button" data-button-name="+/-" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>+/-</div>
        <div className="int_values" role="button" data-button-name="%" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>%</div>
        <div className="arithmetic_operand" role="button" data-button-name="÷" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>÷</div>
        <div className="int_values" role="button" data-button-name="1" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>1</div>
        <div className="int_values " role="button" data-button-name="2" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>2</div>
        <div className="int_values " role="button" data-button-name="3" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>3</div>
        <div className="arithmetic_operand" role="button" data-button-name="x" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>x</div>
        <div className="int_values " role="button" data-button-name="4" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>4</div>
        <div className="int_values " role="button" data-button-name="5" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>5</div>
        <div className="int_values " role="button" data-button-name="6" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>6</div>
        <div className="arithmetic_operand" role="button" data-button-name="-" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>-</div>
        <div className="int_values " role="button" data-button-name="7" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>7</div>
        <div className="int_values " role="button" data-button-name="8" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>8</div>
        <div className="int_values " role="button" data-button-name="9" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>9</div>
        <div className="arithmetic_operand" role="button" data-button-name="+" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>+</div>
        <div className="int_values zero" role="button" data-button-name="0" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>0</div>
        <div className="int_values " role="button" data-button-name="0" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>.</div>
        <div className="arithmetic_operand" role="button" data-button-name="=" onClick={this.clickHandler} onKeyDown={this.clickHandler} tabIndex={0}>=</div>
      </div>
    );
  }
}

export default Calculator;

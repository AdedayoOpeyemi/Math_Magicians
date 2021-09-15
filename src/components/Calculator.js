import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="calc_display">0</div>
        <div className="int_values ">AC</div>
        <div className="int_values ">+/-</div>
        <div className="int_values ">%</div>
        <div className="arithmetic_operand">&#247;</div>
        <div className="int_values ">1</div>
        <div className="int_values ">2</div>
        <div className="int_values ">3</div>
        <div className="arithmetic_operand">&#215;</div>
        <div className="int_values ">5</div>
        <div className="int_values ">6</div>
        <div className="int_values ">7</div>
        <div className="arithmetic_operand">&#x2D;</div>
        <div className="int_values ">1</div>
        <div className="int_values ">2</div>
        <div className="int_values ">3</div>
        <div className="arithmetic_operand">&#43;</div>
        <div className="int_values zero">0</div>
        <div className="int_values ">.</div>
        <div className="arithmetic_operand">=</div>
      </div>
    );
  }
}

export default Calculator;

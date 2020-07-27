import React from "react";
//import { connectAdvanced } from "react-redux";

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      operand1: "",
      operand2: "",
      result: ""
    }
    this.handleChangeOperand1 = this.handleChangeOperand1.bind(this);
    this.handleChangeOperand2 = this.handleChangeOperand2.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }
  handleChangeOperand1(event) {
    this.setState({operand1: event.target.value});
  }

  handleChangeOperand2(event) {
    this.setState({operand2: event.target.value});
  }

  handleClick(event) {
    const operationType = event.target.textContent;
    let result;
    switch(operationType) {
    case 'Add': result = Number(this.state.operand1) + Number(this.state.operand2);
      break;
    case 'Subtract' : result = Number(this.state.operand1) - Number(this.state.operand2);
      break;
    case 'Multiple' : result = Number(this.state.operand1) * Number(this.state.operand2);
      break;
    case 'Divide' : result = Number(this.state.operand1) / Number(this.state.operand2);
      break;
    case 'Clear' : this.setState({operand1: 0, operand2: 0})
      break;
    default:break;
    }
    this.setState({result: result});
  }
  render() {
    return (

      
      <div className="container">
        <div className="row">
          <div className="col-3">
            <input type="number" value={this.state.operand1} onChange={this.handleChangeOperand1} placeholder="Operand 1"></input>
          </div>
          <div className="col-3">
            <input type="number" value={this.state.operand2} onChange={this.handleChangeOperand2} placeholder="Operand 2"></input>
          </div>
          <div className="col-2"><button className="btn btn-block btn-danger" onClick={this.handleClick}>Clear</button></div>
        </div>
        <div className="row my-3">
          <div className="col-2"><button className="btn btn-block btn-secondary" onClick={this.handleClick}>Add</button></div>
          <div className="col-2"><button className="btn btn-block btn-secondary" onClick={this.handleClick}>Subtract</button></div>
          <div className="col-2"><button className="btn btn-block btn-secondary" onClick={this.handleClick}>Multiple</button></div>
          <div className="col-2"><button className="btn btn-block btn-secondary" onClick={this.handleClick}>Divide</button></div>
        </div>
        <div className="row">
          <div className="col-4">
            <input type='number' readOnly={true} value={this.state.result}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
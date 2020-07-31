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
  handleChangeOperand1(e) {
    this.setState({operand1: e.target.value});
  }

  handleChangeOperand2(e) {
    this.setState({operand2: e.target.value});
  }

  handleClick(event) {
    const operationType = event.target.textContent;
    let result;
    switch(operationType) {
    case 'Add': result = Number(this.state.operand1) + Number(this.state.operand2);
      this.setState({result: result});
      break;
    case 'Subtract' : result = Number(this.state.operand1) - Number(this.state.operand2);
      this.setState({result: result});
      break;
    case 'Multiply' : result = Number(this.state.operand1) * Number(this.state.operand2);
      this.setState({result: result});
      break;
    case 'Divide' : result = Number(this.state.operand1) / Number(this.state.operand2);
      this.setState({result: result});
      break;
    case 'Clear' : this.setState({operand1: 0, operand2: 0, result: 0})
      break;
    default:break;
    }
  }
  render() {
    return (

      
      <div className="container">
        <div className="row">
          <div className="col-3">
            <input type="number"  value={this.state.operand1} className="form-control" onChange={this.handleChangeOperand1} placeholder="Operand 1"></input>
          </div>
          <div className="col-3">
            <input type="number" value={this.state.operand2} className="form-control" onChange={this.handleChangeOperand2} placeholder="Operand 2"></input>
          </div>
          <div className="col-2"><button className="btn btn-block btn-danger" onClick={this.handleClick}>Clear</button></div>
        </div>
        <div className="row my-3">
          <div className="col-2"><button className="btn btn-block btn-secondary" onClick={this.handleClick}>Add</button></div>
          <div className="col-2"><button className="btn btn-block btn-secondary" onClick={this.handleClick}>Subtract</button></div>
          <div className="col-2"><button className="btn btn-block btn-secondary" onClick={this.handleClick}>Multiply</button></div>
          <div className="col-2"><button className="btn btn-block btn-secondary" onClick={this.handleClick}>Divide</button></div>
        </div>
        <div className="row">
          <div className="col-4">
            <input type='number' readOnly={true} className="form-control" value={this.state.result} placeholder="Result"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
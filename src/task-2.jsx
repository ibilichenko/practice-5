import React from "react";
import { connectAdvanced } from "react-redux";


class Input extends React.Component {
  render() {
    return (
      <input type={this.props.type} readOnly={this.props.readOnly === "true" ? "readonly" : ""}
        className={this.props.clases} value={this.props.value} pattern="[0-9]" onChange={this.props.onChange}></input>
    )
  }
}
class Button extends React.Component {
  render() {
    return (
      <button className={this.props.clases} onClick={this.props.onClick}>{this.props.name}</button>
    )
  }
}
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
    let result, operand1, operand2;
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
          <div className="col-3"><Input type='text' value={this.state.operand1} onChange={this.handleChangeOperand1}/></div>
          <div className="col-3"><Input type='text' value={this.state.operand2} onChange={this.handleChangeOperand2}/></div>
          <div className="col-2"><Button clases="btn btn-block btn-danger" name="Clear" onClick={this.handleClick}/></div>
        </div>
        <div className="row my-3">
          <div className="col-2"><Button clases="btn btn-block btn-secondary" name="Add" onClick={this.handleClick} /></div>
          <div className="col-2"><Button clases="btn btn-block btn-secondary" name="Subtract" onClick={this.handleClick} /></div>
          <div className="col-2"><Button clases="btn btn-block btn-secondary" name="Multiple" onClick={this.handleClick} /></div>
          <div className="col-2"><Button clases="btn btn-block btn-secondary" name="Divide" onClick={this.handleClick} /></div>
        </div>
        <div className="row">
          <div className="col-4">
            <Input type='number' readOnly="true" value={this.state.result}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
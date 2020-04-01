import React, { Component } from "react";

export class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 100,
      inputVal: 0
    };
  }
  getInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  checkVal = () => {
    let convert = Number(this.state.inputVal);
    console.log(convert, "Convert");

    let diff = convert - Math.round(Math.random() * this.state.limit);
    if (diff === 0) {
      alert("Ureka");
      this.setState({ limit: this.state.limit + 100 });
      console.log(this.state.limit, "LIMIT");
    }
    console.log(diff);
  };
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.inputVal}
          onChange={this.getInput}
          name="inputVal"
        ></input>
        <button onClick={this.checkVal} className="btn">
          Check
        </button>
      </div>
    );
  }
}

export default Input;

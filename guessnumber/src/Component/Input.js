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

    let diff = Math.round(Math.random() * this.state.limit) - convert;

    let Balance = this.setState({ ...this.state.limit });

    if (diff === 0) {
      alert("Correct");

      this.setState({ limit: this.state.limit + 100 });
    } else if (diff >= 1 && diff <= 4) {
      alert("Hot");
      return Balance;
    } else if (diff >= 5 && diff <= 14) {
      alert("Warm");
      return Balance;
    } else if (diff >= 15) {
      alert("Cold");
      return Balance;
    }
    console.log("Limit", this.state.limit);
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

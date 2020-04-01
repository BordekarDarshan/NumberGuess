import React, { Component } from "react";
import InputUI from "../UI/InputUI";
export class Input extends Component {
  constructor(props) {
    super(props);
    this.Temperature = undefined;
    this.state = {
      limit: 100,
      inputVal: 0
    };
  }
  getInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkVal = () => {
    let UserInput = Number(this.state.inputVal);
    let Difference = Math.round(Math.random() * this.state.limit) - UserInput;

    if (Difference === 0) {
      alert("Correct");
      this.setState({ limit: this.state.limit + 100 });
    } else if (Difference >= 1 && Difference <= 4) {
      this.setState({ ...this.state.limit });

      this.Temperature = "Hot";
      return this.Temperature;
    } else if (Difference >= 5 && Difference <= 14) {
      this.setState({ ...this.state.limit });

      this.Temperature = "Warm";
      return this.Temperature;
    } else if (Difference >= 15) {
      this.setState({ ...this.state.limit });

      this.Temperature = "Cold";
      return this.Temperature;
    }
  };

  render() {
    return (
      <React.Fragment>
        <InputUI
          Value={this.state.inputVal}
          OnChangeEvent={this.getInput}
          OnClickEvent={this.checkVal}
        ></InputUI>
        {console.log(this.Temperature)}
      </React.Fragment>
    );
  }
}

export default Input;

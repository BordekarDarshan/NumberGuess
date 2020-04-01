import React, { Component } from "react";
import InputUI from "../UI/InputUI";
import { Convert } from "../Declarative/Covert";
export class Input extends Component {
  constructor(props) {
    super(props);
    this.Temperature = undefined;
    this.state = {
      limit: 100,
      inputVal: ""
    };
  }
  getInput = e => {
    const { name, value } = e.target;
    try {
      this.setState({ [name]: parseInt(value) });
    } catch (e) {
      this.setState({ [name]: 0 });
    }
  };

  checkVal = () => {
    let UserInput = Convert(this.state.inputVal);
    console.log(UserInput, "dd");

    let Difference = Math.round(Math.random() * this.state.limit) - UserInput;

    if (Difference === 0) {
      this.setState({ limit: this.state.limit + 100 });
      this.Temperature = "Correct";
      return this.Temperature;
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
          Limit={this.state.limit}
          Value={this.state.inputVal}
          OnChangeEvent={this.getInput}
          OnClickEvent={this.checkVal}
          Temperature={this.Temperature}
        ></InputUI>
      </React.Fragment>
    );
  }
}

export default Input;

import React from "react";
import Cold from "../Upload/Cold.png";
import Warm from "../Upload/Warm.png";
import Hot from "../Upload/Hot.png";
import Correct from "../Upload/Correct.png";
function InputUI(props) {
  const { Value, OnChangeEvent, OnClickEvent, Temperature, Limit } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="mt-4 text-white FontChange">Guess The Number</h4>
          <input
            type="number"
            value={Value}
            onChange={OnChangeEvent}
            className="form-control col-lg-5"
            name="inputVal"
          ></input>
          <button onClick={OnClickEvent} className="btn btn-info  mt-3">
            Start Guessing
          </button>
        </div>
      </div>
      <div className="mt-5">
        {Temperature === "Cold" && (
          <img src={Cold} className="img-fluid" alt="Cold"></img>
        )}
        {Temperature === "Warm" && (
          <img src={Warm} className="img-fluid" alt="Warm"></img>
        )}
        {Temperature === "Hot" && (
          <img src={Hot} className="img-fluid" alt="Hot"></img>
        )}
        {Temperature === "Correct" && (
          <img src={Correct} className="img-fluid" alt="Correct"></img>
        )}
      </div>
      <div className="row mt-3">
        <div className="col-lg-12">
          {Limit === 100 && (
            <h4 className="text-white FontChange">
              You have to Guess the Number between 1 to {Limit}
            </h4>
          )}
          {Limit > 100 && (
            <h4 className="text-white FontChange">
              <span className="d-block">Correct!!!!!</span>
              Now, guess the Number between 1 To {Limit}
            </h4>
          )}
        </div>
      </div>
      <div className="row">
        <div
          class="card text-white fixed-bottom bg-info mb-3 ml-3"
          style={{ "max-width": "18rem" }}
        >
          <div class="card-header">Note</div>
          <div class="card-body">
            <p class="card-text FontChange">
              Note - You Can Choose any number as a input, But if you select the
              number between the{" "}
              <span style={{ color: "black" }}>Given Limits</span>, you will get
              the better results .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputUI;

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
          <input
            type="number"
            value={Value}
            onChange={OnChangeEvent}
            className="form-control mt-4"
            name="inputVal"
          ></input>
          <button onClick={OnClickEvent} className="btn btn-warning  mt-2">
            Start Guessing
          </button>
        </div>
      </div>
      <div className="mt-5">
        {Temperature === "Cold" && <img src={Cold} alt="Cold"></img>}
        {Temperature === "Warm" && <img src={Warm} alt="Warm"></img>}
        {Temperature === "Hot" && <img src={Hot} alt="Hot"></img>}
        {Temperature === "Correct" && <img src={Correct} alt="Correct"></img>}
      </div>
      <div className="row">
        {Limit === 100 && <h1>Initial Limit Is .... {Limit}</h1>}
        {Limit > 100 && <h1>Correct!!!!! Now Limit Is .... {Limit}</h1>}
      </div>
    </div>
  );
}

export default InputUI;

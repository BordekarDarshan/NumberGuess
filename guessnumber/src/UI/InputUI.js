import React from "react";

function InputUI(props) {
  const { Value, OnChangeEvent, OnClickEvent } = props;
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
    </div>
  );
}

export default InputUI;

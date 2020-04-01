import React from "react";

function InputUI(props) {
  const { Value, OnChangeEvent, OnClickEvent } = props;
  return (
    <div>
      <input
        type="number"
        value={Value}
        onChange={OnChangeEvent}
        name="inputVal"
      ></input>
      <button onClick={OnClickEvent} className="btn">
        Check
      </button>
    </div>
  );
}

export default InputUI;

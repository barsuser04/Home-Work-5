import React from "react";
import "./UserInput.css"

const UserInput = ({id, value, labelName, inputType, onChange}) => {
  return (
    <div className="label-div">
      <label htmlFor={id}>{labelName}</label>
      <input value={value} type={inputType} onChange={onChange} id={id} />
    </div>
  );
};

export default UserInput;

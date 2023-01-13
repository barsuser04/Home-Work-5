import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import UserInput from "../../UI/Input/UserInput";
import "./UserForm.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const enabled = name.length > 0 && year.length > 0;
  const saveHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      name,
      year,
    };
    props.onNewExpenseAdd(expenseDate);
    setName("");
    setYear("");
     };
  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const yearInputChangeHandler = (event) => {
    setYear(event.target.value);
  };

  return (
    <form className="label-input-form">
      <UserInput
        id="name"
        labelName="Name:"
        inputType="text"
        value={name}
        onChange={nameInputChangeHandler}
      />

      <UserInput
        labelName="Your age:"
        inputType="number"
        id="year"
        value={year}
        onChange={yearInputChangeHandler}
      />
      <div className="button_div">
        <Button title="Add user" value={name} disabled={!enabled} onClick={ saveHandler}/>
      </div>
    </form>
  );
};

export default UserForm;
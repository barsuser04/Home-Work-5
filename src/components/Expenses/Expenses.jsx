import React from "react";
import UserItem from "../AddedUsers/UserItem";
import "./Expenses.css"

const Expenses = ({ expenses }) => {
  return (
    <ul className="ul-ka">
      {expenses.map((elem,index) => {
        return (
          <UserItem
            name={elem.name}
            year={elem.year}
            key={index}
          />
        );
      })}
    </ul>
  );
};

export default Expenses;
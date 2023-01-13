import React from "react";
import "./UserItem.css";

const UserItem = ({ name, year }) => {
  const old = "years old";
  return (
    <div className="user-div">
      <div className="item">
        <p className="user-p">{name}</p>
        <p className="user-p"> {`( ${year}  ${old} )`}</p>
      </div>
    </div>
  );
};
export default UserItem;

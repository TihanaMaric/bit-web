import "./ListView.css";
import { getEmail } from "../../../services/getEmail";
import { getBirthday } from "../../../services/getBirthday";
import React from "react";

export const ListView = ({ user, index }) => {
  let clName = "";
  let cName = "";

  if (user.gender === "female") {
    cName = "female";
  }

  if (index === 0) {
    clName = "first";
  }

  const getName = (userName) => {
    let firstLetterUpperCase =
      userName.charAt(0).toUpperCase() + userName.slice(1);
    return firstLetterUpperCase;
  };

  return (
    <div className={`list ${cName} ${clName}`}>
      <div className="picture">
        <img src={user.picture.medium} alt="profile" />
      </div>
      <div className="data">
        <p>
          {getName(user.name.first)} {getName(user.name.last)}
        </p>
        <p>
          <i className="fa fa-envelope" aria-hidden="true"></i> email:{" "}
          {getEmail(user.email)}
        </p>
        <p>
          <i className="fa fa-birthday-cake" aria-hidden="true"></i>{" "}
          {getBirthday(user.dob.date)}
        </p>
      </div>
    </div>
  );
};
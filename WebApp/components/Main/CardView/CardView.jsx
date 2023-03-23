import React from "react";
import "./CardView.css";
import { getEmail } from "../../../services/getEmail";
import { getBirthday } from "../../../services/getBirthday";

export const CardView = ({ user }) => {
  let cName = "";

  if (user.gender === "female") {
    cName = "female";
  }

  return (
    <div className={`grid ${cName} mt-5`}>
      <div className="gridpicture">
        <img src={user.picture.large} alt="profile" />
      </div>
      <div className="griddata">
        <p className="name">{user.name.first}</p>
        <p className="email">{getEmail(user.email)}</p>
        <p>Birth date: {getBirthday(user.dob.date)}</p>
      </div>
    </div>
  );
};
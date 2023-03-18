import React, { useState } from "react";
import "./Form.css";

export  const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAlert = () => {
    alert(`Username: ${username}, password: ${password}`);
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };
  return (
  
  <div>
     <h1>Login</h1>
     <input type = "text" id = "username" onChange = {handleUsernameChange} value = {username} placeholder = "username" />
     <input type = "text" id = "password" onChange = {handlePasswordChange} value = {password} placeholder = "password" />
       <br />

       <button onClick = {handleAlert} className = "login">Login</button>
       <br />
       <button onClick={handleReset} className = "resret">reset</button>
  </div>

)
};
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "./CSS/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [loginDataRecords, setLoginDataRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // // const currentLogin = loginDetails;
    console.log("Login Details ", loginDetails);
    setLoginDataRecords([...loginDataRecords]);
    navigate("/dashboard");
  };

  // const handleSubmit = useCallback((e) => {
  //   e.preventDefault();
  //   console.log("Login Details ", loginDetails);
  //   setLoginDataRecords([...loginDataRecords, loginDetails]);
  //   console.log("login records", loginDataRecords);
  //   navigate("/dashboard");
  // });

  const handleInput = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="email-div">
          <label>Email: </label>
          <input
            className="email-input"
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
            value={loginDetails.email}
            onChange={handleInput}
          />
        </div>
        <div className="password-div">
          <label>Password:</label>
          <input
            className="password"
            placeholder="password"
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            required
            value={loginDetails.password}
            onChange={handleInput}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;

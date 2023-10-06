import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../redux/sessionReducer/sessionActions";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(name));
    
  };
  return (
    <div className="session-form">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <h3>Log in introducing your username</h3>
      <br/>
      <label>
        Username: 
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input className="submit" type="submit" value="Submit" />
    </form>
    <br/>
    <Link to="/sign_up" className="session-link">Sign Up</Link>
    </div>
  );
}

export default Login;
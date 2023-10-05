import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { signUp } from "../redux/sessionReducer/sessionActions";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signUp(name));
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <h3>Registrate introducing a new username</h3>
      <br/>
      <label>
        Username:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <br/>
    <Link to="/sign_in">Login</Link>
    </>
  );
}

export default SignUp;

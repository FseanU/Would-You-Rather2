import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

function SignIn() {
  const [authed, setAuthed] = useState("sarahedo");
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = (e) => {
    const value = e.target.value;
    setAuthed(value);
  };

  const handleSubmit = (e) => {
    const userId = authed;

    e.preventDefault();
    if (userId) {
      dispatch(setAuthedUser(userId));
    }
  };

  const from = location.state || { from: { pathname: "/" } };

  if (authedUser) {
    return <Redirect push to={from} />;
  }

  return (
    <div className="sign-in-container mt-72">
      <img
        src={require(`../images/login_illustration.png`)}
        alt="login illustration"
      />
      <div className="sign-in">
        <h1>
          Sign in <br />
          to play
        </h1>
        <form onSubmit={handleSubmit}>
          <select value={authed} onChange={handleChange} className="mt-32 p-8">
            {Object.keys(users).map((id) => (
              <option key={id} value={id}>
                {users[id].name}
              </option>
            ))}
          </select>
          <button type="submit" className="mt-16">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

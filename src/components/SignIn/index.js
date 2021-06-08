import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { setAuthedUser } from "../../actions/authedUser";
import * as Styled from "./style";

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
    <Styled.Container>
      <Styled.SignInImg
        src={require(`../../images/login_illustration.png`)}
        alt="login illustration"
      />
      <Styled.SignInCon>
        <Styled.Title>
          Sign in <br />
          to play
        </Styled.Title>
        <Styled.Form onSubmit={handleSubmit}>
          <Styled.Select value={authed} onChange={handleChange}>
            {Object.keys(users).map((id) => (
              <Styled.Option key={id} value={id}>
                {users[id].name}
              </Styled.Option>
            ))}
          </Styled.Select>
          <Styled.Button type="submit">Sign In</Styled.Button>
        </Styled.Form>
      </Styled.SignInCon>
    </Styled.Container>
  );
}

export default SignIn;

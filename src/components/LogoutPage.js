import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { logOut } from "../actions/authedUser";

const LougoutPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logOut());
  });

  return <Redirect to="/" />;
};

export default LougoutPage;

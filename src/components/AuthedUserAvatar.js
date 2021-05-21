import React from "react";
import { NavLink } from "react-router-dom";

const AuthedUserAvatar = (props) => {
  const { name, avatar } = props;

  return (
    <div className="nav-user">
      <li>
        <img src={require(`../${avatar}`)} alt="Your avatar" />
        <p className="pl-8">{name}</p>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </div>
  );
};

export default AuthedUserAvatar;

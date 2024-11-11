import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={logo} alt="logo" width="140" />
    </Link>
  );
};

export default Logo;

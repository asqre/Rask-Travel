import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        src="https://rasktravel.com/assets/Rask_logo.png"
        alt="logo"
        width="140"
      />
    </Link>
  );
};

export default Logo;

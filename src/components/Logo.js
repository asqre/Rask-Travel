import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import mobileLogo from "../assets/mobile_logo.png";
import useScreenWidth from "../hooks/useScreenWidth";

const Logo = () => {
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth < 640;

  return (
    <Link to={"/"}>
      <img src={isMobile ? mobileLogo : logo} alt="logo" width="120" />
    </Link>
  );
};

export default Logo;

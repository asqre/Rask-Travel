import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      className={`flex flex-col min-h-screen`}
      style={{
        maxWidth: "1280px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Navbar />
      <main className={`flex-grow mt-[72px]`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

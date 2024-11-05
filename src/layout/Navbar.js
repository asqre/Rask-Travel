import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "../components/Logo";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(navItems[2]);

  const showMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const hideMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname !== selectedNavItem.path) {
      setSelectedNavItem(
        navItems.find((item) => item.path === location.pathname)
      );
    }
  }, [location.pathname, selectedNavItem.path]);

  return (
    <div
      id="nav-container"
      className="relative bg-cover bg-center h-[685px] w-full"
      style={{
        backgroundImage: `url(${selectedNavItem.backgroundImage})`,
        paddingTop: isMobileMenuOpen ? "30px" : "40px",
      }}
    >
      <div
        id="mobile-menu-burger-container"
        className="flex items-center p-4 lg:hidden"
      >
        <div className="menu-burger cursor-pointer" onClick={showMobileMenu}>
          <CiMenuBurger />
        </div>
        <div className="w-full flex justify-center">
          <Logo />
        </div>
      </div>

      <nav className="z-50">
        <ul className="hidden lg:flex flex-row items-center justify-evenly">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="hover:text-black py-2 transition-all duration-300 ease-in-out"
                onClick={() => setSelectedNavItem(item)}
              >
                <h2
                  className={`${
                    selectedNavItem.name === item.name && "underline"
                  }`}
                  style={{
                    fontSize: "12px",
                    fontWeight:
                      selectedNavItem.path === item.path ? "bolder" : "400",
                    textTransform: "uppercase",
                    letterSpacing: "2.5px",
                    paddingBottom: "2px",
                    textUnderlineOffset: "4px",
                  }}
                >
                  {item.name}
                </h2>
              </Link>
            </li>
          ))}
        </ul>

        {isMobileMenuOpen && (
          <ul className="flex flex-col items-center justify-evenly lg:hidden bg-white w-full p-4 absolute top-0 left-0 z-50">
            <button onClick={hideMobileMenu} className="mb-4 self-end">
              Close
            </button>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-black font-medium py-2 transition-all duration-300 ease-in-out"
                  onClick={() => {
                    setSelectedNavItem(item);
                    hideMobileMenu();
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

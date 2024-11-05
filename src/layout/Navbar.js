import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
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
        <div
          className="menu-burger cursor-pointer pl-[10px]"
          onClick={showMobileMenu}
        >
          <CiMenuFries color="var(--color-primary)" size={40} />
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
                    textUnderlineOffset: "8px",
                  }}
                >
                  {item.name}
                </h2>
              </Link>
            </li>
          ))}
        </ul>

        {isMobileMenuOpen && (
          <ul className="flex flex-col items-center justify-evenly lg:hidden bg-white w-full p-4 absolute top-0 left-0 z-50 gap-5">
            <button
              onClick={hideMobileMenu}
              className="mb-4 self-start pt-[30px]"
            >
              <RxCross1 size={40} color="var(--color-gray)" />
            </button>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => {
                    setSelectedNavItem(item);
                    hideMobileMenu();
                  }}
                >
                  <h2
                    style={{
                      fontSize: "12px",
                      fontWeight: "bolder",
                      letterSpacing: "2.5",
                    }}
                  >
                    {item.name}
                  </h2>
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

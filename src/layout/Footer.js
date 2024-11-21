import React from "react";
import { Link } from "react-router-dom";
import { ImLinkedin } from "react-icons/im";
import {
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="ml-[8px] mb-[3px]"
        style={{
          borderBottom: "1px solid #ddd",
        }}
      />
      <div
        className="mr-[8px] mb-[30px]"
        style={{
          borderBottom: "1px solid #ddd",
        }}
      />

      <div className="p-[30px]">
        <div className="flex flex-col">
          <div className="flex justify-center mb-[10px] md:hidden">
            <Link to="/contact">
              <h3>DUBAI</h3>
            </Link>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="footer-left-column">
            <h3>
              <Link to="/leisure-unveiled">Leisure Unveiled</Link>
            </h3>
            <h3>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </h3>
          </div>

          <div className="footer-center-column hidden md:flex">
            <h3>
              <Link to="/contact">DUBAI</Link>
            </h3>
          </div>

          <div className="footer-right-column">
            <h3
              className="footer-rask-link"
              style={{
                fontWeight: "bold",
              }}
            >
              <a href="mailto:mail@iskytravels.com">mail@iskytravels.com</a>
            </h3>

            <div className="flex flex-row gap-5 mt-[10px]">
              <a
                href="https://t.me/iskytravel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={18} />
              </a>
              <a
                href="https://www.instagram.com/iskytravels/profilecard/?igsh=MTZ3ZWttYWIxMmMzZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/infinite-sky-travels-llc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImLinkedin size={18} />
              </a>
              <a
                href="https://wa.me/971525601314"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="footer-address"
          style={{
            fontSize: "9px",
            textAlign: "center",
            padding: "20px",
            color: "var(--color-gray)",
          }}
        >
          Al Suq - Al Kabeer, Fahidi Street, Dubai, United Arab Emirate
        </div>
      </div>
    </footer>
  );
};

export default Footer;

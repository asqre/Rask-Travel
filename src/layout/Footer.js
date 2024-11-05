import React from "react";
import { Link } from "react-router-dom";
import { ImLinkedin, ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";

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
            <Link href="/contact">
              <h3>LONDON</h3>
            </Link>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="footer-left-column">
            <h3>
              <a href="/love">What we Love</a>
            </h3>
            <h3>
              <a href="/press">Press Room &amp; Testimonials</a>
            </h3>
            <h3>
              <a href="/terms">Terms &amp; Conditions</a>
            </h3>
          </div>

          <div className="footer-center-column hidden md:flex">
            <h3>
              <a href="/contact">LONDON</a>
            </h3>
          </div>

          <div className="footer-right-column">
            <h3
              className="footer-rask-link"
              style={{
                fontWeight: "bold",
              }}
            >
              <a href="mailto:info@rasktravel.com">info@rasktravel.com</a>
            </h3>

            <div className="flex flex-row gap-5 mt-[10px]">
              <a href="https://www.facebook.com/rasktravel">
                <ImFacebook2 size={18} />
              </a>
              <a href="https://www.instagram.com/rasktravel/">
                <FaSquareInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/rask-travel/">
                <ImLinkedin size={18} />
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
          RASK Travel, 9 Appold St, 8th Floor, London EC2A 2AP, United Kingdom
        </div>
      </div>
    </footer>
  );
};

export default Footer;

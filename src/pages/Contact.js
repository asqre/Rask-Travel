import React from "react";
import Layout from "../layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-[537px] pt-[60px] m-auto mb-[180px]">
        <div
          className="w-full h-full relative"
          style={{
            border: "1px solid #eee",
          }}
        >
          <div
            className="absolute top-[5px] left-[4px] w-full h-full"
            style={{
              border: "1px solid #eee",
              pointerEvents: "none",
            }}
          />

          <a
            // href="https://www.google.com/maps/place/9+Appold+St,+London+EC2A+2AP,+UK/"
            target="_blank"
            rel="noreferrer"
            className="px-[80px] py-[50px] flex flex-col gap-2 text-center bg-[#FFFDD0]"
          >
            <h1>Al Suq</h1>
            <h6>Al Kabeer</h6>
            <h6>Fahidi Street</h6>
            <h6>Dubai</h6>
            <h6>United Arab Emirates</h6>
            <a href="mailto:mail@iskytravels.com">
              <h6 className="font-bold underline">mail@iskytravels.com</h6>
            </a>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

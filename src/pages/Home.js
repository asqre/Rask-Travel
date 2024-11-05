import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import LoveComponent from "../components/LoveComponent";
import { loveData } from "../data";

const Home = () => {
  return (
    <Layout>
      <div className="home-hero-container px-[15px] mt-[100px]">
        <h4 className="mx-auto w-full max-w-[640px]" style={{}}>
          RASK Travel is an international luxury travel agency headquartered in
          London. We specialise in tailor-made travel arrangements across the
          globe, for private and corporate clients.
          <br />
          <br />
          Our team of professional travel designers and coordinators will go
          above and beyond to create the perfect journey, weekend getaway,
          destination wedding, corporate incentive, global conference, and much
          more.
        </h4>

        <div className="flex flex-row justify-center items-center mt-[20px] gap-10">
          <Link to="/leisure" className="btn btn-primary">
            <h3 className="italic font-bold underline">Leisure</h3>
          </Link>
          <Link to="/corporate" className="btn btn-secondary">
            <h3 className="italic font-bold underline">Corporate</h3>
          </Link>
        </div>
      </div>

      <div className="home-hero-container px-[15px] mt-[100px]">
        <h2
          style={{
            textAlign: "center",
          }}
        >
          THIS MONTH WE LOVE...
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-[50px]">
          {loveData.map((item, ind) => (
            <LoveComponent {...item} key={ind} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

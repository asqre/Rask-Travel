import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import LoveComponent from "../components/LoveComponent";
import { loveData } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GiftOfTravel from "../components/GiftOfTravel";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

        <div className="w-full m-auto mb-[100px]">
          <Slider {...settings}>
            {loveData.map((item, ind) => (
              <LoveComponent {...item} key={ind} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="gift-of-travel px-[15px]">
        <GiftOfTravel />
      </div>
    </Layout>
  );
};

export default Home;

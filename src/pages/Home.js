import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import LoveComponent from "../components/LoveComponent";
import { loveData, partnersData, testimonialData } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GiftOfTravel from "../components/GiftOfTravel";
import Testimonial from "../components/Testimonial";

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

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
    initialSlide: 0,
  };

  return (
    <Layout>
      <div className="home-hero-container px-[15px] mt-[100px]">
        <h4 className="mx-auto w-full max-w-[640px]" style={{}}>
          I-SKY Travels is an international luxury travel agency headquartered
          in Dubai, United Arab Emirates. We specialize in tailor-made travel
          arrangements across the globe, for private clientele & respective
          families.
          <br />
          <br />
          Our dedicated team of professional travel designers and coordinators
          are committed to exceeding expectations by crafting the ideal journey,
          vacation, or special event holiday for you and your family from the
          very beginning.
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

        <div className="w-full m-auto mb-[100px] mt-[50px]">
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

      <div className="home-our-client px-[15px]">
        <h2
          style={{
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          Our Client Say
        </h2>

        <div className="w-full m-auto mb-[100px]">
          <Slider {...settings2}>
            {testimonialData.map((item, ind) => (
              <Testimonial {...item} key={ind} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="home-partner px-[15px] my-[100px]">
        <h2
          style={{
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          Our Partners
        </h2>

        <div className="flex flex-wrap gap-4 justify-center pt-[50px]">
          {partnersData.map((partner, index) => (
            <img src={partner.img} alt="partner logo" key={index} width="100" />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

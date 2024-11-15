import React, { useState } from "react";
import Layout from "../layout/Layout";
import { caseStudies } from "../data";
import TravelComponent from "../components/TravelComponent";
import Slider from "react-slick";

const CorporateTravel = () => {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);

  const selectCase = (caseIndex) => {
    setSelectedCase(caseStudies[caseIndex]);
  };

  var settings3 = {
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
      <div className="flex flex-col items-center gap-[100px] my-[50px] w-full">
        <h4 className="max-w-[640px] px-[30px]">
          As we step into 2025, I-SKY is at the forefront of curating
          unparalleled travel experiences. Our mission is to showcase the best
          locations, luxurious properties, meticulously crafted itineraries, and
          trending hotspots for our discerning clientele. With a finger on the
          pulse of global travel trends, we ensure that every journey is not
          just a trip, but a memorable adventure. From the serene beaches of the
          Seychelles to the cultural richness of Kyoto, I-SKY is dedicated to
          providing the ultimate in leisure and luxury travel, ensuring you
          experience the very best the year has to offer.
          <br />
          <br />
          <br />
          <a href="mailto:mail@iskytravels.com">
            <h3 className="italic font-bold underline text-center">
              In need of assistance? Get in touch with the team.
            </h3>
          </a>
        </h4>

        <h2 className="mb-[-50px] px-5">Our Work</h2>

        <div className="flex flex-row justify-between gap-[10px] sm:gap-[50px] sm:px-[30px]">
          <div className="flex flex-col gap-[15px] max-w-[120px] text-left">
            {caseStudies.map((cases, index) => (
              <h3
                className={`text-start cursor-pointer opacity-[0.5] transition-[0.5s] hover:opacity-[1] ${
                  selectedCase.id === cases.id && "opacity-[1]"
                }`}
                onClick={() => selectCase(index)}
              >
                {cases.title}
              </h3>
            ))}
          </div>

          <div className="w-[60vw] sm:w-[50vw] overflow-hidden">
            <Slider {...settings3}>
              {selectedCase.images.map((item, ind) => (
                <TravelComponent {...item} key={ind} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CorporateTravel;

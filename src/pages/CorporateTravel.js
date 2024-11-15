import React, { useState } from "react";
import Layout from "../layout/Layout";
import { caseStudies } from "../data";

const CorporateTravel = () => {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);

  const selectCase = (caseIndex) => {
    setSelectedCase(caseStudies[caseIndex]);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center gap-[100px] my-[50px] w-full px-[30px]">
        <h4 className="max-w-[640px]">
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

        <h2 className="mb-[-50px]">Our Work</h2>

        <div className="flex flex-row justify-between gap-[50px]">
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

          <div className="flex flex-col md:flex-row gap-[15px]">
            <img
              id="case-image"
              className="w-[400px] h-[480px]"
              alt={selectedCase.title}
              src={selectedCase.image}
            />

            <div className="flex flex-col gap-[20px] max-w-[340px]">
              <h3 className="uppercase">{selectedCase.location}</h3>
              <div className="text-[28px]">{selectedCase.title}</div>
              <h3 dangerouslySetInnerHTML={{ __html: selectedCase.details }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CorporateTravel;

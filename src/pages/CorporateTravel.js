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
          Coordinating individual and group travel can be stressful and time
          consuming. RASK is here to simplify the process and allow you to focus
          on your core business activities, knowing your executives, employees
          and guests are in safe hands. We recognise that no two travellers or
          two trips are alike and handle each and every one with the utmost care
          and attention to detail.
          <br />
          <br />
          <br />
          What we bring to the table is invaluable to companies of all sizes,
          from ensuring you get your favourite seat on-board to choosing the
          perfect setting for a corporate retreat and managing events – small or
          large. Our services include individual and group travel bookings,
          event and budget management, ground logistics, concierge services, and
          much more. Most of all, our multinational team has the know-how needed
          to coordinate travel across the globe and provide you with added
          value, competitive rates, special benefits, and peace of mind.
          <br />
          <br />
          <br />
          <a href="mailto:miriam@rasktravel.com?cc=jonas@rasktravel.com">
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

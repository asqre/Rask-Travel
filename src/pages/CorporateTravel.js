import React from "react";
import Layout from "../layout/Layout";

const CorporateTravel = () => {
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
      </div>
    </Layout>
  );
};

export default CorporateTravel;

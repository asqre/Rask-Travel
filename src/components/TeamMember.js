import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TeamMember = (props) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:px-[30px]">
      <img
        src="https://rasktravel.com/data/assets/b261dbf58e8d1a87e5f9b9720521c4fc.jpg"
        className="h-full w-full lg:w-[340px]"
        alt="team members"
      />

      <div className="flex flex-col flex-grow gap-[60px] lg:ml-[80px] mx-[15px]">
        <div className="flex flex-row justify-between mt-[30px]">
          <div className="flex flex-col">
            <h1>Jonas Rask Eilersen</h1>
            <h3>Founding Director</h3>
          </div>
          <a
            href="mailto:jonas@rasktravel.com?cc=miriam@rasktravel.com"
            className="flex flex-row items-center justify-center gap-2"
          >
            <h3 className="font-semibold">Contact Jonas</h3>
            <FaArrowRightLong color="var(--color-primary)" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
          <div className="flex flex-col gap-[20px] max-w-[300px]">
            <div>
              <h2>Born in</h2>
              <h3>Fredericia, Denmark</h3>
            </div>

            <div>
              <h2>RASKAL SINCE</h2>
              <h3>2011</h3>
            </div>

            <div>
              <h2>MOST MEMORABLE EXPERIENCES</h2>
              <h3>Desert camping in the Libyan desert</h3>
            </div>

            <div>
              <h2>FAVOURITE DRINK</h2>
              <h3>Whiskey Sour</h3>
            </div>
          </div>

          <div className="flex flex-col gap-[20px] max-w-[300px]">
            <div>
              <h2>SPOKEN LANGUAGES</h2>
              <h3>Danish, German, French, English</h3>
            </div>

            <div>
              <h2>FAVOURITE DESTINATIONS</h2>
              <h3>Tokyo, Portland (OR), Kazakhstan</h3>
            </div>

            <div>
              <h2>BUCKET LIST</h2>
              <h3>
                Ethiopia, Crossing Russia on the Trans-Siberian, Ride the Seven
                Stars train in Kyushu
              </h3>
            </div>

            <div>
              <h2>CAN'T TRAVEL WITHOUT</h2>
              <h3>Noise cancelling headphones</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

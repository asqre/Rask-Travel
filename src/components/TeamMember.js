import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TeamMember = ({ member }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:px-[30px]">
      <img
        src={member.photo}
        className="h-auto w-full lg:w-[340px]"
        alt="team members"
      />

      <div className="flex flex-col flex-grow gap-[60px] lg:ml-[80px] mx-[15px]">
        <div className="flex flex-row justify-between mt-[30px]">
          <div className="flex flex-col">
            <h1>{member.name}</h1>
            <h3>{member.jobTitle}</h3>
          </div>
          <a
            href={member.mailto}
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
              <h3>{member.bornIn}</h3>
            </div>

            <div>
              <h2>RASKAL SINCE</h2>
              <h3>{member.raskal}</h3>
            </div>

            <div>
              <h2>MOST MEMORABLE EXPERIENCES</h2>
              <h3>{member.experiences}</h3>
            </div>

            <div>
              <h2>FAVOURITE DRINK</h2>
              <h3>{member.drink}</h3>
            </div>
          </div>

          <div className="flex flex-col gap-[20px] max-w-[300px]">
            <div>
              <h2>SPOKEN LANGUAGES</h2>
              <h3>{member.languages}</h3>
            </div>

            <div>
              <h2>FAVOURITE DESTINATIONS</h2>
              <h3>{member.destination}</h3>
            </div>

            <div>
              <h2>BUCKET LIST</h2>
              <h3>{member.bucketList}</h3>
            </div>

            <div>
              <h2>CAN'T TRAVEL WITHOUT</h2>
              <h3>{member.travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

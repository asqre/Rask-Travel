import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TeamMember = ({ member }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:px-[30px]">
      <img
        src={member.photo}
        className="h-auto w-full lg:w-[340px] object-contain"
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
            <h3 className="font-semibold">Contact {member.name}</h3>
            <FaArrowRightLong color="var(--color-primary)" />
          </a>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
          <div className="flex flex-col gap-[20px] max-w-[300px]">
            <div>
              <h2>BASED</h2>
              <h3>{member.location}</h3>
            </div>

            <div>
              <h2>LANGUAGES SPOKEN</h2>
              <h3>{member.tonguesTied}</h3>
            </div>

            <div>
              <h2>FAMILY TRIP HOTSPOTS</h2>
              <h3>{member.familyFunZones}</h3>
            </div>

            
          </div>

          <div className="flex flex-col gap-[20px] max-w-[300px]">
            <div>
              <h2>BUCKET LIST DREAMS</h2>
              <h3>{member.bucketListWishes}</h3>
            </div>

            <div>
              <h2>TRAVEL TIP</h2>
              <h3>{member.travelTip}</h3>
            </div>

            <div>
              <h2>SOLO ADVENTURE SPOTS</h2>
              <h3>{member.soloEscapadeHavens}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

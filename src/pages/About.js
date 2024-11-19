import React, { useState } from "react";
import Layout from "../layout/Layout";
import { teamMembers } from "../data";
import TeamMember from "../components/TeamMember";

const About = () => {
  const [activeMember, setActiveMember] = useState(1);

  const switchPerson = (id) => {
    setActiveMember(id);
  };

  const activeMemberData = teamMembers.find(
    (member) => member.id === activeMember
  );

  return (
    <Layout>
      <div className="flex flex-col gap-[100px] my-[50px]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-col gap-[30px] max-w-[600px] p-[35px]">
            <h2 className="text-center">Inception</h2>
            <h3>
              Welcome to <span className="italic">I-SKY</span>, the launchpad
              for your travel dreams! As Infinite Sky Travels LLC based in
              Dubai, United Arab Emirates we specialize in crafting personalized
              leisure getaways that align with the latest travel trends.
              <br />
              <br />
              Our team, fueled by a passion for travel, brings experience from
              leading hospitality and tourism companies to create unforgettable
              memories tailored to your preferences.
              <br />
              <br />
              Whether you're seeking adventure, relaxation, or cultural
              experiences, <span className="italic">I-SKY</span> is here to
              design the perfect itinerary for you. Let's embark on your epic
              journey together!
            </h3>
          </div>

          <div className="flex flex-col gap-[30px] max-w-[600px] p-[35px]">
            <h2 className="text-center italic">
              <span className="italic">I-SKY</span> Today
            </h2>
            <h3>
              Staying updated with the constantly evolving travel trends is
              essential at <span className="italic">I-SKY</span>. We are always
              traveling to discover new destinations and products, ensuring we
              offer our clients firsthand knowledge and experiences.
              <br />
              <br />
              We engage in the world's top luxury travel trade shows, connect
              with prominent industry experts, and design outstanding
              itineraries thanks to our extensive network of over{" "}
              <strong>2.6 million hotels and 200 airlines worldwide</strong>,
              setting us apart for you and your loved ones!
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-[50px] mb-[100px]">
          <h2 className="text-center">Meet The Team</h2>

          <div className="flex flex-wrap items-center justify-center gap-10">
            {teamMembers.map((member, index) => (
              <div
                className="relative w-[56px] h-[60px] sm:w-[106px] sm:h-[100px]"
                key={index}
              >
                <img
                  src="https://rasktravel.com/assets/about_button.png"
                  alt="member button"
                  className="w-full h-full absolute"
                />
                <h4
                  className={`absolute inset-0 flex items-center justify-center hover:font-bold hover:underline cursor-pointer text-[12px] sm:text-[17px] ${
                    activeMember === member.id && "font-bold"
                  }`}
                  onClick={() => switchPerson(member.id)}
                >
                  {member.initials}
                </h4>
              </div>
            ))}
          </div>

          {activeMemberData && <TeamMember member={activeMemberData} />}
        </div>
      </div>
    </Layout>
  );
};

export default About;

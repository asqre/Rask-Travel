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
            <h2 className="text-center">A FAMILY HISTORY</h2>
            <h3>
              Welcome to I-SKY, the launchpad for your travel dreams! As
              Infinite Sky Travels LLC based in Dubai, United Arab Emirates we
              specialize in crafting personalized leisure getaways that align
              with the latest travel trends.
              <br />
              <br />
              Our team, fueled by a passion for travel, brings experience from
              leading hospitality and tourism companies to create unforgettable
              memories tailored to your preferences.
              <br />
              <br />
              Whether you're seeking adventure, relaxation, or cultural
              experiences, I-SKY is here to design the perfect itinerary for
              you. Let's embark on your epic journey together!
              {/* Rasmus Christian Rask was born on the island of Funen, Denmark, in
              1787. A professor of literary history, he was sent on a{" "}
              <strong>round-the-world expedition</strong> to learn and
              understand the languages of the East. After mastering these and
              exploring the most far-flung destinations, he went on to become
              one of Denmark’s most famous scholars and a world-renowned
              philologist. 200 years later, Jonas Rask Eilersen followed in his
              ancestor’s footsteps and established <strong>i-sky Travel</strong>
              , your gateway to the world. */}
            </h3>
          </div>

          <div className="flex flex-col gap-[30px] max-w-[600px] p-[35px]">
            <h2 className="text-center">RASK TODAY</h2>
            <h3>
              Staying updated with the constantly evolving travel trends is
              essential at I-SKY. We are always traveling to discover new
              destinations and products, ensuring we offer our clients firsthand
              knowledge and experiences.
              <br />
              <br />
              We engage in the world's top luxury travel trade shows, connect
              with prominent industry experts, and design outstanding
              itineraries thanks to our extensive network of over 2.6 million
              hotels and 200 airlines worldwide, setting us apart for you and
              your loved ones!
              {/* Keeping up with the ever-changing travel trends is key at RASK.
              We’re constantly on the road exploring new destinations and
              products, to ensure we provide first-hand knowledge and
              experiences to our clients. We attend the world’s top luxury
              travel trade shows, including{" "}
              <strong>
                <a
                  href="https://www.iltm.com/cannes/en-gb.html"
                  className="underline"
                >
                  {" "}
                  ILTM Cannes
                </a>
                ,{" "}
                <a
                  href="https://purelifeexperiences.com/"
                  className="underline"
                >
                  {" "}
                  PURE Life Experiences
                </a>
                ,{" "}
                <a href="https://www.lemiami.com/" className="underline">
                  {" "}
                  LE Miami
                </a>
                ,
                <a href="http://www.travellermade.com/" className="underline">
                  {" "}
                  Essence of Luxury by Traveller Made,
                </a>{" "}
                and the{" "}
                <a href="https://www.iglta.org/" className="underline">
                  {" "}
                  IGLTA Global Convention.
                </a>
              </strong>{" "}
              We’re proud founding members of Traveller Made, the world’s most
              exclusive hand-picked network of skilled{" "}
              <strong>luxury travel designers</strong> dedicated to providing
              unique and exclusive bespoke journeys to travellers worldwide. */}
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

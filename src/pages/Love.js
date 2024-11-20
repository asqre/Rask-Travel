import React, { useState } from "react";
import Layout from "../layout/Layout";
import { caseStudies, loveData } from "../data";
import LoveComponent from "../components/LoveComponent";

const Love = () => {
  const [visibleItems, setVisibleItems] = useState(3);

  const handleSeeMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center gap-[50px] my-[50px] w-full px-[30px]">
        <h4 className="max-w-[640px] my-[60px]">
          With so many fabulous travel products out there, it can be hard
          finding just the right one. We’ve therefore decided to share what’s
          trending at RASK, month by month; what we love, are inspired by, and
          can’t wait for you to try.
        </h4>

        <div className="w-full m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {loveData.slice(0, visibleItems).map((item, ind) => (
            <LoveComponent {...item} key={ind} />
          ))}
        </div>

        {visibleItems < loveData.length && (
          <div className="flex flex-row mb-[100px] w-full mx-auto items-center justify-center">
            <div
              className="flex-grow"
              style={{
                borderBottom: "1px solid #eee",
              }}
            />
            <h3
              className="underline flex-shrink-0 font-bold px-5 cursor-pointer"
              onClick={handleSeeMore}
            >
              See more
            </h3>
            <div
              className="flex-grow"
              style={{
                borderBottom: "1px solid #eee",
              }}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Love;

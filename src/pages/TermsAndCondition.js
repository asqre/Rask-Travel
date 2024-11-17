import React from "react";
import Layout from "../layout/Layout";
import { termsAndCondition } from "../data";

const TermsAndCondition = () => {
  const jumpTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center gap-[50px] mb-[50px] w-full px-[30px]">
        <h2>TERMS & CONDITIONS</h2>

        <div className="flex flex-col md:flex-row gap-10 justify-between w-full">
          <div className="flex flex-col">
            {termsAndCondition.map((term, ind) => {
              return (
                <a key={ind} onClick={() => jumpTo(term.id)}>
                  <h3
                    className="text-[12px] font-bold underline hover:no-underline cursor-pointer text-left"
                    style={{
                      lineHeight: "1.7",
                    }}
                  >
                    {term.id}. {term.heading}
                  </h3>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-8 flex-grow">
            {termsAndCondition.map((term, ind) => {
              return (
                <div
                  key={ind}
                  id={term.id}
                  className="flex flex-col gap-2 scroll-mt-8"
                >
                  <h4 className="text-[16px] font-bold text-left">
                    {term.id}. {term.heading}
                  </h4>

                  <h3
                    className="text-left"
                    dangerouslySetInnerHTML={{ __html: term.details }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndCondition;

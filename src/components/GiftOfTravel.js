import React from "react";

const GiftOfTravel = () => {
  return (
    <div className="max-w-[847px] w-full mx-auto mt-[40px] py-[60px]">
      <div
        className="max-w-[1110px] w-full h-full relative"
        style={{
          border: "1px solid #eee",
        }}
      >
        <div
          className="absolute top-[5px] left-[4px] w-full h-full"
          style={{
            border: "1px solid #eee",
            pointerEvents: "none",
          }}
        />

        <div className="px-[80px] py-[50px] flex flex-col gap-5">
          <h2
            style={{
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            THE GIFT OF TRAVEL
          </h2>

          <div className="flex flex-col items-center md:flex-row md:justify-between gap-5">
            <h3>
              Give your friends and family a small gift that will go a long way,
              or as far as they want to go. Not sure about the next birthday,
              anniversary, or Christmas present? Leave it to us. In just a few
              quick steps, a tailor-made gift box can be on its way to an
              address of your choice. Choose any amount over GBP 200 for the
              recipient to spend as they please with RASK, or surprise them with
              something you’ve always known they wanted to do.
              <br />
              <br />
              Email{" "}
              <strong className="underline">
                <a href="mailto:info@rasktravel.com">info@rasktravel.com</a>
              </strong>{" "}
              for more information and purchases.
              <br />
              Terms & conditions apply.
            </h3>

            <img
              src="https://rasktravel.com/assets/giftbox.jpg"
              alt="gift"
              className="w-[170px] h-[170px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftOfTravel;

import React from "react";

const FlexBox = ({ images, hoverText = "images" }) => {
  return (
    <div className="w-full sm:w-[80%] md:w-1/3 flex flex-col gap-5 mx-auto">
      {images.map((image, index) => (
        <div className="relative group w-full h-auto" key={index}>
          <img
            src={image.src}
            alt="leisure activity"
            className="w-full h-auto object-contain"
          />

          <div className="absolute inset-0 bg-white bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-black capitalize text-lg font-semibold">
              {hoverText}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlexBox;

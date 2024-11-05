import React from "react";

const FlexBox = ({ images }) => {
  return (
    <div className="w-full sm:w-[80%] md:w-1/3 flex flex-col gap-5 mx-auto">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt="gallery"
          className="w-full h-auto object-contain"
        />
      ))}
    </div>
  );
};

export default FlexBox;

import React from "react";
import { galleryImages } from "../data";
import FlexBox from "./FlexBox";

const Gallery = () => {
  const images1 = [];
  const images2 = [];
  const images3 = [];

  galleryImages.forEach((image, index) => {
    if (index % 3 === 0) images1.push(image);
    else if (index % 3 === 1) images2.push(image);
    else images3.push(image);
  });

  return (
    <div className="flex flex-col md:flex-row md:justify-center gap-6 pb-[100px]">
      <FlexBox images={images1} />
      <FlexBox images={images2} />
      <FlexBox images={images3} />
    </div>
  );
};

export default Gallery;

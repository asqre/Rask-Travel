import React from "react";
import { galleryImages } from "../data";
import FlexBox from "./FlexBox";

const Gallery = () => {
  const chunkSize = Math.ceil(galleryImages.length / 3);

  const images1 = galleryImages.slice(0, chunkSize);
  const images2 = galleryImages.slice(chunkSize, chunkSize * 2);
  const images3 = galleryImages.slice(chunkSize, chunkSize * 3);

  return (
    <div className="flex flex-col md:flex-row md:justify-center gap-6 pb-[100px]">
      <FlexBox images={images1} />
      <FlexBox images={images2} />
      <FlexBox images={images3} />
    </div>
  );
};

export default Gallery;

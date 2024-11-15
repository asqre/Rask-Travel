import React from "react";

const TravelComponent = (props) => {
  return (
    <div className="flex relative">
      <img
        src={props.img}
        alt={props.name}
        className="h-[409px] object-cover w-full"
      />
      <span className="absolute bottom-0 right-0 text-white font-bold m-2">
        {props.imgName}
      </span>
    </div>
  );
};

export default TravelComponent;

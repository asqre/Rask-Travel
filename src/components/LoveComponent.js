import React from "react";

const LoveComponent = (props) => {
  return (
    <div className="mx-[10px] flex flex-col gap-[20px]">
      <img
        src={props.img}
        alt={props.title}
        className="object-cover w-[100%] h-[324px]"
      />

      <h4>{props.title}</h4>

      <h3 dangerouslySetInnerHTML={{ __html: props.description }} />
    </div>
  );
};

export default LoveComponent;

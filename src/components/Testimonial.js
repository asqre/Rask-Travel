import React from "react";

const Testimonial = (props) => {
  return (
    <div className="mx-[10px] flex flex-col gap-[30px] pt-[50px]">
      <h5>{props.feedback}</h5>

      <h5
        style={{
          fontWeight: "bold",
        }}
      >
        {props.profession}
      </h5>
    </div>
  );
};

export default Testimonial;

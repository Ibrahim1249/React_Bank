import React from "react";

import DiscreteSlider  from "./Range";

function Detail() {
  return (
    <>
      <div className="content">
        <p>Home Value</p>
        <p>$ 1000</p>
        <DiscreteSlider />
      </div>
    </>
  );
}

export default Detail;

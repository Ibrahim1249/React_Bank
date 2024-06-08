import React from "react";

import DiscreteSlider  from "./Range";

function Detail() {
  return (
    <>
      <div className="content">
        <p>Home Value</p>
        <p>$ 1000</p>
        <DiscreteSlider />
        <div className="change">
            <p>$1000</p>
            <p>$10000</p>
        </div>
      </div>
    </>
  );
}

export default Detail;

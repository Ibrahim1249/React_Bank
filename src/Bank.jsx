
import { useState } from "react";
import Detail from "./Detail";
import Chart from "./Chart";
import OptionSelect from "./OptionSelect";

function Bank() {

    const [tenure, setTenure] = useState(5);

    const handleChange = (event) => {
        setTenure(event.target.value);
    };
  return (
    <>
      <div className="container">
        <div className="left-container">
            <Detail />
            <Detail />
            <Detail />
            <Detail />
            <OptionSelect tenure={tenure} setTenure={setTenure} handleChange={handleChange}/>
        </div>

        <div className="right-container">
          <h3>Monthly Payment: $ 1000 </h3>
          <Chart />
        </div>
      </div>
    </>
  );
}

export default Bank;


import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import DiscreteSlider  from "./Range";
import { useState } from "react";

import Chart from "./Chart";

function Bank() {

    const [tenure, setTenure] = useState(5);

    const handleChange = (event) => {
        setTenure(event.target.value);
    };
  return (
    <>
      <div className="container">
        <div className="left-container">
          <div className="content">
            <p>Home Value</p>
            <p>$ 1000</p>
           <DiscreteSlider/>
          </div>
          <div className="content">
            <p>Down Payment</p>
            <p>$ 1000</p>
            <DiscreteSlider/>
          </div>
          <div className="content">
            <p>Loan Amount</p>
            <p>$ 1000</p>
            <DiscreteSlider/>
          </div>
          <div className="content">
            <p>Interest Rate</p>
            <p>% 5</p>
            <DiscreteSlider/>
          </div>
          <div className="content">
            <Box >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tenure}
                  label="Age"
                    onChange={handleChange}
                >
                  <MenuItem value={5}>5 Years</MenuItem>
                  <MenuItem value={10}>10 Years</MenuItem>
                  <MenuItem value={15}>15 Years</MenuItem>
                  <MenuItem value={20}>20 Years</MenuItem>
                  <MenuItem value={25}>25 Years</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
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

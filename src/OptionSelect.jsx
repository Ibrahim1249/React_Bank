
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


function OptionSelect({tenure , setTenure , handleChange}) {
  return (
   <>
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
   </>
  )
}

export default OptionSelect
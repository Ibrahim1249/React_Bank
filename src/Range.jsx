
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



 function DiscreteSlider() {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        // getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={10}
        max={110}
      />
    </Box>
  );
}

export default DiscreteSlider;
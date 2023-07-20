import { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { DataContext } from "../../context/DataContext";
import style from "./menu.module.css";

function valuetext(value) {
  return `${value} Páginas`;
}

export const PageSlider = () => {
  const { selectedPageRange, setSelectedPageRange } = useContext(DataContext);

  const handleSliderChange = (e, newValue) => {
    setSelectedPageRange(newValue);
  };

  return (
    <Box sx={{ width: 150 }} className={style.pageSlider}>
      <h4>Filrar por páginas:</h4>

      <Slider
        value={selectedPageRange}
        defaultValue={0}
        onChange={handleSliderChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={1000}
      />
    </Box>
  );
};

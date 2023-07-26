import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import style from "./menu.module.css";

export const PageSlider = ({ filterIcon }) => {
  const { selectedPageRange, setSelectedPageRange } = useContext(DataContext);

  const handleSliderChange = (e) => {
    setSelectedPageRange(parseInt(e.target.value));
  };

  return (
    <div className={style.pageRangeContainer}>
      <div className={style.titleContainer}>
        <h4 className={style.pageSliderH4}>{filterIcon} Páginas:</h4>
      </div>
      <div className={style.sliderInputContainer}>
        <input
          step="10"
          type="range"
          min="0"
          max="1000"
          value={selectedPageRange}
          className={style.slider}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

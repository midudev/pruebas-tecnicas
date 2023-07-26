import React, { useState } from "react";
import Slider from "rc-slider";

export const PageFilter = ({ totalPages, onChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleSliderChange = (value) => {
    setCurrentPage(value);
    onChange(value);
  };

  return (
    <div>
      <h2>Filter by Pages:</h2>
      <Slider
        min={1}
        max={totalPages}
        value={currentPage}
        onChange={handleSliderChange}
      />
      <p>Current Page: {currentPage}</p>
    </div>
  );
};

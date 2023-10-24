import { useState } from "react";

const RangeInput = ({
  label,
  onChange,
  max,
  min = 0,
  className = "range-input",
}) => {
  const [value, setValue] = useState(max);
  const step = Math.round((max * 2) / 100);
  const handleRangeChange = (e) => {
    setValue(e.target.value);
    onChange({ min: 0, max: e.target.value });
  };

  return (
    <label className={`${className}`}>
      <span className={`${className}__label`}>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={handleRangeChange}
        className={`${className}__input`}
        value={value}
      />
      <div className={`${className}__values`}>
        <span className={`${className}__min`}>{min}</span>
        <span className={`${className}__value`}>{value}</span>
      </div>
    </label>
  );
};
export default RangeInput;

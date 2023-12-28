import { memo } from "react";
import PropTypes from "prop-types";

// styles
import "./styles.css";

function Slider({ handleRange, value, max, min, className }) {
  return (
    <div className={`range ${className}`}>
      <input
        type="range"
        value={value}
        max={max}
        min={min}
        onChange={handleRange}
      />
      <p className="alter-text">+{value}</p>
    </div>
  );
}

Slider.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  className: PropTypes.string,
  handleRange: PropTypes.func,
};

const SliderMemo = memo((props) => <Slider {...props} />, arePropsEqual);

SliderMemo.displayName = "Slider";

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.handleRange === newProps.handleRange &&
    oldProps.value === newProps.value &&
    oldProps.max === newProps.max &&
    oldProps.min === newProps.min &&
    oldProps.className === newProps.className
  );
}

export default SliderMemo;

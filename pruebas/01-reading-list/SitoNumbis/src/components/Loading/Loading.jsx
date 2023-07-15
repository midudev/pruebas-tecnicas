import PropTypes from "prop-types";

// styles
import "./style.css";

const Loading = (props) => {
  const { type, className, strokeColor } = props;

  return (
    <div
      className={`flex w-full h-full items-center justify-center type-${type}} ${className}`}
    >
      <div className="loader-container">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              className={`path ${strokeColor}`}
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="4"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

Loading.defaultProps = {
  strokeColor: "stroke-primary",
};

Loading.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  strokeColor: PropTypes.string,
};

export default Loading;

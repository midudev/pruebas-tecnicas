import PropTypes from "prop-types";
import { useId } from "react";

export function Select({ label, options, defaultValue, className = "", onChange }) {
  const id = useId();

  return (
    <>
      {label && (
        <label htmlFor={id} className={className}>
          {label}
        </label>
      )}
      <select
        name={id}
        id={id}
        defaultValue={defaultValue}
        className="w-full"
        onChange={onChange}
      >
        {options.map((opt, i) => (
          <option value={opt} key={i}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

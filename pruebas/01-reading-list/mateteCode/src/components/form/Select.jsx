const Select = ({
  label,
  onChange,
  data,
  className = "select",
  defaultValue = 0,
}) => {
  const handleSelectChange = (e) => {
    onChange(data[e.target.value]);
  };

  return (
    <label className={`${className}`}>
      <span className={`${className}__label`}>{label}</span>
      <select
        className={`${className}__select`}
        defaultValue={defaultValue}
        onChange={handleSelectChange}
      >
        {data.map((opt, idx) => (
          <option key={idx} value={idx}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
};
export default Select;

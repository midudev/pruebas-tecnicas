import React from "react";

function Selector({ field, record, object, setSelected, selected }) {
  let options = [
    "",
    ...new Set(
      object
        .map((e) => e[record][field])
        .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    ),
  ];

  //console.log(options)
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <select
        name="selector"
        id="selector"
        onChange={handleChange}
        value={selected}
      >
        {options.map((option) => (
          <option value={option} key={Math.random()}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default Selector;

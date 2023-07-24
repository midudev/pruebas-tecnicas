import { useState, useEffect, useRef } from "react";

const TitleEditor = ({ title, changeTitle }) => {
  const [titleValue, setTitleValue] = useState(title);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        inputRef.current.blur();
      }}
    >
      <input
        type="text"
        value={titleValue}
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
        ref={inputRef}
        onBlur={() => {
          changeTitle(titleValue);
        }}
      />
    </form>
  );
};

export default TitleEditor;

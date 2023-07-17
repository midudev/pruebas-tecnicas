import { useState, useEffect } from "react";
import { useDebounce } from "use-lodash-debounce";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// components
import SimpleInput from "../../SimpleInput/SimpleInput";

// styles
import styles from "./styles.module.css";

function SearchWrapper() {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 200);

  const search = (toSearch) => {
    console.log(toSearch);
  };

  useEffect(() => {
    if (debouncedSearch.length) search(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <SimpleInput
      className={styles.main}
      leftIcon={
        <FontAwesomeIcon
          icon={faSearch}
          className="rounded-full text-dark-alt-text absolute top-[50%] left-2 -translate-y-[50%]"
        />
      }
      inputProps={{
        className: "bg-dark-bg rounded-3xl pl-8 pr-3 py-1",
        value: searchInput,
        type: "search",
        onChange: (e) => setSearchInput(e.target.value),
      }}
    />
  );
}

export default SearchWrapper;

import { useState } from "react";

export default function useDebounce() {
  const [debounceSearch, setDebounceSearch] = useState<NodeJS.Timeout | null>(
    null
  );

  function debounce(func: () => void, delay: number) {
    if (debounceSearch !== null) {
      clearTimeout(debounceSearch);
    }

    const timeout = setTimeout(() => {
      func()
    }, delay)

    setDebounceSearch(timeout);
  }

  return debounce;
}
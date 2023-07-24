import { useState } from "react";

export default function usePages() {
  const [pages, setPages] = useState(0);

  const handlePagesRange = (e) => setPages(e.target.value);

  return { pages, handlePagesRange };
}

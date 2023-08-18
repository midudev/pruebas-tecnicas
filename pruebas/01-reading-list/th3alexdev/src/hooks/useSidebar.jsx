import { useState } from "react";

export const useSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return [showSidebar, toggleSidebar];
};

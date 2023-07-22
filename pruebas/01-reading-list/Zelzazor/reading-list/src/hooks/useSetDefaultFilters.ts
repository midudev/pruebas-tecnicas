import { useEffect } from "react";
import { useStore } from "../store";

export const useSetDefaultFilters = () => {
  const resetFiltersToDefault = useStore((state) => state.resetFiltersToDefault);
  useEffect(() => {
    resetFiltersToDefault();
  }, [])
};

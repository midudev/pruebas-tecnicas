import { useFilters } from "@/hooks";
import { FilterType } from "@/types";
import { useMemo } from "react";
import { TbX } from "react-icons/tb";

type Badge = Array<{label: string, value: string}>

const Badges: React.FC = () => {
  const { remove, getAll } = useFilters();

  const badges: Badge = useMemo(()=>{
    const activeFilters = getAll();
    if (!activeFilters) {
      return [];
    }

    return activeFilters.map((filter) => {
      const key = Object.keys(filter)[0] as string;
      return {
        label: key,
        value: filter[key] as string,
      }
    });
  }, [getAll]);

  const handleRemove = (key: string) => {
    remove(key as FilterType);
  }

  return (
    <div className="flex gap-2 w-full overflow-x-auto py-2">

      {badges.map(({label, value}) => (
        <button
          key={label}
          className="px-2 py-1 border border-gray-300 rounded-full hover:bg-rose-50 hover:text-rose-400 hover:border-rose-400 focus:outline-none transition-colors"
          onClick={() => handleRemove(label)}
          >
          <div className="flex items-center gap-2 ">
            <span className="text-gray-500 text-sm">{label.toUpperCase()}:</span>
            <span className="text-gray-700 text-sm"> {value}</span>
            <TbX className="w-2 h-2" />
          </div>
        </button>
      ))}
    </div>
  );
};

export default Badges;

import { isSubstring } from "@/helpers";
import { useEffect, useMemo, useState } from "react";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  selected?: string;
  options: string[];
  onSelected: (genre: string) => void;
}

const Select: React.FC<SelectProps> = ({
  label,
  selected,
  options,
  onSelected,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(selected || '');

  const toggleSelect = () => setIsOpen(!isOpen);

  const handleSelection = (value: string) => {
    onSelected(value);
    toggleSelect();
  };

  const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.custom-select')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    }
  }, []);

  const filteredOptions = useMemo(() => {
    return [...options]
      .filter((option) => isSubstring(option, value));
  }, [options, value]);

  return (
    <div 
      className="
        custom-select
        relative 
        w-40 h-10
        rounded-md border border-slate-300
        bg-white text-gray-500
        hover:border-slate-400 focus-within:border-slate-400
        cursor-pointer
        transition-colors duration-200
      "
      {...props}
    >
      <div className="relative w-full top-1/2 -translate-y-1/2 pl-3 pr-6" onClick={toggleSelect}>
        <input
          type="text"
          name=""
          id="GenreSelector"
          placeholder={label}
          className="
            w-full h-full
            outline-none
          "
          value={value}
          autoComplete="off"
          onChange={(e) => setValue(e.target.value)}
        />
        {isOpen
          ? <TbChevronUp className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          : <TbChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        }
      </div>
      {isOpen && (
        <ul className="absolute z-10 top-full mt-2 left-0 w-full bg-white border border-slate-300 rounded-md shadow-md overflow-hidden">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="px-3 py-2 hover:bg-slate-100 transition-colors"
              onClick={() => handleSelection(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;

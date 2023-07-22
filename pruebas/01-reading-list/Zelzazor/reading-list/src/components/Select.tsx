import { useId } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  title: string;
  onChange: (value: string) => void;
}

export const Select = ({ options, value, onChange, title }: SelectProps) => {
  const id = useId();
  return (
    <div className="flex gap-4 items-baseline w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <select
        id={id}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={value === option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

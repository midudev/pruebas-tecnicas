import { useId, useState } from 'react';
import { SelectArgs } from './Interfaces';

export default function useSelect({ onChange }: SelectArgs) {
  const [value, setValue] = useState<string>('');

  const id = useId();

  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const opt = ev.target.value;
    setValue(opt);

    if (onChange) onChange(opt);
  };

  const selectProps: React.AllHTMLAttributes<HTMLSelectElement> = {
    id,
    value,
    name: id,
    onChange: handleChange,
  };

  return { selectProps };
}

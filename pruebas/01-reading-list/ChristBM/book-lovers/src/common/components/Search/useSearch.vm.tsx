import { useId, useState } from 'react';
import { SearchArgs } from './Interfaces';

export default function useSearch({ searchOpts, onChange }: SearchArgs) {
  const [searchBy, setSearchBy] = useState<string>(searchOpts[0]);
  const [text, setText] = useState<string>('');

  const id = useId();

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = ev.target.value;
    setText(inputText);

    if (onChange) onChange({ searchBy, inputText });
  };

  const searchProps: React.AllHTMLAttributes<HTMLInputElement> = {
    id,
    type: searchBy === 'year' ? 'number' : 'text',
    name: id,
    value: text,
    placeholder: `Searching by ${searchBy}`,
    onChange: handleChange,
  };

  const selectProps: React.AllHTMLAttributes<HTMLSelectElement> = {
    value: searchBy,
    onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => setSearchBy(ev.target.value),
  };

  return { searchProps, selectProps };
}

import React, { useId, useState } from 'react';
import { InputRangeArgs } from './Interfaces';

export default function useInputRange({
  minVal,
  maxVal,
  step,
  onChange,
}: InputRangeArgs) {
  const [value, setValue] = useState(1500);

  const id = useId();

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(ev.target.value, 10);
    setValue(parsedValue);

    if (onChange) onChange(parsedValue);
  };

  const inputRangeProps: React.AllHTMLAttributes<HTMLInputElement> = {
    id,
    value,
    step,
    name: id,
    min: minVal,
    max: maxVal,
    type: 'range',
    onChange: handleChange,
  };

  return { inputRangeProps };
}

'use client';

import Text from '@commonComponents/Text/Text';

import { InputRangeProps } from './Interfaces';
import useInputRange from './useInputRange.vm';
import styles from './InputRange.module.css';

export default function InputRange({
  label = 'filter by page',
  minVal = 0,
  maxVal = 1500,
  step = 10,
  onChange,
}: InputRangeProps) {
  const { inputRangeProps } = useInputRange({
    minVal,
    maxVal,
    step,
    onChange,
  });

  return (
    <div className={styles.container}>
      <label htmlFor={inputRangeProps.id} className={styles.label}>
        <Text
          tag="p"
          paragraphStyle="labelLarge"
          text={label}
          className={styles.label_text}
        />

        <Text
          tag="p"
          paragraphStyle="labelSmall"
          text={`(${inputRangeProps.value})`}
          className={styles.value_text}
        />

        <div className={styles.slide_container}>
          <input
            data-testid="input-range"
            type={inputRangeProps.type}
            id={inputRangeProps.id}
            name={inputRangeProps.name}
            min={inputRangeProps.min}
            max={inputRangeProps.max}
            step={inputRangeProps.step}
            value={inputRangeProps.value}
            onChange={inputRangeProps.onChange}
            className={styles.range}
          />
        </div>
      </label>
    </div>
  );
}

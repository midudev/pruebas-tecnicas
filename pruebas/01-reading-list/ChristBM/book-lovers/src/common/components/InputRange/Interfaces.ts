export type InputRangeProps = {
  label?: string;
  minVal?: number;
  maxVal?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export type InputRangeArgs = {
  minVal?: number;
  maxVal?: number;
  step?: number;
  onChange?: (value: number) => void;
}

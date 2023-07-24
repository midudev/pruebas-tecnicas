export type SelectProps = {
  label?: string;
  options?: string[];
  firstOptText?: string;
  onChange?: (value: string) => void;
}

export type SelectArgs = {
  onChange?: (value: string) => void;
}

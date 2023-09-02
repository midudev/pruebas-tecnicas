export type SearchProps = {
  label?: string;
  searchOpts?: string[];
  onChange?: ({ searchBy, inputText }: { searchBy: string; inputText: string; }) => void;
};

export type SearchArgs = {
  searchOpts: string[];
  onChange?: ({ searchBy, inputText }: { searchBy: string; inputText: string; }) => void;
};

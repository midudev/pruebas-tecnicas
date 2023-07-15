// STORE
export type Store = {
  perPage: number;
  page: number;
  changePage: (number) => void;
};

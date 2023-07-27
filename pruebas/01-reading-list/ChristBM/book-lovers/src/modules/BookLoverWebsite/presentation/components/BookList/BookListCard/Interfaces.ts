export type BookListCardProps = {
  cover: string;
  id: number;
  addBtnText?: string;
  isAdded?: boolean;
  onAddCard?: React.MouseEventHandler<HTMLButtonElement>;
}

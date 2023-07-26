export type ReadingListCardProps = {
  cover: string;
  onRemoveCard?: React.MouseEventHandler<HTMLButtonElement>;
  increasePriority: () => void;
  decreasePriority: () => void;
}

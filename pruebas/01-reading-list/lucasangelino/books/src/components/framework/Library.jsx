import { ReadingList } from "./ReadingList";
import { AvailableBooks } from "./AvailableBooks";

export const Library = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 sm: px-5 gap-4">
      <AvailableBooks />
      <ReadingList />
    </div>
  );
};

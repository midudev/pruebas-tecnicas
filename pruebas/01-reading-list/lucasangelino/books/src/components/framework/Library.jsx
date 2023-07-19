import { ReadingList } from "./ReadingList";
import { AvailableBooks } from "./AvailableBooks";

export const Library = () => {
  return (
    <div className="grid grid-cols-4">
      <AvailableBooks />
      {/* <ReadingList /> */}
    </div>
  );
};

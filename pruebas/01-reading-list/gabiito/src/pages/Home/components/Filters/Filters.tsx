import GenreFilter from "./GenreFilter";
import Badges from "./Badges";

const Filters: React.FC = () => {

  return (
    <div className="flex flex-col gap-4 my-4">
      <div className="flex gap-4">
        <GenreFilter />
      </div>
      <Badges />
    </div>
  );
};

export default Filters;

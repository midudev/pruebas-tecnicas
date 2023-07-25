import { currentPath, myReadingListBooks } from '../../../signals/store';
import RenderBooks from '../RenderBooks';
import { books } from '../../../database/books';
import { localPathname } from '../../../helpers/localPathname';

const Sandbox = () => {
  currentPath.value = localPathname();

  return (
    <>
      <div className="grid w-full grid-flow-row grid-cols-2 gap-x-2 lg:gap-x-20">
        <div className="border border-black p-4 ">
          <h4 className="mb-4 text-center text-lg">Free Books</h4>
          <div className="flex h-min w-full flex-wrap items-start justify-center gap-4 ">
            <RenderBooks books={books} />
          </div>
        </div>
        <div className="border border-black p-4">
          <h4 className="mb-4 text-center text-lg">My Books</h4>
          <div className="flex h-min w-full flex-wrap items-start justify-center gap-4 ">
            <RenderBooks books={myReadingListBooks.value} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sandbox;

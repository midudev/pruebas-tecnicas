import Image from "next/image";
import AddOrRemoveReadingList from "./addOrRemoveReadingList";
import { motion } from "framer-motion";

const Book = ({ data }) => {
  const { title, pages, genre, cover, year, ISBN, author } = data;

  return (
    <motion.article
      key={ISBN}
      className="book"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // transition={{ type: "spring" }}
    >
      <div className="book-content">
        <picture>
          <Image
            src={cover}
            width={200}
            height={335}
            alt={`Portada del libro "${title}"`}
            style={{ width: "100%", height: "auto" }}
          />
          <AddOrRemoveReadingList ISBN={ISBN} />
        </picture>

        <h3>{title}</h3>
        <p className="author">{author.name}</p>
        <p className="genre">{`${genre} - ${pages} páginas - ${year}`}</p>
      </div>
    </motion.article>
  );
};
export default Book;

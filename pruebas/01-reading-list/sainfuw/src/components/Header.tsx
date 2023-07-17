import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Header() {
  const { books, readList } = useContext(AppContext)
  const title = Array.from('BookStore')

  return (
    <header className='flex items-center justify-between px-20 mt-10'>
      <section className="flex items-center gap-10">
        <h3 className="text-xl font-pp">Total books: {books.length}</h3>
        {readList.length > 0 && (
          <h3 className="text-xl font-pp">Total read books: {readList.length}</h3>
        )}
      </section>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {title.map((letter, index) => (
          <motion.span
            key={index}
            className="text-9xl font-pp"
            variants={child}
            whileHover={{ color: `#67dcf8`, textDecoration: 'underline', scale: 2 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </header>
  );
}

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: i * 0.04 }
  })
}

const transition = {
  transition: {
    type: 'spring',
    stiffness: 200,
    damping: 20
  }
}

const child = {
  hidden: {
    opacity: 0,
    ...transition
  },
  visible: {
    opacity: 1,
    ...transition
  }
}
import React from 'react';
import { motion } from 'framer-motion';
interface Props {
  text: string;
}
export const AnimatedTextWord: React.FC<Props> = ({ text }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontSize: '2rem',
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: '5px' }}
          key={index}
          className="font-sans font-medium text-sm sm:text-lg text-center "
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
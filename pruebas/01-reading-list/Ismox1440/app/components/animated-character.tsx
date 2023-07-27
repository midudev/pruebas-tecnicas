import React from 'react';
import { motion } from 'framer-motion';
import { righteous } from '../fonts';
interface Props {
  text: string;
}
export const AnimatedCharacter: React.FC<Props> = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
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
        overflow: 'hidden',
        display: 'flex',
        textAlign: 'center',
      }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="px-4 flex justify-center"
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          className={`text-dark py-4 text-5xl min-[550px]:text-7xl sm:text-8xl font-extrabold ${righteous.variable} hero-title`}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
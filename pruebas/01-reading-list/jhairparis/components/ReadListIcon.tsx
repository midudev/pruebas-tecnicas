import { createIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

const randomDuration = () => Math.random() * 0.7 + 0.23;

const Icon = createIcon({
  displayName: "ReadeListIcon",
  viewBox: "0 0 16 16",
  path: (
    <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path>
  ),
});

const getRandomTransformOrigin = () => {
  const value = (16 + 40 * Math.random()) / 100;
  const value2 = (15 + 36 * Math.random()) / 100;
  return {
    originX: value,
    originY: value2,
  };
};

const variants: Variants = {
  start: {
    rotate: [-4, 2.3, 0],
    transition: {
      delay: getRandomDelay(),
      repeat: 5,
      duration: randomDuration(),
    },
    transitionEnd: {
      rotate: 0,
    },
  },
  reset: {
    rotate: 0,
  },
};

type ReadListIconProps = {
  btnRef: any;
  onOpen: () => void;
};

const ReadListIcon = ({ btnRef, onOpen }: ReadListIconProps) => {
  return (
    <motion.div
      style={{
        ...getRandomTransformOrigin(),
      }}
      variants={variants}
      initial="reset"
      animate="start"
    >
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        variant="outline"
        colorScheme="blue"
        aria-label="Open reading list"
        size="lg"
        icon={<Icon />}
      />
    </motion.div>
  );
};

export default ReadListIcon;

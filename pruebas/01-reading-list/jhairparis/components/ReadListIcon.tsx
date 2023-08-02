import { Tooltip, IconButton } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import { BsFillBookmarksFill } from "react-icons/bs";
import { useGlobalState } from "@/lib/globalContext";

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

const randomDuration = () => Math.random() * 0.7 + 0.23;

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
  onOpen: () => void;
};

const ReadListIcon = ({ onOpen }: ReadListIconProps) => {
  const { data } = useGlobalState();
  return (
    <Tooltip hasArrow label={`Hay ${data.nRead} para leer`}>
      <motion.div
        style={{
          ...getRandomTransformOrigin(),
        }}
        variants={variants}
        initial="reset"
        animate="start"
      >
        <IconButton
          onClick={onOpen}
          variant="outline"
          colorScheme="blue"
          aria-label="Open reading list"
          size="lg"
          icon={<BsFillBookmarksFill />}
        />
      </motion.div>
    </Tooltip>
  );
};

export default ReadListIcon;

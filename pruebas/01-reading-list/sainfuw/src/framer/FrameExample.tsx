import { motion, Variants } from "framer-motion";
import "./styles.css";

interface Props {
  emoji: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: -200
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

function Card({ emoji }: Props) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
    >
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food: [string][] = [
  ["🍅"],
  ["🍊"],
  ["🍋"],
  ["🍐"],
  ["🍏"],
  ["🫐"],
  ["🍆"],
  ["🍇"]
];

export default function FrameExample() {
  return (
    <div className="frame-example">
      {food.map(([emoji]) => <Card emoji={emoji} key={emoji} />)}
    </div>
  )
}
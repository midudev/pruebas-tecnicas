import { Variants, motion } from "framer-motion";

type LoinProps = {
  author: string;
  year: number;
};

const Loin = ({ author, year }: LoinProps) => {
  const vDiv: Variants = {
    initial: {
      display: "block",
      position: "absolute",
      width: "40px",
      height: "var(--h)",
      left: "-20px",
      rotateY: "-90deg",
      backgroundColor: "rgba(232, 229, 234)",
    },
    hover: {},
  };
  const vH2: Variants = {
    initial: {
      width: "calc(var(--h) - 10%)",
      height: "40px",
      originX: 0,
      originY: 0,
      originZ: 0,
      rotate: "90deg",
      x: "32px",
    },
    hover: {},
  };

  return (
    <motion.div variants={vDiv}>
      <motion.h2
        variants={vH2}
        className="text-base pr-2.5 text-right text-black"
      >
        <span className="font-normal text-sm pr-5">{author}</span>
        <span className="font-sans font-semibold">{year}</span>
      </motion.h2>
    </motion.div>
  );
};

export default Loin;

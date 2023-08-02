import { Image } from "@chakra-ui/react";
import { motion, type Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";

const className =
  "after:content-[''] after:absolute after:top-0 after:left-2.5 after:bottom-0 after:w-[3px] after:bg-black/5 after:shadow-md";

const className1 =
  "relative bg-gradient-to-r from-gray-300 from-10%  via-gray-200 via-30% to-gray-100 to-90% w-[--w] h-[--h] shadow-inner rounded-r-md cursor-pointer";

const classNameFront =
  "after:content-[''] after:absolute after:top-[1px] after:bottom-[1px] after:left-[1px] after:w-[1px]";

const cover = twMerge(className, className1);

type CoverProps = {
  img: string;
  openDrawer: () => void;
};

const Cover = ({ img, openDrawer }: CoverProps) => {
  const frontVariant: Variants = {
    initial: {
      display: "block",
      position: "absolute",
      transformStyle: "preserve-3d",
      originX: 0,
      originY: "50%",
      z: "20px",
      zIndex: "10",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      },
    },
    hover: {
      rotateY: "35deg",
    },
  };

  return (
    <motion.div
      variants={frontVariant}
      className={classNameFront}
      onClick={() => openDrawer()}
    >
      <div className={cover}>
        <Image
          src={img}
          alt="book"
          className="absolute top-0 left-0 object-cover w-full h-full rounded-r-md"
        />
      </div>
    </motion.div>
  );
};

export default Cover;

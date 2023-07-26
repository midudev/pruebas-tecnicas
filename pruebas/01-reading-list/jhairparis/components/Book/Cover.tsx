import { Image } from "@chakra-ui/react";
import { twMerge } from "tailwind-merge";

const className =
  "after:content-[''] after:absolute after:top-0 after:left-2.5 after:bottom-0 after:w-[3px] after:bg-black/5 after:shadow-md";

const className1 =
  "relative bg-gradient-to-r from-gray-300 from-10%  via-gray-200 via-30% to-gray-100 to-90% w-[--w] h-[--h] shadow-inner rounded-r-md";

const cover = twMerge(className, className1);

const Cover = ({ img }: { img: string }) => {

  return (
    <div className={cover}>
      <Image src={img} alt="book" className="absolute top-0 left-0 object-cover w-full h-full rounded-r-md" />
    </div>
  );
};

export default Cover;

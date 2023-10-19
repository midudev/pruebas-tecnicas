import classNames from "classnames";
import { useState } from "react";

const Info = () => {
  const cn = classNames;
  const [info, setInfo] = useState<boolean>(false);

  const handleInfo = () => {
    setInfo(true);
    setTimeout(() => {
      setInfo(false);
    }, 7000);
  };

  const classes = {
    info: cn({
      "opacity-1": info,
      "opacity-0 selected-none": !info,
    }),
  };
  return (
    <>
      <p
        className="absolute font-Anton bg-neutral-800 px-3 z-[101] rounded-full top-3 left-3 select-none"
        onMouseEnter={handleInfo}
        onTouchStart={handleInfo}
      >
        ¡
      </p>
      <span
        className={`${classes.info} absolute text-[11px] text-center backdrop-blur-md p-2 z-[100] font-sans rounded-full top-3 left-12 transition ease-in-out duration-500 select-none`}
      >
        Interactue con el libro, click sobre el ojo para ver la información
      </span>
    </>
  );
};

export default Info;

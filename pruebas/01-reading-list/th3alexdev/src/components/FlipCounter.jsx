import FlipNumbers from "react-flip-numbers";

export default function FlipCounter({total}) {

  
  
  return (
    <div
      className="absolute w-5 h-5 right-[-0.10rem] top-[-1.5px] z-20 bg-red-500 rounded-full font-semibold flex items-center justify-center"
      id="flip"
    >
      {
        total > 9 ? <p className="text-[0.65rem] leading-[6px] mr-[2px] w-1.5">+</p> : ""
      }
      <FlipNumbers
        width={7}
        height={11}
        color="#fff"
        play
        perspective={100}
        numbers={total > 9 ? "9" : total + ""}
      />
    </div>
  );
}

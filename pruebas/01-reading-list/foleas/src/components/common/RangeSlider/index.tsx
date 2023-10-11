import { useRef, useState, useEffect } from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";

const RangeSlider = <T extends number | readonly number[]>(
  _props: ReactSliderProps<T>
) => {
  const sliderRef = useRef(null);
  const isVertical = _props.orientation === "vertical";
  const [sliderSize, setSliderSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (sliderRef.current !== null) {
      const slider = sliderRef.current["slider"] as HTMLElement;
      setSliderSize({ w: slider.clientWidth, h: slider.clientHeight });
    }
  }, [sliderRef]);

  return (
    <ReactSlider
      ref={sliderRef}
      {..._props}
      renderThumb={(props, state) => {
        const orientationClass = isVertical ? "w-full" : "h-full";
        return (
          <div
            {...props}
            className={`${orientationClass} aspect-square rounded-full border dark:bg-gray-700 dark:border-gray-600 bg-gray-200 bg-gray-300 text-xs text-white flex items-center justify-center cursor-grab`}
          >
            {state.valueNow}
          </div>
        );
      }}
      renderTrack={(props, state) => {
        //check if there are multiple values
        const points = Array.isArray(state.value) ? state.value.length : null;
        const isMulti = points && points > 0;
        const isLast = isMulti ? state.index === points : state.index === 1;
        const isFirst = state.index === 0;

        let trackClasses = "rounded-full ";

        if (isMulti) {
          isFirst || isLast
            ? (trackClasses += "bg-gray-700 dark:bg-gray-200 ")
            : (trackClasses += "dark:bg-gray-700 bg-gray-200 ");
        } else {
          isLast
            ? (trackClasses += "bg-gray-700 dark:bg-gray-200 ")
            : (trackClasses += "dark:bg-gray-700 bg-gray-200 ");
        }

        trackClasses += isVertical
          ? "w-1/4 left-1/2 -translate-x-1/2"
          : "h-1/4 top-1/2 -translate-y-1/2";

        return <div {...props} className={trackClasses}></div>;
      }}
      renderMark={(props) => {
        let markClasses = "w-1 h-1 rounded-full dark:bg-gray-700 bg-gray-200 ";
        markClasses += isVertical
          ? "left-1/2 -translate-x-1/2"
          : `top-1/2 -translate-y-1/2 translate-x-1/2`;

        const marginLeft = !isVertical ? sliderSize.h / 2 - 2 : 0;
        const marginTop = isVertical ? sliderSize.w / 2 - 2 : 0;
        return (
          <div
            {...props}
            style={{ ...props.style, marginLeft, marginTop }}
            className={markClasses}
          ></div>
        );
      }}
    />
  );
};

export default RangeSlider;

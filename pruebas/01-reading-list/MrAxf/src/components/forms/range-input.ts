import { styled } from "~/styled-system/jsx";

const RangeInput = styled("input", {
  base: {
    "&[type=range]::-webkit-slider-thumb": {
      WebkitAppearance: "none",
      border: "1px solid #000000",
      height: "36px",
      width: "16px",
      borderRadius: "3px",
      background: "#ffffff",
      cursor: "pointer",
      marginTop: "-14px",
    },
  },
});

export default RangeInput;

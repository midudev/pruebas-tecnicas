import { styled } from "~/styled-system/jsx";

const SelectInput = styled("select", {
  base: {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "primary",
    px: "4",
    py: "2",
    borderRadius: "xl",
    bg: "neutral-focus",
    color: "base-content",
    _focus: {
      outline: "unset",
      outlineWidth: "4px",
      outlineStyle: "solid",
      outlineColor: "primary",
    },
  },
});

export default SelectInput;

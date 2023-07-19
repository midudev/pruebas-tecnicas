import { styled } from "~/styled-system/jsx";

const Button = styled("button", {
  base: {
    "--bg": "colors.primary",
    bg: "var(--bg)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "2",
    color: "primary-content",
    fontWeight: "bold",
    px: "4",
    py: "2",
    borderRadius: "xl",
    cursor: "pointer",
    transitionProperty: "all",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-in-out",
    _hover: {
      scale: "1.1",
      "--bg": "colors.primary-focus",
    },
    _focus: {
      scale: "1.1",
      "--bg": "colors.primary-focus",
    },
    _active: {
      scale: "0.9",
      "--bg": "colors.primary-focus",
    },
  },
});

export default Button;

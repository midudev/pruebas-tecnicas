import { css } from "~/styled-system/css";

export const bookTitleCss = css({
  fontSize: "xl",
  fontWeight: "bold",
  sm: {
    fontSize: "2xl",
  },
});

export const bookCoverCss = css({
  objectFit: "cover",
  borderRadius: "lg",
  w: "33%",
  h: "full",
  flexShrink: "1",
  transitionProperty: "all",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-in-out",
  filter: "auto",
});

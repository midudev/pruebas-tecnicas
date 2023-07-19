import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { css, cx } from "~/styled-system/css";
import { hstack } from "~/styled-system/patterns";

const headerCss = cx(
  hstack({
    alignItems: "stretch",
  }),
  css({
    width: "full",
    position: "sticky",
    top: "0",
    zIndex: "1",
    bg: "neutral",
    px: "5",
    shadow: "xl",
  })
);

const headerTitleCss = css({
  fontSize: "xl",
  fontWeight: "bold",
  py: "5",
  mr: "5",
});

const headerLinksCss = cx(
  css({
    fontSize: "lg",
    px: "5",
    height: "auto",
    display: "none",
    md: {
      display: "flex",
    },
    gap: "0",
    alignItems: "stretch",
    "& li": {
      display: "flex",
      alignItems: "stretch",
      height: "auto",
      "& a": {
        height: "auto",
        px: "3",
        py: "5",
        transition: "all",
        transitionDuration: "fast",
        _hover: {
          bg: "neutral-focus",
        },
      },
    },
  })
);

const activeLinkCss = css({
  borderBottomStyle: "solid",
  borderBottomColor: "currentcolor",
  borderBottomWidth: "medium",
});

export const Header = component$(() => {
  const { url } = useLocation();

  return (
    <nav class={headerCss}>
      <h1 class={headerTitleCss}>My Book List</h1>
      <ul class={headerLinksCss}>
        <li>
          <Link
            class={{ [activeLinkCss]: url.pathname === "/" }}
            href="/"
            prefetch
          >
            Libros
          </Link>
        </li>
        <li>
          <Link
            class={{ [activeLinkCss]: url.pathname === "/lista/" }}
            href="/lista"
            prefetch
          >
            Mi lista
          </Link>
        </li>
      </ul>
    </nav>
  );
});

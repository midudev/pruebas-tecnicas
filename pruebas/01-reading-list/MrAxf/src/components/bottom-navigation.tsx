import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { css, cx } from "~/styled-system/css";

const bottomNavigationCss = cx(
  css({
    width: "full",
    bg: "neutral",
    shadow: "xl",
    display: "flex",
    position: "sticky",
    bottom: "0",
    md: {
      display: "none",
    },
  })
);

const bottomNavigationLinksCss = cx(
  css({
    fontSize: "lg",
    w: "full",
    h: "auto",
    gap: "0",
    display: "flex",
    alignItems: "stretch",
    "& li": {
      flexGrow: "1",
      display: "flex",
      alignItems: "stretch",
      height: "auto",
      "& a": {
        w: "full",
        h: "auto",
        px: "3",
        py: "5",
        textAlign: "center",
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

export const BottomNavigation = component$(() => {
  const { url } = useLocation();

  return (
    <nav class={bottomNavigationCss}>
      <ul class={bottomNavigationLinksCss}>
        <li>
          <Link class={{ [activeLinkCss]: url.pathname === "/" }} href="/">
            Libros
          </Link>
        </li>
        <li>
          <Link
            class={{ [activeLinkCss]: url.pathname === "/lista/" }}
            href="/lista"
          >
            Mi lista
          </Link>
        </li>
      </ul>
    </nav>
  );
});

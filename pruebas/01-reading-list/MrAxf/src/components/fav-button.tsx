import type { QRL } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { StarIcon } from "./icons/star-icon";
import { css } from "~/styled-system/css";

interface FavButtonProps {
  filled?: boolean;
  onClick?: QRL<() => void>;
  title?: string;
}

export const FavButton = component$(
  ({ filled = false, onClick = $(() => {}), title }: FavButtonProps) => {
    return (
      <button
        aria-label={title}
        preventdefault:click
        onClick$={(ev) => {
          ev.stopPropagation();
          onClick();
        }}
        class={css({
          "--color": "colors.warning",
          cursor: "pointer",
          transitionProperty: "all",
          transitionDuration: "fast",
          transitionTimingFunction: "ease-in-out",
          _hover: {
            scale: "1.3",
            "--color": "colors.warning-focus",
          },
          _focus: {
            scale: "1.3",
            "--color": "colors.warning-focus",
          },
          _active: {
            scale: "0.7",
            "--color": "colors.warning-focus",
          },
        })}
        title={title}
      >
        <StarIcon
          class={[
            css({
              w: "10",
              h: "10",
              stroke: "var(--color)",
            }),
            {
              [css({
                fill: "var(--color)",
              })]: filled,
            },
          ]}
        ></StarIcon>
      </button>
    );
  }
);

import type { PropFunction, QwikMouseEvent } from "@builder.io/qwik";

import {
  $,
  component$,
  useOn,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";

import type { Book } from "~/lib/types";

const LONG_PRESS_MS = 500;

interface Props {
  book: Book;
  longPressAction$?: PropFunction<(book: Book) => void>;
  dbClickAction$?: PropFunction<(book: Book) => void>;
  delay?: number; // ms
}

export const BookCard = component$((props: Props) => {
  const { book, longPressAction$, dbClickAction$ } = props;
  const longPressStart = useSignal<number>();
  const hasTouch = useSignal(false);

  useTask$(({ track, cleanup }) => {
    const start = track(() => longPressStart.value);

    if (longPressAction$ && start) {
      const id = setTimeout(() => {
        if (longPressStart.value !== undefined) {
          longPressAction$(book);
        }
      }, props.delay ?? LONG_PRESS_MS);
      cleanup(() => clearTimeout(id));
    }
  });

  useVisibleTask$(() => {
    hasTouch.value = "ontouchstart" in document.documentElement;
  });

  useOn(
    "dblclick",
    $(() => {
      dbClickAction$?.(book);
    }),
  );

  const handleMouseDown$ = $(
    (event: QwikMouseEvent<HTMLDivElement, MouseEvent>) => {
      const { button } = event;
      if (button === 0) longPressStart.value = Date.now();
    },
  );

  const handleTouchStart$ = $(() => {
    longPressStart.value = Date.now();
  });

  const handleMouseUp$ = $(() => {
    longPressStart.value = undefined;
  });

  return (
    <article
      class={[
        {
          "hover:cursor-progress": longPressStart.value !== undefined,
          "hover:cursor-pointer": longPressStart.value === undefined,
        },
        "flex items-center justify-center h-[300px]",
        "hover:scale-110 transition-transform",
        "bg-slate-50/20 w-fit relative",
        "group",
      ]}
      preventdefault:click
      preventdefault:mousedown
      preventdefault:mouseup
      preventdefault:mouseleave
      preventdefault:touchstart
      preventdefault:touchend
      onMouseDown$={handleMouseDown$}
      onMouseUp$={handleMouseUp$}
      onMouseLeave$={handleMouseUp$}
      onTouchStart$={handleTouchStart$}
      onTouchEnd$={handleMouseUp$}
    >
      <img
        class={[
          {
            "blur-sm": longPressStart.value !== undefined,
          },
          "w-[200px] h-[300px] transition-all duration-500",
        ]}
        draggable={false}
        unselectable="off"
        width={200}
        height={300}
        src={book.cover}
        alt={book.title}
      />
      <div
        class={[
          {
            "opacity-0": !hasTouch.value,
          },
          "transition-opacity group-hover:opacity-100",
          "absolute bottom-0",
          "p-2 bg-slate-500/60 text-slate-200 w-full",
          "flex flex-col",
        ]}
      >
        <div class="break-words">{book.title}</div>
        <div class="text-right">{book.year}</div>
      </div>
      <div
        class={[
          {
            "opacity-0": !hasTouch.value,
          },
          "transition-opacity group-hover:opacity-100",
          "absolute top-0",
          "p-2 text-slate-200 w-full",
          "flex flex-col",
        ]}
      >
        <div class="text-right text-xs flex w-full justify-end">
          <div class="rounded-lg bg-slate-700 text-slate-300 px-2 py-1">
            {book.pages} pages
          </div>
        </div>
      </div>
      <div
        class={[
          {
            hidden: longPressStart.value === undefined,
          },
          "absolute",
        ]}
      >
        <svg
          class="animate-spin h-10 w-10 text-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-70"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-100"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </article>
  );
});

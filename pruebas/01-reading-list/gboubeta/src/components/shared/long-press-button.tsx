import type { PropFunction, QwikMouseEvent } from "@builder.io/qwik";

import { $, component$, Slot, useSignal, useTask$ } from "@builder.io/qwik";

const LONG_PRESS_MS = 1200;

interface Props {
  action$: PropFunction<() => void>;
  delay?: number; // ms
}

export const LongPressButton = component$<Props>((props) => {
  const longPressStart = useSignal<number>();

  useTask$(({ track, cleanup }) => {
    const start = track(() => longPressStart.value);

    if (start !== undefined) {
      const id = setTimeout(() => {
        if (longPressStart.value !== undefined) {
          props.action$();
        }
      }, props.delay ?? LONG_PRESS_MS);
      cleanup(() => clearTimeout(id));
    }
  });

  const handleMouseDown$ = $(
    (event: QwikMouseEvent<HTMLButtonElement, MouseEvent>) => {
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
    <button
      class={[
        {
          "text-slate-300/60": longPressStart.value !== undefined,
        },
        "hover:cursor-pointer",
        "bg-purple-600 rounded-xl py-1 px-4 hover:bg-purple-700",
        "text-lg flex items-center justify-center",
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
      <div>
        <Slot />
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
          class="animate-spin h-4 w-4 text-slate-100"
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
    </button>
  );
});

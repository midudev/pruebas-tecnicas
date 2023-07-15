import { component$, useStore } from "@builder.io/qwik";

export const Banner = component$(() => {
  const counter = useStore({
    value: 0,
  });

  return (
    <div>
      Hellow since Banner
      <h1>Current counter is {counter.value}</h1>
      <button onClick$={() => (counter.value = counter.value + 1)}>
        Increment
      </button>
    </div>
  );
});

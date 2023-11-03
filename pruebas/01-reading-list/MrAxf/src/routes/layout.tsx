import { Slot, component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { BottomNavigation } from "~/components/bottom-navigation";
import { Header } from "~/components/header";
import { css } from "~/styled-system/css";
import { VStack } from "~/styled-system/jsx";

const mainCss = css({
  width: "full",
  p: "5",
  sm: {
    p: "7",
  },
  lg: {
    p: "10",
  },
});

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <VStack alignItems="start" gap="0" position="relative">
      <Header />
      <main class={mainCss}>
        <Slot />
      </main>
      <BottomNavigation />
    </VStack>
  );
});

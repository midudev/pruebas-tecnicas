"use client";
import useMainState from "@/hooks/useGlobalState";
import GlobalState from "@/lib/globalContext";
import type { C } from "@/types";
import { CacheProvider } from "@chakra-ui/next-js";
import Theme from "./Theme";

export default function Providers({ children }: C) {
  const globalState = useMainState();

  return (
    <CacheProvider>
      <GlobalState.Provider value={globalState}>
        <Theme>{children}</Theme>
      </GlobalState.Provider>
    </CacheProvider>
  );
}

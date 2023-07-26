import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RootLayout } from "@/layouts";
import { RoutesWithNotFound, getData, subscribeToStorage, unsuscribeToStorage } from "@/helpers";
import { Home } from "@/pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <RootLayout>
          <RoutesWithNotFound>
            <Route index element={<Home />} />
          </RoutesWithNotFound>
        </RootLayout>
      </BrowserRouter>
    </>
  );
}

export default App;

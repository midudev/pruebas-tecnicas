import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { RootLayout } from "@/layouts";
import { useReadingListStore } from "@/store";
import { RoutesWithNotFound, getData, subscribeToStorage, unsuscribeToStorage } from "@/helpers";
import { Drawer, Modal } from "@/components";
import { Home } from "@/pages";
import { ReadingListKey } from "@/constants";
import { LocalStore } from "@/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgSpinner } from "react-icons/cg";

function App() {
  const { books, setBooks, setCount } = useReadingListStore();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    subscribeToStorage(ReadingListKey, (data) => {
      setBooks(data.books);
      setCount(data.count);
    });

    const persistedData = getData(ReadingListKey) as LocalStore;
    setBooks(persistedData?.books);
    setCount(persistedData?.count || 0);

    return () => {
      unsuscribeToStorage(ReadingListKey);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  }, [books, isLoaded]);
  
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CgSpinner className="animate-spin w-16 h-16 text-gray-500" />
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Drawer />
        <Modal />
        <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          pauseOnHover={false}
        />
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

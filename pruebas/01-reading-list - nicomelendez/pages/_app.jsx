import "@/styles/globals.css";
import { LibraryProvider } from "@/context/LibraryProvider";

export default function App({ Component, pageProps }) {
  return (
    <LibraryProvider>
      <Component {...pageProps} />
    </LibraryProvider>
  );
}

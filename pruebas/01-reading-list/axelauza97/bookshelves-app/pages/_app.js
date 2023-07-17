import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [books, setBooks] = useState(null);

  return (
    <Layout books={books}>
      <Component {...pageProps} books={books} setBooks={setBooks} />
    </Layout>
  );
}

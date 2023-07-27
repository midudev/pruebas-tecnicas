import Layout from "@/layout/Layout";
import ListOfBooks from "@/components/book/ListOfBooks";
import Search from "@/components/search/Search";
import useLibrary from "@/hooks/useLibrary";

export default function Home() {
  const { getfilteredBooks } = useLibrary();

  return (
    <Layout title="Inicio">
      <Search />
      <ListOfBooks books={getfilteredBooks()?.books} />
    </Layout>
  );
}

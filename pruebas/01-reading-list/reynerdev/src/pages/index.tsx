import Head from "next/head";
import { MainLayout } from "~/components/layout/main";
import { MainSection } from "~/components/views/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Shelf</title>
        <meta name="description" content="Bookshelf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout splitPercentage={70}>
        <MainSection />
      </MainLayout>
    </>
  );
}

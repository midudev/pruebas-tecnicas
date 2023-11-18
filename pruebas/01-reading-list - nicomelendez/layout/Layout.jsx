import Head from "next/head";
import Nav from "@/components/layout/nav/Nav";
import Footer from "@/components/layout/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>MyBooks - {title}</title>
        <meta name="description" content="Prueba tecnica" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="px-10 md:px-24">
        <Nav />
        <main className="grid grid-cols-1 mx-auto w-full sm:max-w-4xl lg:max-w-6xl xl:max-w-[1600px] h-full">
          {children}
        </main>
        <Footer />
      </div>
      <ToastContainer className="text-xl" />
    </>
  );
}

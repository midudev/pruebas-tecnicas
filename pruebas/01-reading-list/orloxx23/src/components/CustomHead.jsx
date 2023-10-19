import pageConfig from "@/utils/constants/pageConfig";
import Head from "next/head";

/**
 * Componente CustomHead
 * @returns {JSX.Element} - Elemento JSX que representa la configuración personalizada de la etiqueta head.
 */
export default function CustomHead() {
  return (
    <Head>
      {/* Título de la página */}
      <title>{pageConfig.title}</title>

      {/* Metaetiquetas */}
      <meta name="description" content={pageConfig.description} />
      <meta name="theme-color" content={pageConfig.themeColor} />
      <meta name="author" content={pageConfig.author} />
      <meta name="keywords" content={pageConfig.keywords} />

      {/* Enlace de autor */}
      <link rel="author" href={pageConfig.authorLink} />

      {/* Metaetiquetas para Open Graph */}
      <meta property="og:title" content={pageConfig.title} />
      <meta property="og:description" content={pageConfig.description} />
      <meta property="og:site_name" content={pageConfig.title} />
      <meta property="og:type" content="website" />
    </Head>
  );
}

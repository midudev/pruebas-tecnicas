import { CustomHead, List } from "@/components";
import MainLayout from "@/layouts/MainLayout";

/**
 * Página principal (Home)
 * @returns {JSX.Element} - Elemento JSX que representa la página principal.
 */
export default function Home() {
  return (
    <>
      <CustomHead />
      <MainLayout>
        <List />
      </MainLayout>
    </>
  );
}

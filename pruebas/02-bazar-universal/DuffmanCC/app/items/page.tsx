import ProductsList from "@/components/ProductsList";
import Results from "@/components/Results";
import { fetchProducts } from "@/lib/requests";

interface Props {
  searchParams: {
    search: string;
  };
}

export default async function Items({ searchParams }: Props) {
  const { search } = searchParams;

  const items = (await fetchProducts(search)) || [];

  return (
    <div className="flex flex-col gap-8">
      <h1 className="sr-only">Lista de productos en nuestro bazar</h1>

      <Results items={items} query={search} />

      <ProductsList items={items} />
    </div>
  );
}

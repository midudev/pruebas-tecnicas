import SingleProduct from "@/components/SingleProduct";
import { fetchSingleProduct } from "@/lib/requests";
import { Product } from "@/types";

interface Props {
  params: {
    id: string;
  };
}

export default async function Items({ params }: Props) {
  const { id } = params;

  const product: Product = await fetchSingleProduct(parseInt(id));

  return product ? (
    <SingleProduct product={product} />
  ) : (
    <p>
      <span className="font-bold">404</span> No existe el producto
    </p>
  );
}

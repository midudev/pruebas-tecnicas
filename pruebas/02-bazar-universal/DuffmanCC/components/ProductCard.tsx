import Rating from "@/components/Rating";
import { toDollar } from "@/lib/tools";
import { Product } from "@/types";
import Image from "next/image";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <article className="flex gap-4 items-start">
      <div className="w-1/3 flex justify-center">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width="150"
          height="150"
          className="object-cover auto aspect-square rounded-full overflow-hidden"
          priority
        />
      </div>

      <div className="flex flex-col gap-2 w-2/3 relative">
        <h2 className="font-bold text-xl">{product.title}</h2>

        <p className="text-sm">{product.description}</p>

        <div className="font-bold flex gap-2 items-center">
          <div className="text-xl">{toDollar(product.price)}</div>

          <Rating rating={product.rating} />
        </div>
      </div>
    </article>
  );
}

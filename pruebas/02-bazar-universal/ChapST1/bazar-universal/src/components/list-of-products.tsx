import { getFormatPrice } from "@/lib/utils/get-format-price";
import { Product } from "@/types";
import { ProductCart } from "./product-cart";

export async function ListOfProducts({ products }: { products: Product[] }) {
	return (
		<section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
			{products?.map(({ id, title, thumbnail, price, discountPercentage }) => {
				const { newPrice } = getFormatPrice({
					price,
					discount: discountPercentage,
				});

				return (
					<div key={id} className="relative">
						<a
							href={`/items/${id}`}
							className=" p-2 flex flex-col gap-5 border border-input  duration-300 hover:bg-accent rounded-lg min-h-[max-content]"
						>
							<picture className=" flex-grow-[1] w-full m-auto mt-4 h-64 md:w-[70%] overflow-hidden block rounded-md ">
								<img
									className="w-full h-full object-cover"
									src={thumbnail}
									alt={title}
								/>
							</picture>

							<div className="p-2 flex justify-between items-center gap-2">
								<h2 className=" w-[70%] line-clamp-1">{title}</h2>
								<span className="font-bold">{newPrice}</span>
							</div>
						</a>
						<ProductCart id={id} />
					</div>
				);
			})}
		</section>
	);
}

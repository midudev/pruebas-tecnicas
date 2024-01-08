import { Product } from "@/types";
import { Carrousel } from "./carrousel";
import { getFormatPrice } from "@/lib/utils/get-format-price";
import { Button } from "./ui/button";
import { getCategories } from "@/services/get-categories";
import { Badge } from "./ui/badge";

export function ProductDetails({ product }: { product: Product }) {
	const {
		category,
		description,
		discountPercentage,
		id,
		images,
		price,
		rating,
		stock,
		title,
	} = product;

	const { oldPrice, newPrice } = getFormatPrice({
		price,
		discount: discountPercentage,
	});

	return (
		<section className="px-4 grid grid-cols-1  md:grid-cols-[1fr,500px] gap-5">
			<Carrousel images={images} />

			<div className="">
				<div className="py-4">
					<h1 className="font-bold text-4xl">{title}</h1>
					<div>
						{Array(Math.round(rating))
							.fill(null)
							.map((item, index) => (
								<span key={index}>⭐</span>
							))}
					</div>
					<Badge className="mt-2">{category}</Badge>
				</div>

				<div>
					<div>
						<div className="flex items-center justify-between">
							<div className="flex gap-2">
								<span>{newPrice}</span>
								<span className="underline-offset-auto line-through opacity-50 scale-90">
									{oldPrice}
								</span>
							</div>
							<span className="opacity-50">Stock: {stock}</span>
						</div>
					</div>
				</div>
				<div className="pt-3">
					<h3 className="text-2xl">Description 👇</h3>
					<p>{description}</p>
				</div>

				<Button
					disabled
					className="w-full my-3 cursor-not-allowed pointer-events-none select-none"
				>
					Buy
				</Button>
			</div>
		</section>
	);
}

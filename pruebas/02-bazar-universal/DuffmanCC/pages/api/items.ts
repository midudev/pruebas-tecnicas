import products from "@/data/products.json";
import { Product } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

const filteredProducts = (search: string, products: Product[]) => {
  if (search.length < 3) return products;

  const filterdProducts = products.filter((el) => {
    const lowerTitle = el.title.toLowerCase();
    const lowerDescription = el.description.toLowerCase();
    const lowerCat = el.category.toLowerCase();

    return (
      lowerTitle.includes(search) ||
      lowerDescription.includes(search) ||
      lowerCat.includes(search)
    );
  });

  return filterdProducts;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const { search } = req.query;

  if (search !== "undefined" && typeof search === "string") {
    const fp = filteredProducts(search, products.products);
    res.status(200).json(fp);
  }

  res.status(200).json(products.products);
}

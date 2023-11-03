import products from "@/data/products.json";
import { Product } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | { error: string }>
) {
  const {
    query: { id },
  } = req;

  if (typeof id === "string") {
    // Parse the id as an integer if it's a string
    const productId = parseInt(id, 10);

    // Find the single product based on the parsed integer id
    const singleProduct: Product | undefined = products.products.find(
      (item) => {
        return item.id === productId;
      }
    );

    if (singleProduct) {
      res.status(200).json(singleProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } else {
    res.status(400).json({ error: "Invalid ID parameter" });
  }
}

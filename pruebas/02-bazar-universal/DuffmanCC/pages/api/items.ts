import { Product } from "@/types";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const filteredProducts = (search: string, products: Product[]) => {
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | { error: string }>
) {
  const { search } = req.query;
  const filePath = path.join(process.cwd(), "public", "products.json");

  try {
    const rawdata = await fs.promises.readFile(filePath, "utf8");
    const products = JSON.parse(rawdata);

    if (search !== "undefined" && typeof search === "string") {
      const fp = filteredProducts(search, products.products);
      res.status(200).json(fp);
    } else {
      res.status(200).json(products.products);
    }
  } catch (error) {
    console.error("Error reading or parsing the JSON file:", error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}

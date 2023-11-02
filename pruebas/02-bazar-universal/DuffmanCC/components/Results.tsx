import { Product } from "@/types";
import Badge from "./Badge";

function getCategories(items: Product[]) {
  const categories = items?.map((item) => item.category);

  if (!categories) return [];

  return Object.entries(
    categories.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).map(([name, count]) => ({ name, count }));
}

interface Props {
  items: Product[];
  query: string;
}

const CATEGORY_COLORS: { [key: string]: string } = {
  smartphones: "bg-purple-300",
  laptops: "bg-blue-300",
  fragrances: "bg-yellow-300",
  skincare: "bg-green-300",
  groceries: "bg-red-300",
  "home-decoration": "bg-indigo-300",
};

export default function Results({ items, query }: Props) {
  const categories = getCategories(items);

  return (
    <div className="flex flex-col gap-4">
      {query?.length > 2 && (
        <div className="font-bold">
          Resultados de búsqueda de {query}: {items.length}
        </div>
      )}

      <div className="flex gap-4 flex-wrap">
        {categories.map((cat) => (
          <Badge
            key={cat.name}
            category={cat}
            color={CATEGORY_COLORS[cat.name]}
          />
        ))}
      </div>
    </div>
  );
}

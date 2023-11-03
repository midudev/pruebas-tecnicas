interface Props {
  category: {
    name: string;
    count: number;
  };
  color: string;
}

export default function Badge({ category, color }: Props) {
  return (
    <div className={["px-4 py-2 ", color].join("")}>
      {category.name} - {category.count}
    </div>
  );
}

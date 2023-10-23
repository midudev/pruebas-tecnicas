import { ProductChunk } from '@/types/product'
import { ItemCard } from './item-card'

export function ItemsList ({ items }: { items: ProductChunk[] }) {
  return (
    <section className="flex flex-col gap-6 w-full max-w-xs mx-auto">
      {
        items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))
      }
    </section>
  )
}

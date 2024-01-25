const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent"

export function CardProductosSkeleton() {
  return (
    <div
      className={`${shimmer} relative mt-2 overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className=" h-3 w-full rounded-md bg-gray-200 text-sm font-medium" />
      <div className="flex  p-4">
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex space-x-3 justify-start truncate rounded-xl bg-white px-4 py-8">
        <div className="h-12 w-16  bg-gray-200 rounded-full" />
        <div className="flex w-full flex-col gap-3">
          <div className="h-2  bg-gray-200 rounded-full" />
          <div className="h-2  bg-gray-200 rounded-full" />
          <div className="h-2  bg-gray-200 rounded-full" />
          <div className="h-2  bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function CardsSkeleton() {
  return (
    <div className="flex flex-col mt-16">
      <CardProductosSkeleton />
      <CardProductosSkeleton />
      <CardProductosSkeleton />
      <CardProductosSkeleton />
    </div>
  )
}

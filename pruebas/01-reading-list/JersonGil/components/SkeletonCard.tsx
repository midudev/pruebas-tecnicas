import { Card } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

const SkeletonCard = () => {
  return (
    <Card className="flex flex-col items-center gap-6 p-6 h-40">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </Card>
  )
}

export default SkeletonCard
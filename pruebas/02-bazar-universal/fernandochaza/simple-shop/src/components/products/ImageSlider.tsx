import NextChevron from "@/icons/NextChevron"
import PreviousChevron from "@/icons/PreviousChevron"
import Link from "next/link"

type ImageSliderProps = {
  imageURLS: string[]
  imgIndex: number
  lastIndex: number
  className?: string
}

const ImageSlider = ({
  imageURLS,
  imgIndex,
  lastIndex,
  className
}: ImageSliderProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageURLS[imgIndex] || imageURLS[0]})`
      }}
      className={className}
    >
      <Link
        href={`?imgIndex=${
          imgIndex <= 0 || imgIndex > lastIndex ? lastIndex : imgIndex - 1
        }`}
        className="absolute w-12 top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-20 rounded-full"
      >
        <PreviousChevron />
      </Link>
      <Link
        href={`?imgIndex=${
          imgIndex >= lastIndex || imgIndex < 0 ? 0 : imgIndex + 1
        }`}
        className="absolute w-12 top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-20 rounded-full"
      >
        <NextChevron />
      </Link>
    </div>
  )
}

export default ImageSlider

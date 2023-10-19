import Link from "next/link"

import NextChevron from "@/icons/NextChevron"
import PreviousChevron from "@/icons/PreviousChevron"

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
  const isImgIndex = imgIndex !== undefined
  const imgUrl = isImgIndex ? imageURLS[imgIndex] : imageURLS[0]
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
      className={`group ${className}`}
    >
      {imageURLS.length > 1 && (
        <>
          <Link
            href={`?imgIndex=${
              imgIndex <= 0 || imgIndex > lastIndex ? lastIndex : imgIndex - 1
            }`}
            className="lg:hidden group-hover:block absolute w-12 top-1/2 left-1 -translate-y-1/2 bg-white bg-opacity-30 rounded-full shadow-[1px_1px_1px_#b0b2b3]"
          >
            <PreviousChevron />
          </Link>
          <Link
            href={`?imgIndex=${
              imgIndex >= lastIndex || imgIndex < 0 ? 0 : imgIndex + 1
            }`}
            className="lg:hidden group-hover:block absolute w-12 top-1/2 right-1 -translate-y-1/2 bg-white bg-opacity-30 rounded-full shadow-[1px_1px_1px_#b0b2b3]"
          >
            <NextChevron />
          </Link>
        </>
      )}
    </div>
  )
}

export default ImageSlider

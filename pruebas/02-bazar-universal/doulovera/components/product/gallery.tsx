'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export function Gallery ({ images }: { images: string[] }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const imageIndexString = searchParams.get('image')
  const imageIndex = imageIndexString ? parseInt(imageIndexString) : 0

  // get previous image query
  const previousImageSearchParams = new URLSearchParams(searchParams.toString())
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1
  previousImageSearchParams.set('image', previousImageIndex.toString())

  // get next image query
  const nextImageSearchParams = new URLSearchParams(searchParams.toString())
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0
  nextImageSearchParams.set('image', nextImageIndex.toString())

  const previousImageLink = `${pathname}?${previousImageSearchParams}`
  const nextImageLink = `${pathname}?${nextImageSearchParams}`

  const currentImage = images[imageIndex]

  return (
    <section>
      <div className="relative group">
        <div className="flex justify-center items-start w-full p-2 bg-gray-200 aspect-square rounded-lg overflow-hidden">
          {
            currentImage && (
              <Image
                src={currentImage}
                alt="."
                width={0}
                height={0}
                className="w-full h-auto"
                sizes="(min-width: 768px) 100vw, 16rem"
              />
            )
          }
        </div>
        {
          images.length > 1 && (
              <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center gap-2 h-12 w-full mx-auto opacity-40 group-hover:opacity-100 transition-opacity">
                <Link href={previousImageLink} className="flex justify-center items-center w-12 h-full bg-brand-light rounded-md hover:bg-brand">👈</Link>
                <Link href={nextImageLink} className="flex justify-center items-center w-12 h-full bg-brand-light rounded-md hover:bg-brand">👉</Link>
              </div>
          )
        }
      </div>
      <div className="my-5">
        <div className="grid grid-flow-col gap-1 overflow-auto whitespace-nowrap pb-3 mb-3">
          {
            images.map((img, index) => {
              const isActive = index === imageIndex

              return (
                <Link key={img} href={`${pathname}?image=${index}`} className={`relative h-16 w-16 rounded-lg overflow-hidden border-2 ${isActive ? 'border-brand-dark' : 'border-transparent'}`}>
                  <Image
                    src={img}
                    alt="."
                    className="object-cover"
                    sizes='(min-width: 768px) 16rem, 100vw'
                    fill
                  />
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

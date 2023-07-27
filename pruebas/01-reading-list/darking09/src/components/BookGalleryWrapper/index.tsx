'use client'
import { BookGalleryWrapperProps } from '@typesFiles/props/bookGalleryWrapper'
import useBookGalleryWrapper from './useBookGalleryWrapper'

export default function BookGalleryWrapper({ children, book } : BookGalleryWrapperProps) {
  const { isAvailable, onClick } = useBookGalleryWrapper(book)

  if (isAvailable) {
    return (
      <div className="cursor-pointer" onClick={onClick}>
        {children}
      </div>
    )
  }

  return (
    <div className="blur-sm contrast-10 opacity-80">
      {children}
    </div>
  )
}

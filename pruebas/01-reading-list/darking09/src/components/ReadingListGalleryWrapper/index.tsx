'use client'
import { BookGalleryWrapperProps } from '@typesFiles/props/bookGalleryWrapper'
import CloseButton from '@components/CloseButton'
import useReadingListGalleryWrapper from './useReadingListGalleryWrapper'

export default function ReadingListGalleryWrapper({ children, book }: BookGalleryWrapperProps) {
  const { onClick } = useReadingListGalleryWrapper(book)

  return (
    <div >
      <CloseButton onClick={onClick} />
      {children}
    </div>
  )
}

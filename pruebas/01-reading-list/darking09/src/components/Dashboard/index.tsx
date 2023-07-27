import AccordionItemWrapper from "@src/components/AccordionItemWrapper"
import ReadingListGallery from "@components/ReadingListGallery"
import BookGallery from "@components/BookGallery"
import { Accordion } from '@szhsin/react-accordion'
import { DashboardProps } from "@typesFiles/props/dashboard"
import useDashboard from "./useDashboard"

export default function Dashboard({ books, readingList }: DashboardProps) {
  const { isMobile } = useDashboard()
  if (isMobile) {
    return (
      <Accordion>
        <AccordionItemWrapper title="Lista de lectura" initialEntered itemKey="1">
          <ReadingListGallery books={readingList} />
        </AccordionItemWrapper>
        <AccordionItemWrapper title="Galería de libros" itemKey="2">
          <BookGallery books={books} />
        </AccordionItemWrapper>
      </Accordion>
    )
  }

  return (
    <>
      <BookGallery books={books} />
      <ReadingListGallery books={readingList} />
    </>
  )
}

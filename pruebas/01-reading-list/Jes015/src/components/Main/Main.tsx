import { SectionOfBooks } from '@/components'
import { useLibraryStore } from '@/store/Library.store'

export const Main = () => {
  const [freeBooks, avaibleBooks] = useLibraryStore((state) => [state.getAvaibleBooks(), state.getReadList()])
  return (
    <main>
      <SectionOfBooks title='Read List' dataToFilter={avaibleBooks} stylesConfig={{ align: 'carrousel', backgroundType: 'transparent' }} />
      <SectionOfBooks title='Avaible books' dataToFilter={freeBooks} stylesConfig={{ align: 'grid', backgroundType: 'gradient' }} />
    </main>
  )
}

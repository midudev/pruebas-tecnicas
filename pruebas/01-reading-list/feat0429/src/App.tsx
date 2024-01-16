import { Footer } from './components/Footer/Footer.tsx'
import { PageHeader } from './components/PageHeader/PageHeader.tsx'
import { ReadingList } from './components/ReadingList/ReadingList.tsx'
import { useBoundStore } from './store/bound-store.ts'
import './App.css'
import { AvailableBooksList } from './components/AvailableBooksList/AvailableBooksList.tsx'
import { Slider } from './components/Slider/Slider.tsx'
import { useFetchBooks } from './hooks/useFetchBooks.ts'
import { useSEO } from './hooks/useSEO.ts'
import { TEXT_CONTENT } from './constants/DOM-text.ts'
import { useSyncTabs } from './hooks/useSyncTabs.ts'

function App () {
  useSEO({ title: TEXT_CONTENT.PageTitle, description: TEXT_CONTENT.PageDescription })
  useSyncTabs()
  const isReadingListDisplayed = useBoundStore(state => state.isReadingListDisplayed)
  const { isLoading } = useBoundStore(state => state.booksFetchResult)
  useFetchBooks()

  return (
    <>
      <PageHeader />
      <main>
      {!isLoading && <Slider />}
        <AvailableBooksList />
        {isReadingListDisplayed && <ReadingList />}
      </main>
     <Footer/>

    </>
  )
}

export default App

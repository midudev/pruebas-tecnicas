import '@/App.css'
import { Header, Main } from '@/components'
import { useLocalStorageSync } from '@/hooks'
import '@fontsource/roboto'
import { Toaster } from 'sonner'

function App () {
  useLocalStorageSync()
  return (
    <>
      <Header />
      <Main />
      <Toaster theme='dark' position='top-center' />
    </>
  )
}

export default App

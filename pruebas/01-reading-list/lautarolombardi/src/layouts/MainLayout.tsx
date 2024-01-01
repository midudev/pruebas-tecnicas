import Footer from '../components/Footer'
import Header from '../components/Header'
import BookListPage from '../pages/BookListPage'

const MainLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[70px,1fr,70px] gap-5">
      <Header />
      <BookListPage />
      <Footer />
    </div>
  )
}

export default MainLayout

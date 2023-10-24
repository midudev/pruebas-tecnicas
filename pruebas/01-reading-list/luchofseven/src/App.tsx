import Footer from './components/Footer'
import ListOfBooks from './components/ListOfBooks'

export default function App (): JSX.Element {
  return (<>
      <main className="main-container">
        <section className="background-section">
          <ListOfBooks />
        </section>
      </main>
      <Footer />
  </>)
}

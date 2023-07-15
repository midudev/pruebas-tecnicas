import Navigation from "./components/Navigation"
import GlobalContextProvider from "./contexts/GlobalContext"

function App() {

  return (
    <div>
      <GlobalContextProvider>
        <Navigation></Navigation>
      </GlobalContextProvider>
    </div>
  )
}

export default App

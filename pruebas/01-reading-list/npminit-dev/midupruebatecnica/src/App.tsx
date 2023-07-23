import Navigation from "./components/Navigation"
import GlobalContextProvider from "./contexts/GlobalContext"
import './styles/global-variables.css'

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

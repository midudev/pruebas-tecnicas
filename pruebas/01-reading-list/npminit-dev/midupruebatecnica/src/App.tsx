import { useContext } from "react"
import Navigation from "./components/Navigation"
import GlobalContextProvider, { GlobalContext } from "./contexts/GlobalContext"
import './styles/global-variables.css'

function App() {

  const { colorMode } = useContext(GlobalContext)

  return (
    <GlobalContextProvider>
      <div>
        <Navigation></Navigation>
      </div>
    </GlobalContextProvider>
  )
}

export default App

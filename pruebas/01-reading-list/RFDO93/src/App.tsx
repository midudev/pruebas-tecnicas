import {
  RouterProvider,
} from "react-router-dom";
import Routes from './routes/Routes'


function App() {
  return (
    <main className="w-full px-6">
      <RouterProvider router={Routes} />
    </main>
  )
}

export default App
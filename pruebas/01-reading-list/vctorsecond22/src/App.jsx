import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import usePages from './views/useViews'
function App() {
  const {arrayRoutes}= usePages()
  const router = createBrowserRouter(arrayRoutes); 
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
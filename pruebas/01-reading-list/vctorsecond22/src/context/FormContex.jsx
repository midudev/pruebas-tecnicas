import { createContext, useState } from "react"
/* import Header from '../components/header'
import Books from '../components/books'
import Form from '../components/form' */
const initialForm = {
  propTitle: "",
  propCategoria: "Todas",
  propPages:'0',
};
export const FilterContext = createContext()
export function FiltersProvaider({ children }) {
  const [form, setform] = useState(()=>{
/*     const formStorage=window.localStorage.getItem('formFilters')  
    if (formStorage) return JSON.parse(formStorage)
    return initialForm */
    const formStorage=JSON.parse(window.localStorage.getItem('formFilters'))  || initialForm 
    return formStorage
})
  return (
    <FilterContext.Provider value={
      { form, setform }
    }>
      { children }
{/*       <div className='container'>
        <nav  className="nav">
          <Header />
          <Form />
        </nav>
        <div>


          <Books />
        </div>
      </div> */}
    </FilterContext.Provider>
  )
}
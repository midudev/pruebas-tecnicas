import { FiltersProvaider } from '../context/FormContex.jsx';
import Header from '../components/header.jsx'
import Books from '../components/books.jsx'
import Form from '../components/form.jsx'
import { PagesProvider } from '../context/PageContext.jsx'

const arrayVistas = ["Libros-disponibles", "Libros-comprados", "Libros-sin-leer", "Libros-deseados"] 
function usePages() {
  let arrayRoutes = [
    {
      path: "/",
      element: <PagesProvider >
        <FiltersProvaider>
          <div className='container'>
            <nav className="nav">
              <Header />
              <Form />
            </nav>
            <div>
              <Books vista='/' />
            </div>
          </div>
        </FiltersProvaider>
      </PagesProvider>,
    },

/*     {
      path: "/*",
      element: <PagesProvider >
        <FiltersProvaider>
          <div className='container'>
            <div>
              <Books vista='/*' />
            </div>
          </div>
        </FiltersProvaider>
      </PagesProvider>,
    },    
 */
  ];

  arrayVistas.forEach((root) => {
    arrayRoutes.push({
      path: root,
      element: <PagesProvider >
        <FiltersProvaider>
          <div className='container'>
            <nav className="nav">
              <Header />
              <Form />
            </nav>
            <div>
              <Books vista={root} />
            </div>
          </div>
        </FiltersProvaider>
      </PagesProvider>,
    })
    return { arrayRoutes }
  });
  return { arrayRoutes }
}
export default usePages;
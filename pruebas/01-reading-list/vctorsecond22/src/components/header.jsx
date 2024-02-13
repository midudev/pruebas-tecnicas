import './header.css'
import { NavLink,Link} from "react-router-dom";
import {CloseIcon,IconMenu} from './Icons'
import { useState } from 'react';
//import usePages  from '../views/useViewsAnterior'
import usePages  from '../views/useVIews'

export function MenuViews() {
  const {arrayRoutes}=usePages()
  const [menuOpen,setMenuOpen] = useState(false);
  const selectorMenu=(menuOpen==false)?'header__menu--hideen':'header__menu--visible'
  return (
      <>
      <section  >
      <button  className='nav__menuHamburger' onClick={() => setMenuOpen(!menuOpen)}>
        <IconMenu />
      </button>    
        <ul className={selectorMenu}>
        <li>
        <button onClick={() => setMenuOpen(!menuOpen)}>
        <CloseIcon  />
        </button>    
        </li>
          {
            arrayRoutes.map((item, index) => {
              const roots=(arrayRoutes[index].path=="/")?"Todos-los-libros"
              : (arrayRoutes[index].path=="Libros-disponibles")?"Libros-disponibles"
              : (arrayRoutes[index].path=="Libros-sin-leer")?"Libros-sin-leer"
              : (arrayRoutes[index].path=="Libros-deseados")?"Libros-deseados"
              :  arrayRoutes[index].path
              return(
              <li
                key={index}
              >
                <Link  to={arrayRoutes[index].path} replace='True' > 
                  {roots.replace(/-/g," ")}
                </Link>
              </li>
              )
            })
          }
        </ul>
      </section>
      </>
    )
  }
const optionsText = ["Logo","Contacto",  "Ayuda", 'menu'] 
const Header = () => {
  return (
   <div className="navbar">
    {
    optionsText.map((item, index) => {
      let selectores = (optionsText[index] == ("Mi cuenta")) ? 'nav__item--vst' : 'nav__item'
      return (
        (optionsText[index] == "menu")
          ?
          <section
            key={index}
          className='nav__item--vst'>
           <MenuViews/>
          </section>
          :
          <a
            key={index}
            className={selectores}
          >
            {optionsText[index]}
          </a>
      
      )
    })}
   </div> 
  )
}
export default Header
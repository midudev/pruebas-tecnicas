//import { PageContext } from '../context/PageContext'
import { ButtonCarPay, ButtonWishes, ButtonCar, ButtonRemove } from './buttons'
import { Car } from './Car'
import './books.css'
import { useEffect, useContext, useState } from "react";
import { FilterContext } from "../context/FormContex";
import useBooks from '../hooks/useBooks.jsx'
import { startDrag } from '../utilerias/drags';

function Books(vista) {
  const rendervista = vista.vista
  const filters = useContext(FilterContext)
  const { booksHome } = useBooks()
  
  switch (rendervista) {
    case '/': {
          const filterResults =
          filters.form.propCategoria == "Todas"
            ? JSON.parse(window.localStorage.getItem('home'))
              .filter((book) => book.pages >= Number(filters.form.propPages)) 
              .filter((book)=>book.titleTransform.match(filters.form.propTitle)) || 
              booksHome.filter((book) => book.pages >= Number(filters.form.propPages)) 
              .filter((book)=>book.titleTransform.match(filters.form.propTitle)) 
            : 
              JSON.parse(window.localStorage.getItem('home')) 
              .filter((book) => book.genreShow === filters.form.propCategoria)
              .filter((book) => book.pages >= Number(filters.form.propPages))
              .filter((book)=>book.titleTransform.match(filters.form.propTitle)) ||
            booksHome.filter((book) => book.genreShow === filters.form.propCategoria)
            .filter((book) => book.pages >= Number(filters.form.propPages))
            .filter((book)=>book.titleTransform.match(filters.form.propTitle));

            //console.log(filterResults.length)
            
      return (
        filterResults ?
          <main className='container_primary' >
{/*             <div>Resultado:{filterResults.length}</div> */}
            <div className='container__books'>
             
              {
                filterResults.map((book) => {
                  const buttonRender = (book.onSwitchCase === 'inCar') ?
                    'renderRemoving' : 'renderAdding'
                  return (
                    <article key={book.id} className='itemBook' draggable="true" >
                      <img src={book.img} alt="not found" draggable="false" />
                      <h2>{book.title}</h2>
                      <footer>
                        <h3>{`Género: ${book.genreShow}`} </h3>
                        <p >
                          <span className='paragrap__title'> {`Año:  ${book.year}`}</span>
                          <span className='paragrap__title'> {`Páginas:  ${book.pages}`}</span>
                          <br />
                          <span className='cardFooter__synopsis--style'>{book.synopsis}</span>
                        </p>
                        <div className='footer__btn'>
                          {(buttonRender === 'renderAdding') ?
                            <ButtonWishes id={book.id} />
                            :
                            <ButtonRemove id={book.id} />
                          }
                          < ButtonCarPay id={book.id} />
                        </div>
                      </footer>
                    </article>)
                })}
            </div>
            <aside className='aside'>
              <Car />
              <p className='aside__banner'>BANNER</p>
            </aside>
          </main>
          :
          <div>
            Error
          </div>
      )
    }
    case 'Libros-deseados': {
            const filterResults =
            filters.form.propCategoria == "Todas"
              ? JSON.parse(window.localStorage.getItem('car'))
                .filter((book) => book.pages >= Number(filters.form.propPages)) 
                .filter((book)=>book.titleTransform.match(filters.form.propTitle)) || 
                booksHome.filter((book) => book.pages >= Number(filters.form.propPages))
                .filter((book)=>book.titleTransform.match(filters.form.propTitle)) 
              : JSON.parse(window.localStorage.getItem('car'))
                .filter((book) => book.genreShow === filters.form.propCategoria)
                .filter((book) => book.pages >= Number(filters.form.propPages)) 
                .filter((book)=>book.titleTransform.match(filters.form.propTitle)) ||
              booksHome.filter((book) => book.genreShow === filters.form.propCategoria)
              .filter((book) => book.pages >= Number(filters.form.propPages))
              .filter((book)=>book.titleTransform.match(filters.form.propTitle));
      return (
        filterResults ?
          <div className='container_primary' >
            <div className='container__books'>
              {
                filterResults.map((book) => {
                  return (
                    <article key={book.id} className='itemBook' draggable="true" onDragStart={(evt) => startDrag(evt, item)}>
                      <img src={book.img} alt="not found" draggable="false" />
                      <h2>{book.title}</h2>
                      <footer>
                        <h3>{`Género: ${book.genreShow}`} </h3>
                        <p >
                          <span className='paragrap__title'> {`Año:  ${book.year}`}</span>
                          <span className='paragrap__title'> {`Páginas:  ${book.pages}`}</span>
                          <br />
                          <span className='cardFooter__synopsis--style'>{book.synopsis}</span>
                        </p>
                        <div className='footer__btn'>
                          <ButtonRemove id={book.id} />
                        </div>
                      </footer>
                    </article>)
                })}
            </div>
            <aside className='aside'>
              <p className='aside__banner'>BANNER</p>
            </aside>
          </div>
          :
          <div>
            Error
          </div>
      )
    }
    case 'Libros-disponibles': {
            const filterResults =
            filters.form.propCategoria == "Todas"
              ? JSON.parse(window.localStorage.getItem('home')).filter(item => item.onSwitchCase === '')
                .filter((book) => book.pages >= Number(filters.form.propPages)) 
                .filter((book)=>book.titleTransform.match(filters.form.propTitle)) || 
                booksHome.filter(item => item.onSwitchCase === '')
                .filter((book) => book.pages >= Number(filters.form.propPages))
                .filter((book)=>book.titleTransform.match(filters.form.propTitle))

              : JSON.parse(window.localStorage.getItem('home'))
                .filter(item => item.onSwitchCase === '')
                .filter((book) => book.genreShow === filters.form.propCategoria)
                .filter((book) => book.pages >= Number(filters.form.propPages)) 
                .filter((book)=>book.titleTransform.match(filters.form.propTitle)) ||
              booksHome.filter((book) => book.genreShow === filters.form.propCategoria)
              .filter(item => item.onSwitchCase === '')
              .filter((book) => book.pages >= Number(filters.form.propPages))
              .filter((book)=>book.titleTransform.match(filters.form.propTitle))

      return (
        filterResults ?
          <div className='container_primary' >
            <div className='container__books'>
              {
                filterResults.map((book) => {
                  const buttonRender = (book.onSwitchCase === 'inCar') ?
                    'renderRemoving' : 'renderAdding'
                  return (
                    <article key={book.id} className='itemBook' draggable="true" >
                      <img src={book.img} alt="not found" draggable="false" />
                      <h2>{book.title}</h2>
                      <footer>
                        <h3>{`Género: ${book.genreShow}`} </h3>
                        <p >
                          <span className='paragrap__title'> {`Año:  ${book.year}`}</span>
                          <span className='paragrap__title'> {`Páginas:  ${book.pages}`}</span>
                          <br />
                          <span className='cardFooter__synopsis--style'>{book.synopsis}</span>
                        </p>
                        <div className='footer__btn'>
                          {(buttonRender === 'renderAdding') ?
                            <ButtonWishes id={book.id} />
                            :
                            <ButtonRemove id={book.id} />
                          }
                        </div>
                      </footer>
                    </article>)
                })}
            </div>
            <aside className='aside'>
              <Car />
              <p className='aside__banner'>BANNER</p>
            </aside>
          </div>
          :
          <div>
            Error
          </div>
      )
    }
    case '/*': {

      return(
      <section> <span className='books_section--text'>Ha ocurrido un error reportalo a nuestro equipo de soporte</span></section>
      )
    }
  }
}
export default Books
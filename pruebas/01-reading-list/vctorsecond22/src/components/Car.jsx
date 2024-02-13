import { useContext } from 'react'
import {PageContext} from '../context/PageContext'
import './Car.css'
//import { CarIcon, ClearCartIcon } from './Icons.jsx'
//import { useCar } from '../hooks/useCar.js'
import {ButtonDecrement, ButtonIncrement, ButtonViewCar, ButtonClear, ButtonRemove } from './buttons'
//import useBooks from '../hooks/useBooks.jsx'


function CarItem (book) {
//  const {state} = useContext(PageContext)

  let price=0
  let quantity=0
  //const {filterResults} = useBooks()  
  return (
    <li>
      <div className='car__title'>
        <strong>{book.title}</strong> - ${price}
      </div>
      <img
        src={book.img}
        alt={book.title}
      />
      <footer className='car__footer'>
        <ButtonIncrement/>
        <small>
          Cantidad: {quantity}
        </small>
        <ButtonDecrement/>
        <ButtonRemove id={book.id}/>        
      </footer>
    </li>
  )
}
export function Car () {
  //const {filterResults} = useBooks()
  const {state} = useContext(PageContext)
 /*  let CarState = state.car
 //const filterResults = []
  console.log(CarState) 
  console.log(state) 
 */
  //console.log ('CarState ' )  
//  console.log(state.car.length) 
  return (
    <>
    <ButtonViewCar/>
      <aside className='car'>
        <div className='headerCar__buttons'>
          <ButtonClear/>  
          <label className='car__header--label'> Libros en el carrito:<span> {state.car.length} </span></label>
          <button className='car__header--btn'>Comprar todo</button>
        </div>
        <ul>
          { 
          state.car.map(book => (
            <CarItem
              key={book.id}
               /* addToCar={() => addToCar(book)} */ 
              {...book}
            />
          ))}
        </ul>
      </aside>
    </>
  )
}
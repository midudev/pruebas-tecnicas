import { useContext } from 'react'
import {PageContext} from '../context/PageContext' 
import { useId } from 'react'
import {IconCarPay, CarIcon, ClearCarIcon, AddToCarIcon, RemoveFromCarIcon } from './Icons.jsx'
import './Car.css'
import useBooks from '../hooks/useBooks.jsx'

export function ButtonViewCar() {
  const carCheckboxId = useId()
  return (
    <>
      <label className='car-button' htmlFor={carCheckboxId}>
        <CarIcon />
      </label>
      <input id={carCheckboxId} type='checkbox' hidden />
    </>
  )
}
export function ButtonCar() {
  return (
    <button>
      <CarIcon/>
    </button>
  )
}

export function ButtonRemove(id) {
  const { removeFromCar} = useContext(PageContext)  
  return (
    <button className='cardFooter__btnRemove--style'  onClick={removeFromCar(id)}>
      <RemoveFromCarIcon/>
      <span>
      Remover
      </span>
    </button>
  )
}

export function ButtonWishes(id) {
const {addToCar} = useContext(PageContext)
//console.log(id)
const handleStorage = (event) => {
  switch (event.key) {
    case 'home': {
/*       console.log('home')
      console.log(event.newValue) */
      break;
    }
    case 'car': {
      console.log('car')
      // console.log(event)
      const nvoValue = JSON.parse(event.newValue)
      //console.log(nvoValue)
      const sendValue={id:nvoValue[nvoValue.length - 1].id}
      console.log(sendValue)
     // addToCar(nvoValue[nvoValue.length - 1].id)
     //addToCar(sendValue)

    }
  }
}
window.addEventListener('storage', handleStorage)

return (
    <button className='cardFooter__btnAdding--style'  onClick={ addToCar(id)}  > {/*  console.log (addToCar) */} {/* onClick={()=>  addToCar(id)} */}
    <AddToCarIcon/>
    <span>
    Agregar  
    </span>    
    </button>
  )
}

export function ButtonIncrement() {
  return (
    <button className='carFooter__buttonsQuantity--style'>+</button>
  )
}
export function ButtonDecrement() {
  return (
    <button className='carFooter__buttonsQuantity--style'>-</button>
  )
}

export function ButtonClear() {
  const {clearCar} = useContext(PageContext)
  const {booksHome} = useBooks()
  return (
  <>
    <button className='car__header--btn'  onClick={clearCar([...booksHome])} > {/* onClick={clearCar}> */}
      <ClearCarIcon />
      <span>
        Borrar todo
      </span>
    </button>
  </>
  )
}

export function ButtonCarPay(id) {
  const {addToPurchased} = useContext(PageContext)
  return (
  <>
    <button className='cardFooter__btnBuy--style' onClick={addToPurchased(id)} >
    <IconCarPay/>
    <span>
      Comprar
    </span>
    </button>
  </>
  )
}
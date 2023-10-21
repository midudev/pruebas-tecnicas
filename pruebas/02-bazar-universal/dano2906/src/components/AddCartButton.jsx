import { useCartStore } from "@store/cartStore.js"
import {useEffect,useState} from 'react'
export default function AddCartButton({id}) {
    const { cart, add, remove } = useCartStore(state => state)

    const [inCart, setInCart] = useState(false)
    useEffect(()=>{
        if(cart.some(product => product.id === id)) {
            setInCart(true)
        }
    },[])

    const handleClick = (id) => {
        if(inCart === false) {
            add(id)
            setInCart(true)
        } else {
            remove(id)
            setInCart(false)
        }
    }

  return (
    <button className="p-1 my-1 text-base font-light transition-all rounded-lg font-tilt text-purple-950 bg-gradient-to-br from-blue-200 via-pink-200 to-orange-200 hover:scale-105" onClick={()=>handleClick(id)}>{!inCart?"Añadir al carrito 🛒":"Eliminar del carrito 🛒"}</  button>
  )
}

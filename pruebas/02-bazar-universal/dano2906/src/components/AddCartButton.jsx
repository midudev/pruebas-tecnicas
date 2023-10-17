import { useCartStore } from "@store/cartStore.js"
import {useEffect,useState} from 'react'
export default function AddCartButton({id}) {
    const { cart, add, remove } = useCartStore(state => state)

    const [inCart, setInCart] = useState(false)
    useEffect(()=>{
        if(cart.some(instance => instance === id)) {
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
    <button className="p-1 text-base font-tilt font-light text-purple-950 bg-gradient-to-br from-blue-200 via-pink-200 to-orange-200 my-1 rounded-lg transition-all hover:scale-105" onClick={()=>handleClick(id)}>{!inCart?"Añadir al carrito 🛒":"Eliminar del carrito 🛒"}</  button>
  )
}

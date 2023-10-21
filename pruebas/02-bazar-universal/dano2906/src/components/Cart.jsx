import { useCartStore } from "@store/cartStore.js"
import {useEffect,useState} from 'react'
export default function Cart() {
    const { cart } = useCartStore(state => state)
    const [cartItems,setCartItems] = useState([])
    useEffect(()=>{
        setCartItems(cart)
    },[])
  return (
    <section className="max-w-4xl min-h-screen p-3 mx-auto">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {
                cartItems.map(({id,title,description,category,price,rating},index) => (
                    <article key={index} className="flex flex-col items-start justify-between w-full h-auto p-3 rounded-lg shadow-lg gap-y-1 bg-gradient-to-br from-blue-300 via-pink-300 to-orange-300">
                        <div className="flex flex-col items-start justify-start">
                            <img src="/placeholder-product-image.png" alt="Imagen del producto" width={128} height={128} transition:name={`image--${id}`}/>
                            <h2 className="text-2xl font-bold font-tilt text-purple-950" transition:name={`title--${id}`}>{title}</h2>
                            <p className="text-base font-tilt font-light text-purple-950 [text-wrap:balance]" transition:name={`desc--${id}`}>{description}</p>
                            <span className="text-sm font-normal font-tilt text-purple-950" transition:name={`category--${id}`}>{category}</span>
                            <span className="text-sm font-light font-tilt text-purple-950" transition:name={`price--${id}`}>Price: ${price}</span>
                            <span className="text-sm font-light font-tilt text-purple-950" transition:name={`rating--${id}`}>Rating: {rating}/5</span> 
                        </div>    
                        <a href={`/items/${id}`} className="p-1 my-2 text-sm font-light underline rounded-lg decoration-2 underline-offset-2 md:text-lg font-tilt text-purple-950 tranisiton-all hover:opacity-75">Detalles del producto...</a> 
                    </article>
                ))
            }
        </ul>
    </section>
  )
}

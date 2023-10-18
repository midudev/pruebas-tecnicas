import { useCartStore } from "@store/cartStore.js"
import {useEffect,useState} from 'react'
export default function Cart() {
    const { cart } = useCartStore(state => state)
    const [cartItems,setCartItems] = useState([])
    useEffect(()=>{
        setCartItems(cart)
    },[])
  return (
    <section className="max-w-4xl min-h-screen p-2 mx-auto">
        <ul className="grid col-span-1 gap-2 sm:col-span-2 md:col-span-3">
            {
                cartItems.map(({id,title,description,category,price,rating},index) => (
                    <article key={index} className="flex flex-col items-start justify-start w-full h-auto p-3 rounded-lg shadow-lg gap-y-1 bg-gradient-to-br from-blue-300 via-pink-300 to-orange-300">
                        <img src="/placeholder-product-image.png" alt="Imagen del producto" width={128} height={128} transition:name={`image--${id}`}/>
                            <div className="flex flex-col items-start justify-start">
                                <h2 className="text-2xl font-bold font-tilt text-purple-950" transition:name={`title--${id}`}>{title}</h2>
                                <p className="text-base font-tilt font-light text-purple-950 [text-wrap:balance]" transition:name={`desc--${id}`}>{description}</p>
                                <span className="text-sm font-normal font-tilt text-purple-950" transition:name={`category--${id}`}>{category}</span>
                                <span className="text-sm font-light font-tilt text-purple-950" transition:name={`price--${id}`}>Price: ${price}</span>
                                <span className="text-sm font-light font-tilt text-purple-950" transition:name={`rating--${id}`}>Rating: {rating}/5</span>
                                <a href={`/items/${id}`} className="p-1 my-2 text-sm font-light rounded-lg md:text-lg font-tilt text-purple-950 bg-gradient-to-br from-blue-200 via-pink-200 to-orange-200 ">Detalles</a>
                            </div>     
                    </article>
                ))
            }
        </ul>
    </section>
  )
}

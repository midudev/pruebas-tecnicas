import { useCartStore } from "@store/cartStore.js"
import {useEffect,useState} from 'react'
export default function Cart() {
    const { cart } = useCartStore(state => state)
    const [cartItems,setCartItems] = useState([])
    useEffect(()=>{
        setCartItems(cart)
    },[])
  return (
    <section className="max-w-4xl mx-auto min-h-screen p-2">
        <ul className="grid col-span-1 sm:col-span-2 md:col-span-3 gap-2">
            {
                cartItems.map(({title,description,category,price,rating},index) => (
                    <article key={index} class="w-full h-auto p-3 flex flex-col items-start justify-start gap-y-1 bg-gradient-to-br from-blue-300 via-pink-300 to-orange-300 shadow-lg rounded-lg">
                            <div class="flex flex-col items-start justify-start">
                                <h2 class="text-2xl font-tilt font-bold text-purple-950" transition:name="title">{title}</h2>
                                <p class="text-base font-tilt font-light text-purple-950 [text-wrap:balance]" transition:name="desc">{description}</p>
                                <span class="text-sm font-tilt font-normal text-purple-950" transition:name="category">{category}</span>
                                <span class="text-sm font-tilt font-light text-purple-950" transition:name="price">Price: ${price}</span>
                                <span class="text-sm font-tilt font-light text-purple-950" transition:name="rating">Rating: {rating}/5</span>
                            </div>     
                    </article>
                ))
            }
        </ul>
    </section>
  )
}

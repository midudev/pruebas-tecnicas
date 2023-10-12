import { Product } from "@/components"
import type { ProductArray } from "@/models"
import { SearchService } from "@/services"
import { useEffect, useState } from "react"

export const DynamicProductsList = () => {
    const [searchParam, setSearchParam] = useState('')
    const [products, setProducts] = useState<ProductArray>([])

    useEffect(() => {
        const handleOnMessage = (event: CustomEventInit) => {
            const searchParams = event.detail

            if (!(searchParams instanceof URLSearchParams)) return
            
            const newSearchParam = searchParams.get('search')
            console.log(newSearchParam)
        }

        SearchService.listenEvent(handleOnMessage)
        return () => {
            SearchService.clearEvent(handleOnMessage)
        }
    }, [])

    useEffect(() => {
        if (searchParam === '') return

        
        
    }, [searchParam])

    return (
        <ul>
            <li>
                {
                    products.map((productData) => (
                        <Product key={productData.id} data={productData} mode="min" />
                    ))
                }
                
            </li>
        </ul>
    )
}
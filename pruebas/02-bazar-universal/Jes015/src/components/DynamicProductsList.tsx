import type { ProductArray } from "@/models"
import { useEffect, useState } from "react"

const DynamicProductsList = () => {
    const [products, setProducts] = useState<ProductArray>([])

    useEffect(() => {}, [])

    return (
        <ul>
            <li>
                <Product
            </li>
        </ul>
    )
}
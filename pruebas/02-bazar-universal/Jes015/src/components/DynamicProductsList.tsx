import { Product } from "@/components"
import { getBackRoutes, swrFetcher } from "@/config"
import type { ProductArray } from "@/models"
import { SearchService } from "@/services"
import { useEffect, useState } from "react"
import useSWR from "swr"

const defaultValues = {
    searchParam: '' // <-- falsy value to avoid swr requests
}


export const DynamicProductsList = () => {
    const [searchParam, setSearchParam] = useState(defaultValues.searchParam)
    const { data: products } = useSWR<ProductArray>(searchParam !== '' && getBackRoutes().items(searchParam), swrFetcher)

    useEffect(() => {

        const setDefaultSearchParam = () => {
            const actualURL = new URL(location.toString())
            const actualSearchParam = actualURL.searchParams.get('search')

            if (actualSearchParam == null) return

            setSearchParam(actualSearchParam)
        }

        setDefaultSearchParam()
        const handleOnMessage = (event: CustomEventInit) => {
            const searchParams = event.detail

            if (!(searchParams instanceof URLSearchParams) || searchParam == null) return

            const newSearchParam = searchParams.get('search')

            if (newSearchParam == null) return
            
            setSearchParam(newSearchParam)
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
                    products?.map((productData) => (
                        <Product key={productData.id} data={productData} mode="min" />
                    ))
                }

            </li>
        </ul>
    )
}
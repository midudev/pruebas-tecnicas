import { Loader, Product } from "@/components"
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
    const { data: response, error, isLoading, isValidating } = useSWR<{ error: string } | ProductArray>(searchParam !== '' && getBackRoutes().items(searchParam), swrFetcher)

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

    console.log(response)

    return (
        <ul className="flex flex-col gap-2">
            {
                (isLoading) &&
                <div className="flex flex-col justify-center items-center mt-20">
                    <Loader />
                </div>
            }
            {
                (!Array.isArray(response) && response?.error === 'NO_ITEMS_FOUND') &&
                <div className="flex flex-col justify-center items-center">
                    <h3 className="mt-20 text-5xl drop-shadow-text font-bold">NOT FOUND</h3>
                </div>
            }
            {
                (Array.isArray(response) && response?.[0] != null && error == null) && response?.map((productData) => (
                    <li key={productData.id}>
                        <Product data={productData} mode="all" containerDirection="flex-row" />
                    </li>
                ))
            }
        </ul>
    )
}
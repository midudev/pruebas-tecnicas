import { Loader, Product } from "@/components"
import { getBackRoutes, swrFetcher } from "@/config"
import type { ApiGetItemById, Product as ProductType } from "@/models"
import useSWR from "swr"

interface Props {
    productId: number
}

export const ProductItem: React.FC<Props> = ({ productId }) => {
    const {data, isLoading} = useSWR<ApiGetItemById>(getBackRoutes().item(productId), swrFetcher)

    if (data == null && !isLoading) {
        return 'error'
    }

    if (isLoading) {
        return <Loader />
    }

    if (data != null && "error" in data) {
        return data.error
    }

    return (
        <Product
            as="div"
            containerGridTemplateArea='"productData" "images" "productButtons"'
            data={data?.productFound as ProductType}
            mode="all"
            containerDirection="flex-col"
            titleStyles="text-[2.2em]"
            showSideImages
            showBuyButton
        />
    )
}
import type { Product, ProductArray } from "@/models"

export interface ApiError {
    error: string
}

export interface ApiGetSuccessItemById {
    productFound: Product
}

export type ApiGetItemById = ApiGetSuccessItemById | ApiError
export type ApiGetItemsBySearchParam = ProductArray | ApiError
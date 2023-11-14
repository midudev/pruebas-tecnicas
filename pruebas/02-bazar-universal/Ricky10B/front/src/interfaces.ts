import { ActionFunctionArgs, ParamParseKey, Params } from 'react-router-dom'

export interface RequestLoader {
  request: Request
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsRequestProp {
  search: string | null
}

export interface loaderProducts {
  products: Product[]
}

export interface ProductRequestProp {
  idProduct: number
}

const pathItem = {
  itemParam: '/items/:id'
}

export interface ItemLoaderParams extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof pathItem.itemParam>>
}

export interface loaderItem {
  product: Product
}

export interface IconosCategoria {
  [key: string]: string
}

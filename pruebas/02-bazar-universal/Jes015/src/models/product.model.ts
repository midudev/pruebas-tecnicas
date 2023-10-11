export interface Product {
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          string;
    images:             string[];
}

export type ProductArray = Product[]

export const ProductCategories = {
    smartphones: 'smartphones',
    laptops: 'laptops',
    fragrances: 'fragrances',
    skincare: 'skincare',
    groceries: 'groceries',
    "home-decoration": "home-decoration"
}
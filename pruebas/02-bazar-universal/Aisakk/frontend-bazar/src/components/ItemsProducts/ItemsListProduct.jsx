import { useState,useEffect, Suspense } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import ProductItem from './ProductItem'
import SearchBar from "../SearchBars/SearchBar";

function ItemsListProduct(){
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("search");
  
    useEffect(()=>{
        fetch('http://localhost:3000/api/search')
        .then(res => res.json())
        .then(data =>{
            setProducts(data.products)
        }).finally(
            setIsLoading(false)
        )
    }, [searchTerm])
    return(
        <main>
            <SearchBar classNameDirection={'row'}/>
            {isLoading 
            ? <Loading /> 
            : (products.map((item) => (
                <ProductItem
                  key={item.id}
                  item={item}
                  navigate={navigate}
                />
              )))}
    
           
        </main>
       
    )
}

export default ItemsListProduct;
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
    const searchTerm = searchParams.get("q");
  
    useEffect(()=>{
        fetch(`http://localhost:3000/api/items?q=${searchTerm}`)
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        }).finally(
            setIsLoading(false)
        )
    }, [searchTerm])
    return(
        <main>
            <SearchBar classNameDirection={'row'}/>
            {isLoading 
            ? <Loading /> 
            : (products.data && products.data.length !== 0 
                ? <p className="text-center">{products.data}</p>
                : (products.map((item) => (
                    <ProductItem
                      key={item.id}
                      item={item}
                      navigate={navigate}
                    />
                  )))) }
    
           
        </main>
       
    )
}

export default ItemsListProduct;
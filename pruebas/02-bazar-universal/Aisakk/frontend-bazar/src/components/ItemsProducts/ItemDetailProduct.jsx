import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import StarItem from "../StarItems/StarItem"
import Loading from "../Loading/Loading";
import SearchBar from "../SearchBars/SearchBar";
function ItemDetailProduct(){
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    let {productId} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:3000/api/items/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .finally(
            setIsLoading(false)
        )
    }, [])
    function Back(){
        navigate("/items")
    }
    return(
      <>
      <SearchBar classNameDirection={'row'}/>
    
      {isLoading 
      ? <Loading />
      : (  <div className="flex flex-col justify-center my-4" id={product.id}>
      <div className="content-image flex justify-center" >
          <div className="thumbnail flex flex-col justify-center">
              <img src={product.thumbnail} alt={product.title} className="rounded-full h-40 w-40"/>
          </div>
          <div className="images">
              {product.images &&  product.images.slice(0,3).map(item => <img src={item} className="rounded-full h-16 w-16"/>)}
          </div>
      </div>
      <div className="content-title flex flex-col">
          <div className="title flex justify-center">
              <h2 className="font-bold">{product.title}</h2> - <h2 className="font-bold">{product.brand}</h2>
          </div>
          <div className="content-price flex justify-center">
             <div className="price flex flex-col justify-center">
                   <h3 className="font-bold text-center">{product.price}$</h3>
                  <small className="font-bold text-center">{product.stock} disponibles</small><br />
             </div>
             <div className="content-rating">
                  <div className="rating"><StarItem rating={product.rating}/></div>
             </div>
          </div>
      </div>
      <div className="content-description flex justify-center">
          <p>{product.description}</p>
      </div>
      <div className="flex flex-col items-center">
      <button className="w-80 h-12 text-purple-700 shadow rounded-full ">Comprar</button>
      <button className="w-80 h-12 text-gray-700 shadow rounded-full " onClick={()=>Back()}> back </button>
      </div>
   
  </div>)
    }
      </>
    )
}


export default ItemDetailProduct
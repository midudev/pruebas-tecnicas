
import search from '../../assets/search.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function SearchBar({classNameDirection}){
    const [product, setProduct] = useState("")
    let styles = {
        direction: classNameDirection == 'row' ? 'row justify-center' : 'col items-center',
        sizeSvg: classNameDirection == "row"? "h-12" : "h-32 w-32",
        sizeInput: classNameDirection == 'row' ? "h-12 border-solid border-2 border-purple-700 rounded-md" : "w-50 border-solid border-2 border-purple-700 rounded-md",
        sizeButton: classNameDirection == "row" ? " h-12 text-purple-700 bg-white shadow w-16 rounded-sm" : "text-purple-700 bg-white shadow w-24 rounded-sm",
        title: classNameDirection == "row" ? "hidden" : "flex text-2xl justify-center"
    }
    
    const navigate = useNavigate()
    function handleClick(e){
        e.preventDefault()
        navigate(`items/?search=${product}`) 
    }
    function Back(){
        navigate("/")
    }
    return (    
        <>
            <div className={" flex gap-4 flex-"+styles.direction}>
                <div className="flex justify-center">
                    <div className={"flex flex-"+classNameDirection}>
                        <img src={search} alt="asset search" className={styles.sizeSvg} onClick={()=>Back()}/>
                        <h4 className={styles.title}>Bazar Online</h4>
                    </div>
             
                </div>
                <form className={"flex gap-3 justify-center"} onSubmit={handleClick}>
                    <input type="text" onChange={(e)=>setProduct(e.target.value)} placeholder="Buscar Producto" className={styles.sizeInput} />
                    <button type="submit" className={styles.sizeButton}>Buscar</button>
                </form>
            </div>
        </>
    )
}

export default SearchBar
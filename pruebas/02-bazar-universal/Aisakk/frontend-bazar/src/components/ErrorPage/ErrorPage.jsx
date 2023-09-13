import error from '../../assets/error.svg'
import { useNavigate } from 'react-router-dom'
function ErrorPage(){
    const navigate = useNavigate()
    function Back(){
        navigate("/")
    }
    return(
        <div className='h-screen w-full grid grid-cols-1 place-content-center'>
            <img src={error} alt="error" className='h-full w-full object-cover' />
            <p className="font-bold text-purple-700 text-center my-5">Pagina no Encontrada</p>
            <button className="w-80 h-12 text-purple-700 shadow rounded-full" onClick={()=>Back()}> Regresar</button>
        </div>
    )
}


export default ErrorPage
import { useListBook } from "../hook/useListBook"

export const Footer = () =>{
    const {read} = useListBook()

    return(
        <footer className='footer'>
            {
            JSON.stringify(read,null,1)
            }
        </footer>
        
    )
}
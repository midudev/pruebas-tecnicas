export default function Book({title,cover,onClick,width=200}){
    return <img src={cover} alt={title} onClick={onClick} className="book" style={{width:width}}/>
}
export default function Book({title,cover,onClick}){
    return <img src={cover} alt={title} onClick={onClick} className="book"/>
}
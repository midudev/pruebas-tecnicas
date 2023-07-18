export default function Book({title,cover,onClick}){
    return <img src={cover} alt={title} onClick={onClick} width={200} height={320}/>
}
import Image from "next/image";

export default function Book({title,cover,onClick}){
    return <Image src={cover} alt={title} onClick={onClick} height={50} width={50}/>
}
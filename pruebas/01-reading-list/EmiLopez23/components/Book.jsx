import Image from "next/image";

export default function Book({title,cover,onClick}){
    return <Image src={cover} alt={title} onClick={onClick} width={200} height={320}/>
}
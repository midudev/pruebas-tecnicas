export default function Book({title,cover,authorName,synopsis,onClick,className,children}){
    return <article className={className} onClick={onClick}>
    <img src={cover} alt={`${title} cover`} className="book-cover"/>
    <div className="book-description">
        <h2>{title}</h2>
        <h5>By: {authorName}</h5>
        <p>{synopsis}</p>
        {children}
    </div>
</article>
}
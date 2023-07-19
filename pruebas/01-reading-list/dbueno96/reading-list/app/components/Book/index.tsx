interface IBookComponent extends IBook {}

export default function Book (props: IBookComponent) {
  const { title, synopsis, cover } = props

  return (
    <article>
      <p className='text-sm' />
      {title}
      <picture>
        <img src={cover} alt={title} />
      </picture>
      <p className='text-xs '>
        {synopsis}
      </p>
    </article>
  )
}

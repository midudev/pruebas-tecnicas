import Button from '../Button.index'

interface IBookComponent extends IReadingListBook {}

export default function Book (props: IBookComponent) {
  const { title, ISBN, synopsis, cover } = props

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
      <Button ISBN={ISBN} />
    </article>
  )
}

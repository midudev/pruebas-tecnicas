import Button from '../Button'

interface IBookComponent extends IWithClassName, IReadingListBook, IWithClickable {}

export default function Book (props: IBookComponent) {
  const { title, ISBN, cover, onClick } = props

  return (
    <article>
      <picture>
        <Button onClick={() => onClick(ISBN)}>
          <img className='max-h-[30rem]' src={cover} alt={title} />
        </Button>
      </picture>
    </article>
  )
}

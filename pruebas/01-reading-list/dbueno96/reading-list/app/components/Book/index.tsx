interface IBook extends IWithTiltleAndClassName {}

export default function Book (props: IBook) {
  const { title } = props

  return (
    <article>
      {title}
    </article>
  )
}

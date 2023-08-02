interface Props {
  count: number
}

export const ReadingListMessage = ({ count }: Props) => {
  const getMessage = () => {
    if (count === 0) {
      return 'La lista de lectura está vacía'
    }
    if (count === 1) {
      return '1 libro en la lista de lectura'
    }
    return `${count} libros en la lista de lectura`
  }

  const message = getMessage()

  return (
    <p className='font-light text-neutral-400 pt-4'>
      {message}
    </p>
  )
}

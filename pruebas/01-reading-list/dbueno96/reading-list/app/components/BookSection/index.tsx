import BookList from '../BookList/indext'
import Layout from './Layout'

interface IBookSection extends IWithTiltleAndClassName, ILibrary {
}

export default function BookSection (props: IBookSection) {
  const { title, books, className = '' } = props

  return (
    <Layout title={title} className={`transition-[width] duration-500 ease-out rounded-md border-solid border-2 border-gray-50 w-1/12 hover:w-11/12 ${className}`}>
      <BookList books={books} />
    </Layout>
  )
}

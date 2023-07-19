import BookList from '../BookList/indext'
import Layout from './Layout'

interface IBookSection {
    title: string
    className?: string
}

export default function BookSection (props: IBookSection) {
  const { title, className = '' } = props
  return (
    <Layout title={title} className={`transition-[width] duration-150 ease-out rounded-md border-solid border-2 border-gray-50 hover:w-11/12 ${className}`}>
      <BookList />
    </Layout>
  )
}

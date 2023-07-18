import Layout from './Layout'

interface IPageSection {
    title: string
}

export default function BookSection (props: IPageSection) {
  const { title } = props
  return (
    <Layout className='transition-[width] duration-150 ease-out rounded-md border-solid border-2 border-gray-50 hover:w-11/12'>
      <section>{title}</section>
    </Layout>
  )
}

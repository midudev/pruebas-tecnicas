import Header from '@/components/header'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className='max-w-5xl p-6 mx-auto'>{children}</main>
    </>
  )
}

export default Layout

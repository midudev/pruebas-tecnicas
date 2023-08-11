import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
      <h2>Footer</h2>
    </>
  )
}

export default RootLayout

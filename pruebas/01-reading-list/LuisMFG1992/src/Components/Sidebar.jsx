import { HiChevronDoubleRight } from 'react-icons/hi'

const Sidebar = ({ handelSidabar }) => {
  return (
    <div className="inline-flex">
      <div className="w-full min-h-[100vh] z-10 backdrop-blur fixed top-0"></div>
      <div className="flex flex-col w-full xs:w-[70%] sm:w-[50%] lg:w-[40%] max-w-[600px] bg-gray-001 z-10 h-screen fixed top-0 right-0 p-4">
        <HiChevronDoubleRight size={'2rem'} onClick={handelSidabar} />
      </div>
    </div>
  )
}

export default Sidebar

import { HiChevronDoubleRight } from 'react-icons/hi'

const Sidebar = ({ handelSidabar, readingList }) => {
  return (
    <div className="inline-flex">
      <div className="w-full min-h-[100vh] [z-index:100] backdrop-blur fixed top-0"></div>
      <div
        className="flex flex-col gap-4 w-full xs:w-[70%] [z-index:100] xs:min-w-[350px] sm:w-[50%] sm:min-w-[400px] lg:w-[50%] max-w-[600px] bg-gray-001  min-h-screen fixed top-0 right-0 p-4"
        onBlur={handelSidabar}
      >
        <HiChevronDoubleRight size={'2rem'} onClick={handelSidabar} />
        <p className="text-center text-3xl font-semibold">Lista de lectura</p>
        <div className="flex flex-wrap gap-4 justify-center items-center p-4">
          {readingList?.map((element) => (
            <div
              key={element.book.ISBN}
              className=" flex flex-col justify-center items-center max-w-[150px]"
            >
              <img
                src={element.book.cover}
                className="w-[150px] h-[200px] object-scale-down "
              />
              {/* <p className="text-center">{element.book.title}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar

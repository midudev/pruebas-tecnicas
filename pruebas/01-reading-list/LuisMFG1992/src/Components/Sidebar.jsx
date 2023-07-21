import { HiChevronDoubleRight } from 'react-icons/hi'

const Sidebar = ({ handelSidabar, readingList }) => {
  return (
    <div className="inline-flex">
      <div className="w-full min-h-[100vh] z-10 backdrop-blur fixed top-0"></div>
      <div className="flex flex-col w-full xs:w-[70%] xs:min-w-[350px] sm:w-[50%] sm:min-w-[400px] lg:w-[50%] max-w-[600px] bg-gray-001 z-10 h-screen fixed top-0 right-0 p-4">
        <HiChevronDoubleRight size={'2rem'} onClick={handelSidabar} />
        <div className="flex flex-wrap gap-4 justify-center items-center ">
          {readingList?.map((element) => (
            <div
              key={element.book.ISBN}
              className=" flex flex-col justify-center items-center max-w-[150px]"
            >
              <img
                src={element.book.cover}
                className="w-[150px] h-[200px] object-scale-down "
              />
              <p className="text-center">{element.book.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar

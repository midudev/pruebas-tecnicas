import logo from '../assets/logo.png'
import FavList from '../assets/FavList.png'
import SearchBar from './SearchBar'

import { IoIosSearch } from 'react-icons/io'

const Navbar = ({ handelSidabar, readingList }) => {
  return (
    <div className="inline-flex justify-between items-center w-full pt-4 px-4 pb-2 fixed top-0 bg-gray-001 z-10">
      <img src={logo} className="w-[130px] h-[40px]" />

      <div
        className="inline-flex justify-between items-center gap-4"
        onClick={handelSidabar}
      >
        <SearchBar />
        <div className="flex gap-5">
          <div className="inline-flex">
            <IoIosSearch size={'2.5rem'} className="sm:hidden relative" />
            <div className="absolute right-2 top-12 bg-white border-2 border-purple-900 text-purple-900 w-[28px] font-bold rounded-full flex justify-center">
              {readingList.length}
            </div>
          </div>
          <button className="">
            <img src={FavList} className="w-[35px] p-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

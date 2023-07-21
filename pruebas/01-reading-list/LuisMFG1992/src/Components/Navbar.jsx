import logo from '../assets/logo.png'
import FavList from '../assets/FavList.png'
import SearchBar from './SearchBar'

import { IoIosSearch } from 'react-icons/io'

const Navbar = ({ handelSidabar }) => {
  return (
    <div className="inline-flex justify-between items-center w-full p-5">
      <img src={logo} className="w-[130px] h-[40px]" />

      <div className="inline-flex justify-between items-center gap-4">
        <SearchBar />
        <div>
          <IoIosSearch size={'2.5rem'} className="sm:hidden relative" />
          <div className="absolute right-2 top-12 bg-white border-2 border-purple-900 text-purple-900 w-[28px] font-bold rounded-full flex justify-center">
            1
          </div>
        </div>
        <button onClick={handelSidabar} className="">
          <img src={FavList} className="w-[35px] p-1" />
        </button>
      </div>
    </div>
  )
}

export default Navbar

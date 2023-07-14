import { BiBookContent } from "react-icons/bi";

function ToggleNav() {
  return (
    <div>
    <button className=" p-3  bg-white border text-xl rounded-md flex justify-center items-center  "><BiBookContent className='mr-3'  /> Lista de lectura</button>
  </div>
  )
}

export default ToggleNav
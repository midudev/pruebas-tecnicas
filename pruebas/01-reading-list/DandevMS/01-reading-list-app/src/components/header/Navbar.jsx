import Logo from '../../assets/images/logo-icon.png'
import { useState } from 'react';


function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Aquí puedes agregar lógica adicional para cambiar el tema de tu aplicación
  };
  return (

      <nav className="flex justify-between bg-white w-full h-15">
        <div className="logo-icon ml-10 flex justify-center items-center ">
          <div className="bg-[#F7F5F6] p-3">
           <img src={Logo} alt="" className='w-16'  />
          </div>
           <h1 className='ml-4 text-4xl font-bold '>Book Reading</h1>
        </div>

        <div className=" btn-theme mr-4 flex justify-center content-center">
        
      <label htmlFor="darkModeSwitch" className="flex items-center cursor-pointer ml-3">
        <div className="relative">
          <input
            type="checkbox"
            id="darkModeSwitch"
            className="sr-only"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner"></div>
          <div className={`absolute inset-y-0 left-0 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ease-in-out transform ${darkMode ? 'translate-x-4' : ''}`}></div>
        </div>
      </label>
        </div>
      </nav>
  )
}

export default Navbar
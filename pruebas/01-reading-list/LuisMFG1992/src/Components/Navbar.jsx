import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="inline-flex justify-between w-full p-5">
      <img src={logo} className="w-[150px]" />

      <div className="inline-flex justify-between gap-10">
        <div className="">Buscar</div>
        <div className="">Icono</div>
      </div>
    </div>
  )
}

export default Navbar

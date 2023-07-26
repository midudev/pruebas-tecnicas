import logo from "@/assets/logo.webp";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link 
      to="/"
      className="flex gap-5 items-center"
    >
      <img src={logo} alt="Logo" width={30} height={30} />
      <h1 className="text-xl font-bold text-gray-800 hidden md:block">Reading List</h1>
    </Link>
  );
};

export default Logo;

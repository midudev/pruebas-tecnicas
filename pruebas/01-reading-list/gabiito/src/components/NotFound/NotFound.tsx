import { Link } from "react-router-dom";
import { ImBooks } from "react-icons/im";

const NotFound: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-5 border w-full max-w-lg rounded-lg shadow-lg p-10 bg-white">
        <div className="text-center">
          <h2 className="text-7xl font-bold text-gray-800">404</h2>
          <p className="text-xl font-semibold text-gray-600">Page not found!</p>
        </div>
        <Link to="/" className="flex justify-center items-center gap-2 px-5 py-3 rounded-md bg-purple-500 hover:bg-purple-600 text-white transition-colors">
          <ImBooks size={20} />
          Volver al home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;

import { useNavigate } from "react-router-dom";
export default function AppBar() {
    const name = sessionStorage.getItem('name');
    const Name = name.split(' ');
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/signin");
    };
    return<div className="flex justify-center">
      <div className="w-full md:w-3/4 p-2 m-2 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg">
        <div className="flex items-center pl-2 font-bold text-white text-xl">
          PayBloom
        </div>
        <div className="flex items-center sm:space-x-52 md:space-x-4">
          <div className="text-white text-sm mr-8 sm:m-0">Hello, {Name[0]}</div>
          <div className="bg-gray-200 rounded-full w-6 h-6 text-xs mx-8  sm:m-0 sm:w-10 sm:h-10 sm:text-sm flex items-center justify-center text-gray-600 ">
            {Name[0][0].toUpperCase()}{Name[1][0].toUpperCase()}
          </div>
          <button
            onClick={handleLogout}
            className="text-white ml-20 text-xs px-2 py-1 sm:text-sm sm:px-4 sm:py-2 rounded-lg bg-red-400 hover:bg-red-300 focus:outline-none transition duration-300 ease-in-out font-semibold"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
}
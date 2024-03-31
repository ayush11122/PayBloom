import { useNavigate } from "react-router-dom";
export default function AppBar() {
    const name = sessionStorage.getItem('name');
    const Name = name.split(' ');
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout actions here, such as clearing session storage
        sessionStorage.clear();
        // Navigate to the sign-in page
        navigate("/signin");
    };
    return   <div className="flex justify-center">
    <div className="border-b rounded-lg w-3/4 center p-2 m-2 flex flex-row justify-between items-center bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg">
        <div className="flex items-center pl-2 font-bold text-white text-xl">
            PayBloom
        </div>
        <div className="flex items-center space-x-4">
            <div className="text-white text-sm">Hello, {Name[0]} </div>
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-sm text-gray-600">
                {Name[0][0].toUpperCase()}{Name[1][0].toUpperCase()} 
            </div>
            <button 
                onClick={handleLogout}
                className="text-white text-sm px-4 py-2 rounded-lg bg-red-400 hover:bg-red-300 focus:outline-none transition duration-300 ease-in-out font-semibold"
                style={{ fontFamily: 'Arial, sans-serif' }}
            >
                Logout
            </button>
        </div>
    </div>
</div>
}
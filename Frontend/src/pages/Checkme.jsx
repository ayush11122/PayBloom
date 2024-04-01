import { useNavigate } from "react-router-dom"
import axios from "axios";
import { APP_URL } from "../config";



export default function Checkme (){
    const navigate= useNavigate();
    const response = () => { 
        const res = axios.get(`${APP_URL}/api/v1/users/me`,
    {
        headers:{
            Authorization: "Bearer " + sessionStorage.getItem("token")
        }
    })
    res.then((res)=>{
    console.log( "welcome" + res.data.firstname);
    navigate("/dashboard");
    }).catch((res)=>{
        navigate("/signup")
    })
}
    return <>
         <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex justify-center items-center">
      <div className="max-w-md p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-4 text-center text-gray-800">Welcome to <span className="text-blue-600">PayBloom</span></h1>
        <p className="text-gray-700 mb-6 text-center">Welcome to PayBloom, your virtual payment platform. Send and receive virtual money instantly, simplifying your transactions with ease and convenience.</p>
        <button onClick={response}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md w-full transition duration-300 ease-in-out transform hover:scale-105">Get Started</button>
      </div>
    </div>


    </>
}
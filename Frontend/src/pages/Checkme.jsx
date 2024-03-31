import { useNavigate } from "react-router-dom"
import axios from "axios";


export default function Checkme (){
    const navigate= useNavigate();
    const response = () => { 
        const res = axios.get('http://localhost:3001/api/v1/users/me',
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
            <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">Welcome PayBloom </h1>
        <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper nulla vel velit tincidunt, ac euismod turpis accumsan.</p>
        <button onClick={response}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">Get Started</button>
      </div>
    </div>
    </>
}
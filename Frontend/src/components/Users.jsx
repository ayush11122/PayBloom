import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');
   //debouncing
    useEffect( ()=>{
        axios.get('http://localhost:3001/api/v1/users/bulk/?filter=' + filter)
            .then(response =>{
                setUsers(response.data.users);
            })    
    },[filter])
    return <>
        <div className="font-bold mt-6 px-40 text-lg">
            Users
        </div>
        <div className="my-2 flex justify-center">
            <input 
            onChange={(e)=>{
                setFilter(e.target.value)
            }}
            type="text" 
            placeholder="Search users..." 
            className="w-3/4 px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(userr => <User user={userr} />)}
        </div>
    </>
}

function User({ user }) {
    const navigate = useNavigate();
    return <div className=" flex justify-center">
        <div className="flex justify-between my-4 w-3/4">
            <div className="flex">
                <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstname[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-ful">
                    <div>
                        {user.firstname} {user.lastname}
                    </div>
                </div>
            </div>

            <div className="">
                <button 
                onClick={(e)=>{
                    navigate("/send?id=" + user._id + "&name=" + user.firstname);
                }}
                type="button" 
                className="border rounded-2xl bg-green-500 text-white w-28 mr-4 ">Send Money</button>
            </div>
        </div>
    </div>
}
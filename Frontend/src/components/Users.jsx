import { useState } from "react"
// import Button  from "../components/Button"

export default function Users() {
    // Replace with backend call
    const [users, setUsers] = useState([{
        firstName: "Ayush",
        lastName: "Srivatava",
        _id: 1
    }, {
        firstName: "Chirag",
        lastName: "Srivatava",
        _id: 1
    }, {
        firstName: "Jaideep",
        lastName: "Srivatava",
        _id: 1
    }]);

    return <>
        <div className="font-bold mt-6 px-40 text-lg">
            Users
        </div>
        <div className="my-2 flex justify-center">
            <input type="text" placeholder="Search users..." className="w-3/4 px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div className="">
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({ user }) {
    return <div className=" flex justify-center">
        <div className="flex justify-between my-4 w-3/4">
            <div className="flex">
                <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-ful">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

            <div className="">
                <button type="button" className="border rounded-2xl bg-green-500 text-white w-28 mr-4 ">Send Money</button>
            </div>
        </div>
    </div>
}
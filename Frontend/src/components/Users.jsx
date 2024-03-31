import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  let timer ;
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/users/bulk/?filter=${filter}`)
      .then((response) => {
        setUsers(response.data.users);
      });
  }, [filter]);

  function handleInput(e) {
    clearTimeout(timer);
    timer =setTimeout(() =>{
        setFilter(e.target.value);
    },600)
  }

  return (
    <>
      <div className="font-bold mt-6 px-40 text-lg">Users</div>
      <div className="my-2 flex justify-center">
        <input
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="Search users..."
          className="w-3/4 px-2 py-1 border rounded border-slate-200 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
}

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="flex justify-between my-4 w-3/4 bg-gray-100 rounded-lg p-4 hover:shadow-md">
        <div className="flex items-center space-x-4">
          <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center items-center text-xl">
            {user.firstname[0].toUpperCase()}
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">
              {user.firstname} {user.lastname}
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() =>
              navigate(`/send?id=${user._id}&name=${user.firstname}`)
            }
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg focus:outline-none"
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
}

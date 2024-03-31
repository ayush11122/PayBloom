import { useEffect, useState } from 'react';
import AppBar from '../components/AppBar';
import Balance from '../components/Balance';
import Users from '../components/Users';
import axios from "axios";
import { APP_URL } from '../config';
export default function Dashboard(){
    const [balance, setBalance] = useState();
    useEffect(() =>{
        axios.get(`${APP_URL}/api/v1/accounts/balance`,{
            headers:{
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        })
           .then(response =>{
                setBalance(response.data.balance);
            })
    },[]);
    console.log(balance);
    return <div className="pt-8">
        <AppBar />
        <Balance Value={balance}/>
        <Users />
    </div>
}

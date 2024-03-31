import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';
import SwitchButton from '../components/SwitchButton';
import axios from 'axios';
export default function signup() {
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  return <div className="bg-slate-600 flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md">
      <Heading title="SignIn" />
      <SubHeading title="Enter Your credentials to access your account" />
      <InputBox
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        InputBoxLabel="Email"
        InputBoxData="Enter your Email"
      />
      <InputBox
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        InputBoxLabel="Password"
        InputBoxData=""
      />
      <Button
        onClick={() => {
          axios.post('http://localhost:3001/api/v1/users/signin', {
            username: username,
            password: password
          }).then((res) => {
            sessionStorage.setItem("token", res.data.token)
            sessionStorage.setItem("name",res.data.name)
            alert(res.data.message)
          }).catch((res) => {
            alert(res.response.data.message)
          })
         
          setTimeout(() => {
            navigate("/dashboard")
          }, 1000)
        }}
        Text="Sign In" />
      <SwitchButton Text="Don't have a account?" TextLink="Signup" />
    </div>
  </div>
}

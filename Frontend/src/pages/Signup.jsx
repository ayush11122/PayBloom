import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import SwitchButton from "../components/SwitchButton";
import axios from "axios";
import { APP_URL } from "../config";
export default function signup() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  return (
    <div className="bg-slate-600 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <Heading title="SignUp" />
        <SubHeading title="Enter Your Information to create your account" />
        <InputBox
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          InputBoxLabel="First Name"
          InputBoxData="Enter your First Name"
        />
        <InputBox
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          InputBoxLabel="Last Name"
          InputBoxData="Enter your Last Name"
        />
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
          onClick={async () => {
            await axios
              .post(`${APP_URL}/api/v1/users/signup`, {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password,
              })
              .then((res) => {
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("name", res.data.name);
                alert(res.data.message);
                setTimeout(() => {
                  navigate("/dashboard");
                }, 1000);
              })
              .catch((res) => {
                alert(res.response.data.message);
              });
          }}
          Text="Sign Up"
        />
        <SwitchButton Text="Already have a account?" TextLink="Signin" />
      </div>
    </div>
  );
}

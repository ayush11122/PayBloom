import Button from '../components/Button';
import Heading  from '../components/Heading';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';
import SwitchButton from '../components/SwitchButton';

export default function signup(){
    return  <div className="bg-slate-600 flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md">
        <Heading  title="SignUp"/>
        <SubHeading title="Enter Your Information to create your account"/>
        <InputBox InputBoxLabel="First Name" InputBoxData="Enter your First Name"/>
        <InputBox InputBoxLabel="Last Name" InputBoxData="Enter your Last Name"/>
        <InputBox InputBoxLabel="Email" InputBoxData="Enter your Email"/>
        <InputBox InputBoxLabel="Password" InputBoxData=""/>
        <Button Text="Sign Up"/>
        <SwitchButton Text="Already have a account?" TextLink="Signin"/>
    </div>
  </div>
}

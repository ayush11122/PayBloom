import Button from '../components/Button';
import Heading  from '../components/Heading';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';
import SwitchButton from '../components/SwitchButton';
export default function signup(){
    return  <div className="bg-slate-600 flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md">
        <Heading  title="SignIn"/>
        <SubHeading title="Enter Your credentials to access your account"/>
        <InputBox InputBoxLabel="Email" InputBoxData="Enter your Email"/>
        <InputBox InputBoxLabel="Password" InputBoxData=""/>
        <Button Text="Sign In" />
        <SwitchButton Text="Don't have a account?" TextLink="Signup"/>
    </div>
  </div>
}

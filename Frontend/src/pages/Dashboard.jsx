import AppBar from '../components/AppBar';
import Balance from '../components/Balance';
import Users from '../components/Users';

export default function Dashboard(){
    return <div className="pt-8">
        <AppBar />
        <Balance Value="3000"/>
        <Users />
    </div>
}

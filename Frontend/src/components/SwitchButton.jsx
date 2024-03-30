import {Link} from "react-router-dom"

export default function SwitchButton(props){
    return <div className="text-center">
        <div>{props.Text} 
        <Link to={"/" +props.TextLink} className="text-blue-500">
            {props.TextLink}
        </Link>
        </div>
    </div>
}

export default function InputBox(props){
    return <div className="p-1">
        <label className="m-1 font-bold ">
            {props.InputBoxLabel}
        </label>
        <br />
        <div className="flex justify-center items-center py-2">
        <input type="text" placeholder={props.InputBoxData} className="border rounded-xs  w-full h-10" />
        </div>
    </div>
}

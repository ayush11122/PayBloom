export default function Button(props) {
    return <div className="flex justify-center pt-5 pb-3">
    <div className=" bg-slate-200 w-72 h-9">
        <button onClick={props.onClick}type="button" className="border rounded-lg	 bg-black text-white font-bold h-full w-full">{props.Text}</button>
    </div>
    </div>
}

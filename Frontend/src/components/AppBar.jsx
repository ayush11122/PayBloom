export default function AppBar() {
    return <div className="flex justify-center">
        <div className="border-b rounded-lg w-3/4 center p-2 m-2  flex flex-row justify-between">
            <div className=" flex items-center pl-2 font-bold text-slate-600">PayBloom</div>
            <div className="flex ">
                <div className="mx-2 pr-2 flex items-center">Hello</div>
                <div className="bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center text-sm">AS</div>
            </div>

        </div>
    </div>
}
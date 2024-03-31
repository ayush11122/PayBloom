export default function Balance(props){
    return  <div className="flex justify-center">
    <div className="w-3/4 center p-2 m-2 bg-gray-200 rounded-lg flex items-center">
      <div className="px-4 text-xl font-semibold">Your Balance:</div>
      <div className="text-2xl font-bold text-teal-600">Rs. {props.Value}</div>
    </div>
  </div>
}
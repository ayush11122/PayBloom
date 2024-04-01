export default function Balance(props){
    return  <div className="flex justify-center">
    <div className="w-full md:w-3/4 p-2 m-2 bg-gray-200 rounded-lg flex flex-col md:flex-row items-center">
      <div className="px-4 text-sm md:text-xl font-semibold">Your Balance:</div>
      <div className=" text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">Rs. {props.Value}</div>
    </div>
  </div>
}
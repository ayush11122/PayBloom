export default function Balance(props){
    return <div className="flex justify-center">
    <div className="  w-3/4 center p-2 m-2  flex flex-row ">
      <div className="px-2">Your Balance</div>
      <div className="">Rs.{props.Value}</div>

    </div>
</div>
}
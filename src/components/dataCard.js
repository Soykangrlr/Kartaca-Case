
function DataCard({text,data,bgColor="#3498DB",image="coronavirus"}) {
  return (
    <div className="w-full  text-white py-6 flex justify-center gap-x-3 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out  items-center"  style={{backgroundColor:bgColor}}>
        <img  src={`img/${image}.png`} alt="" />
        <div className="text-center"><p className="text-2xl font-bold">{data}</p>
        <p className="font-mono"> {text}</p>
        </div>
    </div>

  )
}
// DataCard.defaultProps={
//     text:"Değer Girilmedi",
//     data:"Değer Girilmedi",
//     bgColor:"blue"
// }
export default DataCard
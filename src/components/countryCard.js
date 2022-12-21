function CountryCard({id}) {
    console.log(id);
  return (
    <div class=" bg-amber-100 border w-full border-gray-200 rounded-lg shadow-md">
<div className="flex justify-center pt-1">
    <img crossorigin="anonymous" className=" w-36 h-20"  src={`https://countryflagsapi.com/png/${id=='Russia'?"rus":id}`} alt={id}/>
</div>

    
    <div class="p-2 text-center">
       <p className="text-lg font-bold">{id.toUpperCase()}</p>
    </div>
</div>
   
  )
}
export default CountryCard
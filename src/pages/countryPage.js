
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Alert from "../components/alert"
import CityTable from "../components/cityTable"
import Content from "../components/content"
import CountryCard from "../components/countryCard"
import LoadingSpinner from "../components/loadingSpinner "
import Nav from "../components/nav"
import { getData } from "../redux/action"


function CountryPage() {
  const { id } = useParams()

  let country =`${id.charAt(0).toUpperCase()}${id.slice(1).toLowerCase()}`
if(id==="United States"){
  country="US"
}
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useSelector(state => state.dataReducer)
  useEffect(() => {
    dispatch(getData(country))
  }, [dispatch, id])
  


  return (
<>
 <Nav /> 
 <div className=" container flex flex-col mx-auto p-2">
 <div className=" flex justify-center  ">
<CountryCard id={id} />
</div>
<div className="flex flex-col mt-3 justify-center items-center ">
{ isLoading ? <LoadingSpinner/> : isError? <div className="text-xl w-full border border-red-500 text-center mt-20">Sunucu Bağlantı Hatası</div>: <> 
  {country!==data.location && <Alert country={id}/>} 
   <Content data={data}/>
   {data.location!=="Global"&& <CityTable id={country}/>}
  
   </>
}
</div>
 
</div>
</>

  ) 
}
export default CountryPage
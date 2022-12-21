import World from '@svg-maps/world'
import { SVGMap } from "react-svg-map";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom';
import "react-svg-map/lib/index.css";
import { useState } from 'react';

function HomePage() {
    // eslint-disable-next-line no-unused-vars
    const[country,setCountry]=useState("")
    const navigate=useNavigate()
  return (
   
    <div className="container mx-auto">
       
        <h1 className="text-center my-3 text-2xl font-bold text-red-700">Ülkelere Göre Covid-19 Vakaları   </h1>
        
        {country&&  <div className='absolute top-4 right-4  flex flex-col justify-center items-center'>

          
          <img crossorigin="anonymous" className=" w-12 h-10"  src={`https://countryflagsapi.com/png/${country=='Russia'?"rus":country}`} alt={country}/>
          
       
        <span className='text-green-600 '>{country}</span>
        </div>
        }
      
     
        <div>
         
            <SVGMap onLocationMouseOut={()=>setCountry("")} onLocationMouseOver={e=>setCountry(e.target.getAttribute("name"))} onLocationClick={(e)=>{navigate(`country/${e.target.getAttribute("name") }`)}} locationClassName="mySvg-location" className='mySvg' map={World}></SVGMap>
        
        </div>
    </div>
  )
}
export default HomePage
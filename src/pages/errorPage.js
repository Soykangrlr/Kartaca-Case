import { Link } from "react-router-dom"
import Nav from "../components/nav"

function ErrorPage() {
  return (
    <div>
        <Nav/>
     
    <div className=" h-screen justify-center">
    <center className="mt-24 m-auto">
        
    <div className=" tracking-widest mt-4">
    <span className="text-gray-500 text-6xl block"><span>4  0  4</span></span>
    <span className="text-gray-500 text-xl">Ooops! Aradığınız Sayfa Bulunamadı</span>

    </div>
    </center>
    <center className="mt-6">
    <Link to="/" className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Go Home </Link>
    </center>
    </div>
    </div>
  )
}
export default ErrorPage
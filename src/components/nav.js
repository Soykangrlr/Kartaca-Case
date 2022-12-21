import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="bg-red-900 p-3 flex items-center justify-end">
        <Link to="/" className="p-2 bg-yellow-500">Ana Sayfaya Dön</Link>
    </div>
  )
}
export default Nav
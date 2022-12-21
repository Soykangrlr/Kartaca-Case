import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../redux/action";

function CityTable({ id }) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const { city, isLoading, isError } = useSelector(
    (state) => state.cityReducer
  );
  useEffect(() => {
    dispatch(getCity(id));
  }, [id]);
  if(isError){
    return ( <div className="text-xl w-full border border-red-500 text-center mt-20">Sunucu Bağlantı Hatası</div>)
  }
  return (
    <>
      <div
        onClick={() => setToggle((item) => !item)}
        className="w-full border-2 hover:cursor-pointer font-bold font-mono border-blue-400 px-4 py-2 rounded-2xl mt-2"
      >
        Bölgelere ait verileri {toggle?"gizlemek":"görmek"} için tıklayınız.
      </div>
      <div
        className={`${
          toggle ? "opacity-1 block" : "hidden opacity-0"
        } mb-2 transition-opacity duration-200 overflow-x-auto relative shadow-md sm:rounded-lg w-full max-h-[450px]`}
      >
        <table className="w-full text-xs md:text-sm text-left text-gray-500 table relative">
          <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">
                Bölge
              </th>
              <th scope="col" className="py-3 px-6">
                Toplam Vaka
              </th>
              <th scope="col" className="py-3 px-6">
                İyileşen Sayısı
              </th>
              <th scope="col" className="py-3 px-6">
                Ölüm Sayısı
              </th>
            </tr>
          </thead>
          <tbody>
            {city.map((city) => (
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {city.keyId}
                </th>
                <td className="py-4 px-6">{city.confirmed}</td>
                <td className="py-4 px-6">{city.confirmed - city.deaths}</td>
                <td className="py-4 px-6">{city.deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default CityTable;

import {
    Route,
    Routes,
  } from "react-router-dom";
import CountryPage from "./countryPage";
import ErrorPage from "./errorPage";
import HomePage from "./homePage";
  function Index() {
    return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="country/:id" element={<CountryPage/>}/>
        <Route  path="*" element={<ErrorPage/>}/>
      </Routes>
    )
  }
  export default Index
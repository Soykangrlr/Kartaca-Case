import axios from "axios";
import { takeLatest, put, call, takeEvery } from "redux-saga/effects";
import { getCityFail, getCitySuccess, getDataFail, getDataSuccess } from "./action";
import { GET_CITY, GET_DATA } from "./actionTypes";

 function  getreponse(id){
  console.log(id);
    const data=  axios.get("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",{
        params: {country:id},
  headers: {
    'X-RapidAPI-Key': '52670884c7msh392e9ae36eba174p1910e1jsn72cc9e663791',
    'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
  }
    }).then(res=>res.data.data).catch(e=>console.log(e))
 
    return data
}
function  getreponseCity(id){
    console.log(id);
      const data=  axios.get("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",{
          params: {country:id},
    headers: {
      'X-RapidAPI-Key': '52670884c7msh392e9ae36eba174p1910e1jsn72cc9e663791',
      'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
    }
      }).then(res=>res.data.data.covid19Stats).catch(e=>console.log(e))
      console.log('saga',data);
      return data
  }
function* workGetData( {payload} ){

    try {
       const resp = yield call(getreponse,payload)
        yield put(getDataSuccess(resp))
    } catch (error) {
        yield put(getDataFail())
        console.log(error);
    }
}
function* workGetCity( {payload} ){

    try {
       const resp = yield call(getreponseCity,payload)
        yield put(getCitySuccess(resp))
    } catch (error) {
        yield put(getCityFail())
        console.log(error);
    }
}

export function* DataSaga(){
    yield takeEvery(GET_DATA, workGetData)
   
}
export function* CitySaga(){
  
    yield takeEvery(GET_CITY,workGetCity)
}


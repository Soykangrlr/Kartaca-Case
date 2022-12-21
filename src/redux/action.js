import {GET_DATA,GET_DATA_SUCCESS,GET_DATA_FAIL, GET_CITY, GET_CITY_SUCCESS, GET_CITY_FAIL} from './actionTypes'

export const getData=(id)=>{
    return{
        type:GET_DATA,
        payload:id
    }
}
export const getDataSuccess=(data)=>{
    return{
        type:GET_DATA_SUCCESS,
        payload:data
    }
}
export const getDataFail=()=>{
    return{
        type:GET_DATA_FAIL,
      
    }
}

export const getCity=(id)=>{
    return{
        type:GET_CITY,
        payload:id
    }
}
export const getCitySuccess=(data)=>{
    return{
        type:GET_CITY_SUCCESS,
        payload:data
    }
}
export const getCityFail=()=>{
    return{
        type:GET_CITY_FAIL,
      
    }
}
import {GET_DATA,GET_DATA_SUCCESS,GET_DATA_FAIL, GET_CITY, GET_CITY_SUCCESS, GET_CITY_FAIL} from './actionTypes'

const initialState={
    data:{},
    isLoading:false,
    isError:false
}
 export const dataReducer=(state=initialState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case GET_DATA:
            state={...state,isLoading:true}
            break;
        case GET_DATA_SUCCESS:
            state={...state,data:action.payload,isLoading:false}
            break;
        case GET_DATA_FAIL: 
            state={...state,isError:true,isLoading:false}  
            break
        }
        return state
    }
    const initialStateCity={
        city:[],
        isLoading:false,
        isError:false
    }
    export const cityReducer=(state=initialStateCity,action)=>{
        switch(action.type){
            case GET_CITY:
                state={...state,isLoading:true}
                break;
            case GET_CITY_SUCCESS:
                state={...state,city:action.payload,isLoading:false}
                break;
            case GET_CITY_FAIL: 
                state={...state,isError:true,isLoading:false}  
                break
            }
            return state
    }
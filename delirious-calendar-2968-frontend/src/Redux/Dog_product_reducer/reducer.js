import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "../actionTypes"

const initstate={

    isLoading:false,
    isError:false,
    dogProduct:[]
}


export const reducer=(state=initstate,{type,payload})=>{
    switch(type){
        case GET_REQUEST:{
            return {...state, isLoading:true,isError:false,dogProduct:[]}
        }
        case GET_SUCCESS:{
            return {...state,isLoading:false,isError:false,dogProduct:payload}
        }
        case GET_FAILURE:{
            return {...state, isLoading:true,isError:true,dogProduct:[]}
        }
        default: return state
    }
}
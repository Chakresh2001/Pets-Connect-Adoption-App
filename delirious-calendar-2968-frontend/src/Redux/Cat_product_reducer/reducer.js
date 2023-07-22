import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "../actionTypes"

const initstate={

    isLoading:false,
    isError:false,
    catProduct:[]
}


export const reducer=(state=initstate,{type,payload})=>{
    switch(type){
        
        case GET_REQUEST:{
            // console.log(1)
            return {...state, isLoading:true,isError:false,catProduct:[]}
        }
        case GET_SUCCESS:{
            // console.log("2")
            return {...state,isLoading:false,isError:false,catProduct:payload}
        }
        case GET_FAILURE:{
            // console.log(3)
            return {...state, isLoading:true,isError:true,catProduct:[]}
        }
        default: return state
    }
}
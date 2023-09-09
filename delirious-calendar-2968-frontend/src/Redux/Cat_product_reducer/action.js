import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "../actionTypes"
import axios from "axios"

export const getcatproduct=(query)=>(dispatch)=>{
   dispatch({type:GET_REQUEST,});
   // console.log(query)
   
   axios.get("https://cute-erin-tick-hat.cyclic.cloud/cats/get",query)
   // axios.get("http://localhost:8080/cats/get",query)
   .then((res)=>{
   //  console.log(res.data)
    return dispatch({type:GET_SUCCESS,payload:res.data})
   })
   .catch((error)=>{
    return dispatch({type:GET_FAILURE})
   })
} 
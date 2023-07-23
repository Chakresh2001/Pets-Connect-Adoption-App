import { useDispatch, useSelector } from "react-redux"
import { ProductAddToCart } from "./Dog_Single_Cart"
import { DogSidebar } from "./Dog_sidebar"
import { Spinner } from "@chakra-ui/react"
import { getdogproduct } from "../../Redux/Dog_product_reducer/action"
import { useEffect } from "react"
import  "../../style/DogsAdopt.css";

export const DogProduct=()=>{

    const {isLoading,dogProduct,isError}=useSelector((store)=>{
        return {
            isLoading:store.dogProductReducer.isLoading,
            dogProduct:store.dogProductReducer.dogProduct,
            isError:store.dogProductReducer.isError
            }
    })
    
    console.log(dogProduct)

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getdogproduct)

    },[])


    return <div className="dogadopt">
       
        <div className="dogsidebar">
            <DogSidebar/>
        </div>
        <div className="dogsproduct">
        {isLoading?<div className='spinner'><Spinner
                thickness='3px'
                speed='0.65s'
                emptyColor='#6504b5'
                color='blue.500'
                size='xl'
        /></div>:isError?<h1>Something Went Wrong</h1>:dogProduct.dogs?.map((e)=><ProductAddToCart key={e.id} {...e}/>)}
        </div>
    </div>
} 
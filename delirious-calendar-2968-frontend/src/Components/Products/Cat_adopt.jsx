import CatSidebar from "./cat_sidebar"
import  "../../style/CatAdopt.css";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getcatproduct } from "../../Redux/Cat_product_reducer/action";
import { useLocation,useSearchParams } from "react-router-dom";


import { Spinner } from '@chakra-ui/react'
import {ProductAddToCart} from "./Cat_Single_Cart";

export const CatProduct=()=>{

    const {isLoading,catProduct,isError}=useSelector((store)=>{
        return {
            isLoading:store.catProductReducer.isLoading,
            catProduct:store.catProductReducer.catProduct,
            isError:store.catProductReducer.isError
            }
    })

    // console.log(catProduct,isLoading,isError)
    const dispatch=useDispatch();
    const [serchparams]=useSearchParams();
    const location=useLocation();
    console.log(location)
    let queryparams={
        params:{
            gender:serchparams.getAll("gender"),
            color:serchparams.getAll("color"),
          size:serchparams.getAll("size"),
          _sort:serchparams.get("order")&&"rating",
          _order:serchparams.get("order")
        },
    }
    console.log(queryparams)
    useEffect(()=>{
        dispatch(getcatproduct(queryparams))

    },[location.search])

    return <div className="catadopt">
        
                <div className="catsidebar">
                
                    <CatSidebar/>
                    
                </div>
                <div className="catproduct">
                {isLoading?<div className='spinner'><Spinner
                thickness='3px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
        /></div>:isError?<h1>Something Went Wrong</h1>:catProduct.cats?.map((e)=><ProductAddToCart key={e.id} {...e}/>)}

                </div>
    </div>
} 
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  "../../style/Singlepage.css";
import { Button } from '@chakra-ui/react';


export const SinglePage = () => {
    const [page,setPage]=useState({})
    const {id}=useParams()


    const singleData=()=>{
        axios.get(`https://shy-erin-perch-kit.cyclic.app/dogs/get/${id}`)
        .then((res)=>{
            setPage(res.data.dog)
            //console.log(res.data); 
        })
        .catch((err)=>console.log(err))
    }
    

    useEffect(()=>{
        singleData() 
      
    },[])

    console.log(page)
    

  return (
    <div>
        <div className='singlePageContainer'>
     
     <div className='singlePageimg'>
       <img src={page.image} alt="" />
     </div>
     <div className='singlePageData'>
        <header>DETAILS</header>
       <div>
       <h1>Name: {page.name}</h1>
       <h2>Breed: {page.breed}</h2>
       <h3>Age: {page.age}</h3>
       <h4>Price: ${page.price}/-</h4>
       <br />
       <p>Price Inclusive of all taxes</p>
       </div>
       <br />
      <div className='singlePageDetails'>
      <h1> About {page.name}</h1>
      <br />
         <p>Introducing {page.name}, a stunning {page.breed} seeking a loving forever home. With a heart full of love, he/she adores human companionship and gets along famously with other pets. {page.name}'s delightful personality shines through with his/her unique trait or behavior. Whether it's playtime in the park or cuddles on the couch, he/she is always up for it.
         <br />
<br />
We are reluctantly seeking a new home for {page.name} due to unforeseen circumstances. We kindly request potential adopters to have the time, space, and resources to provide a loving environment. Adoption fees apply to ensure the best match. If you're ready to welcome a loyal and devoted companion into your life, reach out to us at Your Contact Information. Help {page.name} find happiness in a forever home!</p>
      </div>
      <Button variant={'outline'} >ADOPT</Button>
     </div>
    
 </div>
 <div>
         
     </div>
    </div>
  )
}

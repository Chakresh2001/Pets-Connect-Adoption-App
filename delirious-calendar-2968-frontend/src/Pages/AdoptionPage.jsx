import { Box, Button, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa6'

export const AdoptionPage = () => {

    const [posts, setPosts] = useState([])

    let getposts = ()=>{
        let token = JSON.parse(localStorage.getItem("token"))
        fetch("https://cute-erin-tick-hat.cyclic.cloud/post", {
            method:"GET",
            headers : {
                "Authorization" : `bearer ${token}`
            },
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getposts()
    },[])

    let DeletePost = (id)=>{
        axios.delete(`https://cute-erin-tick-hat.cyclic.cloud/post/delete/${id}`).then((res)=>getposts())
    }


  return (
    <Box padding="40px">
        {
            posts.length > 0 ? (
                <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap="20px" mt="45px" >
                    {
                        posts.map((ele)=>(
                            <Box padding={"20px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}>
                                <div>
                                <h1 style={{fontSize:"20px", fontWeight:"bold", marginBottom:"10px"}}>Pets Information</h1>
                                <Image src={ele.pet_image} aspectRatio={"4/3"} objectFit={"cover"} />
                                <h2>{ele.pet_name}</h2>
                                <p> <span style={{fontWeight:"bold"}}>Breed :-</span> {ele.pet_breed}</p>
                                <p> <span style={{fontWeight:"bold"}}>Age:-</span> {ele.pet_age} years</p>
                                <p> <span style={{fontWeight:"bold"}}>Location:-</span> {ele.pet_location}</p>
                                <p><span style={{fontWeight:"bold"}}>Price :-</span>${ele.pet_price}</p>
                                <Text color={`${ele.status ? "green" : "red"}`} fontWeight={"bold"} fontSize={"24px"}> <span style={{fontWeight:"bold"}}>Status :-</span> {ele.status ? "Approved" : "Pending"}</Text>
                                <Button mt="15px" colorScheme="red" onClick={()=>DeletePost(ele._id)}> <FaTrash style={{width:"20px", height:"20px"}}/> </Button>
                            </div>
                              
                   
                               
                                </Box>
                        ))
                    }
                </Box>
            ) : (
                <Box>
                    <Text>No Adoption Requests Yet</Text>
                </Box>
            )
        }
    </Box>
  )
}

import { Box, Input, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'



export const UserProfile = () => {

    const [data, setData] = useState("")


    useEffect(()=>{

        let token = JSON.parse(localStorage.getItem("token"))
        fetch("https://shy-erin-perch-kit.cyclic.app/admin/users/get", {
            method:"GET",
            headers : {
                "Authorization" : `bearer ${token}`
            },
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.users)
            setData(res.users)
        })
        .catch((err)=>console.log(err))

    },[])

  return (
    <Box mt="50px" mb="50px" display={"flex"} justifyContent={"center"}>

        <Box width={"50%"} boxShadow={"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"} borderRadius={"15px"} padding="20px">
        <FormControl>
        <FormLabel mt="15px">User Name</FormLabel>
        <Input type='text' placeholder='Name' value={data.name} />
        <FormHelperText>We'll never share your Name.</FormHelperText>

        <FormLabel mt="15px">Email Address</FormLabel>
        <Input type='email' placeholder='Email' value={data.email} />
        <FormHelperText>We'll never share your email.</FormHelperText>

        <FormLabel mt="15px">User Location</FormLabel>
        <Input type='text' placeholder='Location' value={data.location} />
        <FormHelperText>We'll never share your Location.</FormHelperText>

        <FormLabel mt="15px">User Gender</FormLabel>
        <select name="" id="" value={data.gender}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Others">Not To Mention</option>
        </select>
        <FormHelperText>We'll never share your Gender.</FormHelperText>

        <Input mt="15px" bg='green.400' color="white" _hover={{cursor:"pointer", backgroundColor:"green.500"}} type="submit"/>
        </FormControl>
        </Box>
    </Box>
  )
}

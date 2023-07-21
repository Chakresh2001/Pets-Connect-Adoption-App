import React, { useState } from 'react'
import { Flex,Box,  Input, Button, useToast, Text } from "@chakra-ui/react"
import axios from "axios"

export const AdminLogin = () => {

  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const toast = useToast()

  let handleSubmit = (e)=>{
    e.preventDefault()
    let obj = {
      email:email,
      password:password
    }

    axios.post("http://localhost:8080/admin/login", obj)
    .then((res)=>{
      if(res.status==200){
        toast({
          title: 'Successfully Logged In',
          description: 'Welcome Admin',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        localStorage.setItem("adminLogin", JSON.stringify(true))
      }
    })
    .catch((err)=>{
      toast({
        title: 'An error occurred.',
        description: 'Unable to create user account.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })

    })

    console.log(obj)

  }

  return (
    <Flex bg="#FAF0F2" justifyContent={"center"} alignItems={"center"}  height={"790px"}>
        <Box bg="#F2E8EB" borderRadius={"10px"} w="40%" padding="20px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}>

        <form  onSubmit={handleSubmit}>

        <Text fontSize={"28px"} fontWeight={"bold"}>Admin Login Page</Text>

        <Input border={"1px solid grey"} mt="15px" type="mail" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>

        <Input border={"1px solid grey"} mt="15px" type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>

        <Box mt="20px">
        <Input color="#010304" border={"1px solid grey"} type="submit" w="25%" m="auto" bg="#DADEF1"></Input>
        </Box>

        </form>


        </Box>
    </Flex>
  )
}

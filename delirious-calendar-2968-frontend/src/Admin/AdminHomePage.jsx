import { Box, Button, Flex, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

export const AdminHomePage = () => {

    const [users, setUsers] = useState([])
    const [userState, setUserState] = useState(false)
    const toast = useToast()

    let getUserData = ()=>{
        axios.get("http://localhost:8080/admin/users")
        .then((res)=>{
            setUsers(res.data.users)
        })
        .catch((err)=>console.log(err))

    }

    let handleClickUsers = ()=>{

        setUserState(!userState)
        getUserData()
       
    }

    let handleBlockUSer = (id)=>{

        axios.post(`http://localhost:8080/admin/block/${id}`)
        .then((res)=>{
            getUserData()
            toast({
                title: 'User Successfully Blocked',
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        })
        .catch((err)=>console.log(err))

    }

    

  return (
    <div>

    <Flex justifyContent={"space-evenly"} alignItems={"center"} border={"1px solid red"} height="100px">

    <Button onClick={handleClickUsers}>Users</Button>
    <Button>Requests</Button>
    <Button>Dog's Data</Button>
    <Button>Cat's Data</Button>

    </Flex>

    {
        userState && <div>
            {
                users.map((ele)=>(
                    <div key={ele._id} style={{border:"1px solid black", marginTop:"10px"}}>
                    <p>{ele.name}</p>
                    <p>{ele.email}</p>
                    <p>{ele.location}</p>
                    <p>{ele.gender}</p>
                    <Button onClick={()=>handleBlockUSer(ele._id)}>Block</Button>
                    </div>
                ))
            }
        </div>
    }

    </div>
  )
}

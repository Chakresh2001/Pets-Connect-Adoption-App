import React, { useContext, useState } from 'react'
import { Flex,Box,  Input, Button, useToast, Text } from "@chakra-ui/react"
import axios from "axios"
import { adminContext } from '../context/AdminAuthContext'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

export const AdminLogin = () => {


 let {adminLoginFunc} = useContext(adminContext)

  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const toast = useToast()

  let handleSubmit = (e)=>{
    e.preventDefault()
    let obj = {
      email:email,
      password:password
    }

    axios.post("https://shy-erin-perch-kit.cyclic.app/admin/login", obj)
    .then((res)=>{
      if(res.status==200){
        adminLoginFunc()
        toast({
          title: 'Successfully Logged In',
          description: 'Welcome Admin',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
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
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Logo</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3  pb-5" style={{letterSpacing: '1px',marginLeft:"90px"}}>Admin Log in</h3>

            <MDBInput value={email} onChange={(e)=>setemail(e.target.value)} wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput value={password} onChange={(e)=>setpassword(e.target.value)} wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

            <button style={{width:"100%",backgroundColor:"#31D2F2", marginLeft:"50px", padding:"10px", borderRadius:"7px", fontSize:"20px"}} onClick={handleSubmit}>Login</button>
          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left', height:"795px"}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  )
}

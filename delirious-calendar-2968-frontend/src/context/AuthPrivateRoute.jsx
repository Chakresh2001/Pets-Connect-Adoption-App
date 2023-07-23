import React, { useContext } from 'react'
import { authContext } from './AuthContext'
import { Navigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

export const AuthPrivateRoute = ({children}) => {
    let {AuthLogin} = useContext(authContext)
    const toast = useToast()

    if(!AuthLogin){
      toast({
        title: "Please Login First",
        status: 'error',
        duration: 2000,
        isClosable: true,
    })
        return <Navigate to="/"/>
    }
  return children
}

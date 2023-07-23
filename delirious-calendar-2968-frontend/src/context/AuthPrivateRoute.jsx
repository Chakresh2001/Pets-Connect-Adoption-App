import React, { useContext } from 'react'
import { authContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

export const AuthPrivateRoute = ({children}) => {
    let {AuthLogin} = useContext(authContext)


    if(!AuthLogin){
        return <Navigate to="/"/>
    }
  return children
}

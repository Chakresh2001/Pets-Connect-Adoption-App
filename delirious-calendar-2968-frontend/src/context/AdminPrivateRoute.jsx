import React, { useContext } from 'react'
import { adminContext } from './AdminAuthContext'
import { Navigate } from 'react-router-dom'

export const AdminPrivateRoute = ({children}) => {

    let {adminLogin} = useContext(adminContext)


    if(!adminLogin){
        return <Navigate to="/adminLogin"/>
    }


  return children
}

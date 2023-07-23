import React, { useContext } from 'react'
import { adminContext } from './AdminAuthContext'

export const AdminPrivateRoute = ({children}) => {

    let {adminLogin} = useContext(adminContext)


    if(!adminLogin){
        return <Navigate to="/"/>
    }


  return (
    {children}
  )
}

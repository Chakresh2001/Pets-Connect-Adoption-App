import React, { createContext, useState } from 'react'

export let adminContext = createContext()

export const AdminAuthContext = ({children}) => {

    let [adminLogin, setAdminLogin] = useState(false)
    
    let adminLoginFunc = ()=>setAdminLogin(true)
    let adminLogoutFunc = ()=>setAdminLogin(false)


  return (
    <adminContext.Provider value={{adminLogin, adminLoginFunc, adminLogoutFunc}}>
        {children}
    </adminContext.Provider>
  )
}

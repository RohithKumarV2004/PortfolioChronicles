"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"

//if we use session provider in the main layout, it won't work becoz it can only used in client-side page, 
//but layout cannot be changed to a client-side page, so we cretae another component and export from that
const AuthProvider = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider
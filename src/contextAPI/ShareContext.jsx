import React, { createContext, useState } from 'react'

export const adminUpdateContext = createContext("")
const ShareContext = ({children}) => {
    const [adminEditResponse,setAdminEditResponse] = useState({})
  return (
    <adminUpdateContext.Provider value={{adminEditResponse,setAdminEditResponse}}>{children}</adminUpdateContext.Provider>
  )
}

export default ShareContext
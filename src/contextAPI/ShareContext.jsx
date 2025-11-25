import React, { createContext, useState } from 'react'

export const adminUpdateContext = createContext("")
export const UserUpdateContext = createContext("")

const ShareContext = ({ children }) => {
  const [adminEditResponse, setAdminEditResponse] = useState({})
  const [userEditResponse, setUserEditResponse] = useState({})
  return (
    <adminUpdateContext.Provider value={{ adminEditResponse, setAdminEditResponse }}>
      <UserUpdateContext.Provider value={{ userEditResponse, setUserEditResponse }}>
        {children}
      </UserUpdateContext.Provider>
    </adminUpdateContext.Provider>
  )
}

export default ShareContext
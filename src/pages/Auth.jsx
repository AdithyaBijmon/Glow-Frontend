import React from 'react'

const Auth = ({register}) => {
  return (
    <>

    {register?<h1>Register</h1>: <h1>Login</h1>}

    
    
    </>
  )
}

export default Auth
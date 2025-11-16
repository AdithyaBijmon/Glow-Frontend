import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { loginAPI, registerAPI } from '../services/allAPI';

const Auth = ({ register }) => {

  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })
  const navigate = useNavigate()
  console.log(userDetails)

  const handleRegister = async () => {
    const { username, email, password } = userDetails

    if (!username || !email || !password) {
      toast.info("Please fill the form completely")
    }
    else {
      try {
        const result = await registerAPI(userDetails)
        console.log(result)

        if (result.status == 200) {
          toast.success("Registration successfull!")
          navigate('/login')
          setUserDetails({ username: "", email: "", password: "" })
        }
        else if (result.status == 409) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        }
        else {
          toast.error("Something went wrong")
          setUserDetails({ username: "", email: "", password: "" })
        }

      }
      catch (err) {
        console.log(err)
      }
    }
  }

  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("Please fill the form completely")
    }
    else {
      try {
        const result = await loginAPI(userDetails)
        if (result.status == 200) {
          toast.success("Login successful")
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", JSON.stringify(result.data.token))

          setTimeout(() => {
            if(result.data.user.role=='user'){
              navigate('/')
            }
            else{
              navigate('/admin-dashboard')
            }
          }, 3000);
        }

        else if (result.status == 401) {
          toast.warning("Invalid email or password")
          setUserDetails({ email: "", password: "" })
        }
        else if (result.status == 404) {
          toast.warning("Account does not exist.")
          setUserDetails({ email: "", password: "" })
        }
        else {
          toast.warning("Something went wrong")
          setUserDetails({ email: "", password: "" })
        }


      }
      catch (err) {
        console.log(err)
      }
    }
  }

  return (

    <div className='bg-yellow-500 w-full h-screen flex justify-center items-center md:px-50'>

      <div className='bg-white md:min-h-120 min-h-90 w-full md:mx-40 mx-5 md:grid grid-cols-2 shadow-xl'>

        {/* left image */}
        <div className='md:flex hidden'>
          <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Fsb258ZW58MHx8MHx8fDA%3D" className='h-full object-cover' alt="" />
        </div>

        {/* right register/login form */}

        <div className='flex justify-center items-center flex-col w-full md:px-20 px-10'>

          <h1 className='text-3xl font-bold my-5'>{register ? 'Register' : 'Login'}</h1>

          {
            register ?
              <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" className='border border-gray-300 placeholder-gray-400 w-full p-2' placeholder='Name' />
              :
              ''
          }

          <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="email" className='border border-gray-300 placeholder-gray-400 p-2 my-5 w-full' placeholder='Email' />

          <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type="password" className='border border-gray-300 placeholder-gray-400 p-2 w-full' placeholder='Password' />

          {
            register ?
              <button onClick={handleRegister} className='bg-black p-2 text-white font-bold w-full  mt-5 cursor-pointer'>Register</button>
              :
              <button onClick={handleLogin} className='bg-black p-2 text-white font-bold w-full  mt-5 cursor-pointer'>Login</button>
          }

          <div className='flex justify-between w-full my-2 items-center'>
            <Link to={'/'}> <h6 className='font-bold text-sm cursor-pointer'>Home</h6></Link>

            <Link to={register ? '/login' : '/register'} className='text-blue-500 text-sm cursor-pointer'>{register ? 'Already a member?' : 'Not a member?'}</Link>

          </div>

        </div>


      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />

    </div>
  )
}

export default Auth
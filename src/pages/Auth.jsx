import React from 'react'
import { Link } from 'react-router-dom'

const Auth = ({ register }) => {
  return (
    <div className='bg-yellow-500 w-full h-screen flex justify-center items-center md:px-50'>

      <div className='bg-white md:min-h-120 min-h-90 w-full md:mx-40 mx-5 md:grid grid-cols-2'>

        {/* left image */}
        <div className='md:flex hidden'>
          <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Fsb258ZW58MHx8MHx8fDA%3D" className='h-full object-cover' alt="" />
        </div>

        {/* right register/login form */}

        <div className='flex justify-center items-center flex-col w-full md:px-20 px-10'>

          <h1 className='text-3xl font-bold my-5'>{register ? 'Register' : 'Login'}</h1>

          {
            register ?
              <input type="text" className='border border-gray-300 placeholder-gray-400 w-full p-2' placeholder='Name' />
              :
              ''
          }

          <input type="email" className='border border-gray-300 placeholder-gray-400 p-2 my-5 w-full' placeholder='Email' />

          <input type="password" className='border border-gray-300 placeholder-gray-400 p-2 w-full' placeholder='Password' />

          <button className='bg-black p-2 text-white font-bold w-full  mt-5 cursor-pointer'>{register ? 'Register' : 'Login'}</button>

          <div className='flex justify-between w-full my-2 items-center'>
            <Link to={'/'}> <h6 className='font-bold text-sm cursor-pointer'>Home</h6></Link>

            <Link to={register ? '/login' : '/register'} className='text-blue-500 text-sm cursor-pointer'>{register ? 'Already a member?' : 'Not a member?'}</Link>

          </div>

        </div>


      </div>



    </div>
  )
}

export default Auth
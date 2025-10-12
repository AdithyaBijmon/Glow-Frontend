import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    

    <div className='w-full h-screen flex items-center justify-center flex-col'>

      <img src="https://media4.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif" alt="" width={'500px'}/>

      <Link to={'/'}><button className='bg-yellow-500 px-3 py-2  text-black font-bold  mt-5 cursor-pointer'>Back to Home</button></Link>
    </div>
    
    
  )
}

export default Pnf
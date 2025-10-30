import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AdminHeader = () => {
    return (
        <div className='md:flex justify-between items-center md:px-30 py-3 px-5 bg-black fixed top-0 z-50 w-full'>

            <h1 className='font-bold text-4xl text-white'>Glow.</h1>

            <button className='py-2 px-3 bg-white text-black font-bold'><FontAwesomeIcon className='text-red-500' icon={faRightFromBracket}/>Logout</button>



        </div>
    )
}

export default AdminHeader
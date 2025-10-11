import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({navblack}) => {

  const [menu, setMenu] = useState(false)

  return (
    <div className={navblack?'md:flex justify-between items-center md:px-30 py-3 px-5 bg-black fixed top-0 z-50 w-full':'md:flex justify-between items-center md:px-30 py-3 px-5 bg-black/50 fixed top-0 z-50 w-full'}>
      <div className='flex justify-between '>
        <h1 className='font-bold text-4xl text-white'>Glow.</h1>

        {/*small devices menu bar */}
        <FontAwesomeIcon onClick={() => setMenu(!menu)} icon={faBars} className='text-3xl md:!hidden text-white' />
      </div>
      <ul className={menu ? 'md:flex items-center md:mt-0 mt-3 md:text-base text-xl text-center' : 'md:flex hidden items-center  cursor-pointer'}>
        <Link to={'/'}> <li className='text-gray-200 hover:text-white'>Home</li></Link>
        <Link to={'/about'}><li className='md:mx-10 md:my-0 my-2 text-gray-200 hover:text-white'>About</li></Link>
        <Link to={'/services'}><li className='text-gray-200 hover:text-white'>Services</li></Link>
        <Link to={'/contact'}><li className='md:mx-10 md:my-0 my-2 text-gray-200 hover:text-white'>Contact</li></Link>
        <li><button className='px-5 py-2 bg-yellow-500 text-black font-bold cursor-pointer'>Login</button></li>
      </ul>

    </div>
  )
}

export default Header
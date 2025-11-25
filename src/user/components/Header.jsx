import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import SERVERURL from '../../services/ServerURL'
import { UserUpdateContext } from '../../contextAPI/ShareContext'

const Header = ({ navblack }) => {

  const [menu, setMenu] = useState(false)
  const [token, setToken] = useState("")
  const [userMenu, setUserMenu] = useState("")
  const [user, setUser] = useState({})
  const [userDp, setUserDp] = useState("")
  const { userEditResponse } = useContext(UserUpdateContext)
  const navigate = useNavigate()


  useEffect(() => {
    const userToken = sessionStorage.getItem("token")
    const userDetails = JSON.parse(sessionStorage.getItem("user"))
    if (userToken) {

      setToken(userToken)
      setUser(userDetails)
      setUserDp(userDetails.profile)
    }
  }, [token, userEditResponse])

  // console.log(token)

  const logout = () => {
    sessionStorage.clear()
    setToken("")
    setUserMenu(false)
    navigate('/')
  }


  return (
    <>
      <div className='md:flex hidden fixed top-0 z-50 w-full'>
        <div className='w-full p-1 bg-black '>
          <div className='flex justify-between mx-15'>
            <p className='text-sm'><span className='text-gray-300'>Phone no :</span> <span className='text-white'>+91 9878675675 </span>  <span className='text-gray-300 ms-1'> or email us :</span> <span className='text-white'>glow@gmail.com</span></p>

            <div className='text-white flex'>
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon className='mx-4' icon={faInstagram} />
              <FontAwesomeIcon icon={faXTwitter} />

            </div>



          </div>
        </div>
      </div>

      <div className={navblack ? 'md:flex justify-between items-center md:px-30 py-3 px-5 bg-black fixed top-0 z-50 w-full' : 'md:flex justify-between items-center md:px-30 py-3 px-5 bg-black/50 fixed top-0 z-50 w-full md:mt-7'}>
        <div className='flex justify-between '>
          <h1 className='font-bold text-4xl text-white'>Glow.</h1>

          {/*small devices menu bar */}
          <FontAwesomeIcon onClick={() => setMenu(!menu)} icon={faBars} className='text-3xl md:!hidden text-white' />
        </div>
        <ul className={menu ? 'md:flex items-center md:mt-0 mt-3 md:text-base text-xl text-center' : 'md:flex hidden items-center  cursor-pointer'}>

          {/* Home Link */}
          <li className='md:mx-0 md:my-0 my-2 relative group'>
            <Link to={'/'} className='text-gray-200 hover:text-white p-1 block'>
              Home
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-500 
                           origin-left transform scale-x-0 transition-transform duration-300 
                           group-hover:scale-x-100">
              </span>
            </Link>
          </li>

          {/* About Link */}
          <li className='md:mx-10 md:my-0 my-2 relative group'>
            <Link to={'/about'} className='text-gray-200 hover:text-white p-1 block'>
              About
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-500 
                           origin-left transform scale-x-0 transition-transform duration-300 
                           group-hover:scale-x-100">
              </span>
            </Link>
          </li>

          {/* Services Link */}
          <li className='md:mx-0 md:my-0 my-2 relative group'>
            <Link to={'/services'} className='text-gray-200 hover:text-white p-1 block'>
              Services
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-500 
                           origin-left transform scale-x-0 transition-transform duration-300 
                           group-hover:scale-x-100">
              </span>
            </Link>
          </li>

          {/* Contact Link */}
          <li className='md:mx-10 md:my-0 my-2 relative group'>
            <Link to={'/contact'} className='text-gray-200 hover:text-white p-1 block'>
              Contact
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-500 
                           origin-left transform scale-x-0 transition-transform duration-300 
                           group-hover:scale-x-100">
              </span>
            </Link>
          </li>

          {/* Login/User Menu - No sliding effect applied here */}
          {
            !token ?
              <Link to={'/login'}><li><button className='px-5 py-2 bg-yellow-500 text-black font-bold cursor-pointer'>Login</button></li></Link>
              :
              <div className='relative flex items-center justify-center md:ml-10 md:my-0 my-2'>
                <button className='cursor-pointer' onClick={() => setUserMenu(!userMenu)}><img src={userDp == "" ? "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" : userDp.startsWith('https://lh3.googleusercontent.com/') ? userDp : `${SERVERURL}/uploads/${userDp}`} style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt="user" /></button>

                {
                  userMenu &&
                  <div className='absolute px-4 py-1 bg-white text-black/80 md:top-9 md:left-5 left-40 flex flex-col text-md z-10'> {/* Added z-10 */}
                    <Link to={'/profile'} >Profile</Link>
                    <button onClick={logout}><Link className='my-3'>Logout</Link></button>
                  </div>
                }
              </div>
          }
        </ul>
      </div>
    </>
  )
}

export default Header
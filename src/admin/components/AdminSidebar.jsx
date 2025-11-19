import { faBriefcase, faChartSimple, faClipboard, faFileLines, faGears, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SERVERURL from '../../services/ServerURL'
import { adminUpdateContext } from '../../contextAPI/ShareContext'

const AdminSidebar = () => {
  const {adminEditResponse} = useContext(adminUpdateContext)
  const [adminDp,setAdminDp] = useState("")
  const [adminName,setAdminName] = useState("")

  useEffect(()=>{

    const user = JSON.parse(sessionStorage.getItem("user"))
    setAdminDp(user.profile)
    setAdminName(user.username)

  },[adminEditResponse])
  

  return (
    <div className='md:w-80 md:h-full w-100 p-5 my-10'>
      <div className='bg-white shadow-xl md:h-full md:my-10 mt-10 md:p-10 p-5 '>
       <div className='flex md:justify-between items-center'>
          <img src={adminDp==""?"https://freesvg.org/img/1459344336.png":`${SERVERURL}/uploads/${adminDp}`} alt="admin" style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
          <h3 className='text-lg font-bold'>{adminName}</h3>
       </div>

       <div className='md:my-10 my-5 flex justify-center font-semibold'>
          <ul>
           <Link to={'/admin-dashboard'} className='focus:text-yellow-500' tabIndex={0}> <li className='cursor-pointer focus:text-yellow-500 ' ><FontAwesomeIcon icon={faChartSimple} />Dashbord</li></Link>
            <Link to={'/admin-services'}><li className='my-5 cursor-pointer focus:text-yellow-500' tabIndex={0}><FontAwesomeIcon icon={faHandshake} />Services</li></Link>
            <Link to={'/admin-appointments'}><li className=' cursor-pointer focus:text-yellow-500' tabIndex={0}><FontAwesomeIcon icon={faFileLines} />Appointments</li></Link>
            <Link to={'/admin-careers'}><li className='my-5 cursor-pointer focus:text-yellow-500' tabIndex={0}><FontAwesomeIcon icon={faBriefcase} />Careers</li></Link>
            <Link to={'/admin-settings'}><li className='cursor-pointer focus:text-yellow-500' tabIndex={0}><FontAwesomeIcon icon={faGears} />Settings</li></Link>
          </ul>
       </div>
      </div>
    </div>

  )
}

export default AdminSidebar
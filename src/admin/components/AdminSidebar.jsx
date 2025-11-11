import { faBriefcase, faChartSimple, faClipboard, faFileLines, faGears, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  

  return (
    <div className='md:w-80 md:h-full w-100 p-5 my-10'>
      <div className='bg-white shadow-xl md:h-full md:my-10 mt-10 md:p-10 p-5 '>
       <div className='flex md:justify-between items-center'>
          <img src="https://freesvg.org/img/1459344336.png" alt="admin" style={{width:'60px',height:'60px',borderRadius:'50%'}}/>
          <h3 className='text-xl font-bold'>Admin Name</h3>
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
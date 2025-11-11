import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faHandshake, faUser } from '@fortawesome/free-solid-svg-icons'

const AdminDashboard = () => {
  return (
   <>
      <AdminHeader/>
     <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'><AdminSidebar/></div>
        <div className='col-span-4 p-5 md:mt-24'>
         <div className="md:grid grid-cols-3 gap-2 p-5">
            <div className='bg-green-500 p-5'>
              <div className='flex items-center text-white '>
                  <FontAwesomeIcon icon={faUser} className='text-5xl'/>
                  <h1 className='text-3xl ms-5'>100+ <br /> Users</h1>
              </div>
            </div>

            <div className='bg-blue-500 p-5 md:my-0 my-3'>
              <div className='flex items-center text-white '>
                  <FontAwesomeIcon icon={faHandshake} className='text-5xl'/>
                  <h1 className='text-3xl ms-5'>15+ <br /> Services</h1>
              </div>
            </div>

             <div className='bg-orange-500 p-5'>
              <div className='flex items-center text-white '>
                  <FontAwesomeIcon icon={faBuilding} className='text-5xl'/>
                  <h1 className='text-3xl ms-5'>3+ <br /> Branches</h1>
              </div>
            </div>
         </div>
        </div>
     </div>
      <Footer/>
   </>
  )
}

export default AdminDashboard
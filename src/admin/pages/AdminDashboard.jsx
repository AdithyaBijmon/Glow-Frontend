import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

const AdminDashboard = () => {
  return (
   <>
      <AdminHeader/>
     <div className='grid grid-cols-5 gap-2'>
        <div className='col-span-1'><AdminSidebar/></div>
        <div className='col-span-4 p-5 mt-24'><h1>Hello</h1></div>
     </div>
      <Footer/>
   </>
  )
}

export default AdminDashboard
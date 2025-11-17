import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { ToastContainer, toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMultiply } from '@fortawesome/free-solid-svg-icons'

const AdminCareers = () => {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'><AdminSidebar /></div>
        <div className='col-span-4 p-5 md:mt-24'>
          <h1 className='text-center font-bold text-3xl'>Job Postings & Applicants</h1>
          <div className="flex justify-end px-5">
            <button onClick={() => setModalStatus(true)} className='text-white bg-green-500 p-2 hover:bg-green-400 cursor-pointer mt-3'>+Add Job</button>
          </div>
        </div>
      </div>
      <Footer />
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

            {
                modalStatus &&
                <div className='bg-black/75 w-full h-full fixed z-51 inset-0 flex items-center justify-center'>

                    <div className= "w-100 h-85 p-5 bg-white">
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-bold'>Add new Job</h1>
                            <button onClick={() => setModalStatus(false)} className='cursor-pointer'><FontAwesomeIcon icon={faMultiply} className='text-xl' /></button>
                        </div>

                        <div className='my-4'>
                            <input  type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400' placeholder='Service name' />
                            <input  type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 my-3' placeholder='Description' />
                            <div className='flex mb-3'>
                                <input  type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ' placeholder='Category eg:Skin,nails' />
                                <input  type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ms-2' placeholder='Price ' />
                            </div>
                           
                           

                        </div>

                        <div className='flex justify-between my-3'>
                            <button  className='text-white bg-orange-500 px-2 py-1 hover:bg-orange-400 cursor-pointer mt-3 '>RESET</button>
                            <button  className='text-white bg-green-500 px-2 py-1 hover:bg-green-400 cursor-pointer mt-3'>ADD</button>

                        </div>


                    </div>



                </div>
            }

      
    </>
  )
}

export default AdminCareers
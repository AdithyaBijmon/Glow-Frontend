import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faL, faMultiply } from '@fortawesome/free-solid-svg-icons'

const AdminServies = () => {
    const [modalStatus, setModalStatus] = useState(false)
    return (
        <>
            <AdminHeader />
            <div className='md:grid grid-cols-5 gap-2 relative'>
                <div className='col-span-1'><AdminSidebar /></div>
                <div className='col-span-4 p-5 md:mt-24'>
                    <h1 className='text-3xl text-center font-bold'>Available Services</h1>
                    <div className="flex justify-end px-5">
                        <button onClick={() => setModalStatus(true)} className='text-white bg-green-500 p-2 hover:bg-green-400 cursor-pointer mt-3'>+Add Service</button>
                    </div>
                    <div>
                        <div className="md:grid grid-cols-4 gap-5 my-5 p-5">
                            <div className="shadow w-full p-3">
                                <img className='w-full h-80 object-cover' src="https://www.bodycraft.co.in/hubfs/Imported_Blog_Media/beautiful-keratin-treated-hair-1-1.jpg" alt="" />
                                <div className='flex justify-between'>
                                    <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold'>Smoothening</h3>
                                    <p className='text-center text-lg text-green-500 mt-3 font-bold'>₹5000</p>
                                </div>
                            </div>
                            <div className="shadow w-full p-3 md:my-0 my-5">
                                <img className='w-full h-80 object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-hairdresser-salon_1163-2019.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                                <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold'>Hair Cut</h3>
                            </div>
                            <div className="shadow w-full p-3">
                                <img className='w-full h-80 object-cover' src="https://m.media-amazon.com/images/I/61qd8hwOc9L._UF1000,1000_QL80_.jpg" alt="" />
                                <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold' >Manicure</h3>
                            </div>
                            <div className="shadow w-full p-3">
                                <img className='w-full h-80 object-cover' src="https://m.media-amazon.com/images/I/61qd8hwOc9L._UF1000,1000_QL80_.jpg" alt="" />
                                <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold' >Manicure</h3>
                            </div>
                            <div className="shadow w-full p-3">
                                <img className='w-full h-80 object-cover' src="https://m.media-amazon.com/images/I/61qd8hwOc9L._UF1000,1000_QL80_.jpg" alt="" />
                                <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold' >Manicure</h3>
                            </div>
                        </div>

                    </div>
                </div>



            </div>


            <Footer />

            {
                modalStatus &&
                <div className='bg-black/75 w-full h-full fixed z-51 inset-0 flex items-center justify-center'>

                    <div className="w-100 h-85 p-5 bg-white">
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-bold'>Add new Service</h1>
                            <button onClick={() => setModalStatus(false)} className='cursor-pointer'><FontAwesomeIcon icon={faMultiply} className='text-xl' /></button>
                        </div>

                        <div className='my-4'>
                            <input type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400' placeholder='Service name' />
                            <input type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 my-3' placeholder='Description' />
                            <div className='flex mb-3'>
                                <input type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ' placeholder='Category eg:Skin,nails' />
                                <input type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ms-2' placeholder='Price ' />
                            </div>
                            <label htmlFor="service-image"><span className='bg-gray-300 p-1 '>Add</span> picture of the service.</label>
                            <input type="file" id='service-image' className='p-2 w-full placeholder:text-gray-400 border border-gray-400 my-3 hidden' placeholder='Price'  />


                        </div>

                        <div className='flex justify-between my-3'>
                            <button className='text-white bg-orange-500 px-2 py-1 hover:bg-orange-400 cursor-pointer mt-3 '>RESET</button>
                            <button className='text-white bg-green-500 px-2 py-1 hover:bg-green-400 cursor-pointer mt-3'>ADD</button>

                        </div>


                    </div>

                </div>
            }
        </>
    )
}

export default AdminServies
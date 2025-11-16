import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faL, faMultiply, faTrash } from '@fortawesome/free-solid-svg-icons'
import { getAllServicesAPI } from '../../services/allAPI'
import SERVERURL from '../../services/ServerURL'

const AdminServies = () => {
    const [modalStatus, setModalStatus] = useState(false)
    const [allServices, setAllServices] = useState([])
    const [services, setServices] = useState({ serviceName: "", description: "", category: "", price: "",serviceImg:"" })
    const [preview,setPreview] = useState("")
    // console.log(services)

    useEffect(() => {
        getAllServices()
    }, [])

    const handleUploadServiceImage = (e)=>{
        const image = e.target.files[0]
        setServices({...services,serviceImg:image})
        setPreview(URL.createObjectURL(image))
        
    }

    const addService = async () => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
    }

    const handleReset = ()=>{
        setServices({ serviceName: "", description: "", category: "", price: "",serviceImg:""})
        setPreview("")
    }

    const getAllServices = async () => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }

        try {
            const result = await getAllServicesAPI(reqHeader)
            // console.log(result)
            setAllServices(result.data)

        }
        catch (err) {
            console.log(err)
        }
    }

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
                        <div className="md:grid grid-cols-4 gap-5 my-2 p-5">
                            {
                                allServices.length > 0 ?
                                    allServices?.map(service => (
                                        <div key={service?._id} className="shadow w-full p-3">
                                            <div className='flex justify-end my-2'><FontAwesomeIcon className='text-red-500 text-xl' icon={faTrash}/></div>
                                            <img className='w-full h-80 object-cover' src={`${SERVERURL}/uploads/${service?.serviceImg}`} alt="" />
                                            <div className='flex justify-between'>
                                                <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold'>{service?.serviceName}</h3>
                                                <p className='text-center text-lg text-green-500 mt-3 font-bold'>₹{service?.price}</p>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    <p>No services added.</p>
                            }


                        </div>

                    </div>
                </div>



            </div>


            <Footer />

            {
                modalStatus &&
                <div className='bg-black/75 w-full h-full fixed z-51 inset-0 flex items-center justify-center'>

                    <div className={preview?"w-100 h-fit p-5 bg-white":"w-100 h-85 p-5 bg-white"}>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-bold'>Add new Service</h1>
                            <button onClick={() => setModalStatus(false)} className='cursor-pointer'><FontAwesomeIcon icon={faMultiply} className='text-xl' /></button>
                        </div>

                        <div className='my-4'>
                            <input value={services.serviceName} onChange={(e) => setServices({ ...services, serviceName: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400' placeholder='Service name' />
                            <input value={services.description} onChange={(e) => setServices({ ...services, description: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 my-3' placeholder='Description' />
                            <div className='flex mb-3'>
                                <input value={services.category} onChange={(e) => setServices({ ...services, category: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ' placeholder='Category eg:Skin,nails' />
                                <input value={services.price} onChange={(e) => setServices({ ...services, price: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ms-2' placeholder='Price ' />
                            </div>
                            <label className={preview && 'hidden'} htmlFor="service-image"><span className='bg-gray-300 p-1'>Add</span> picture of the service.</label>
                            <input onChange={(e)=>handleUploadServiceImage(e)} type="file" id='service-image' className='p-2 w-full hidden'  />
                            {
                                preview &&
                                <div className='flex justify-center'><img style={{width:'100px',height:'100px'}} className='object-cover' src={preview} alt="" /></div>
                            }

                        </div>

                        <div className='flex justify-between my-3'>
                            <button onClick={handleReset} className='text-white bg-orange-500 px-2 py-1 hover:bg-orange-400 cursor-pointer mt-3 '>RESET</button>
                            <button className='text-white bg-green-500 px-2 py-1 hover:bg-green-400 cursor-pointer mt-3'>ADD</button>

                        </div>


                    </div>

                </div>
            }
        </>
    )
}

export default AdminServies
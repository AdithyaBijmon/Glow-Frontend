import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faMultiply, faTags } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { bookAppointmentAPI, viewSingleServiceAPI } from '../../services/allAPI'
import { getSingleBookAPI } from '../../../../bookstore-frontend/src/services/allAPI'
import SERVERURL from '../../services/ServerURL'
import { ToastContainer, toast } from 'react-toastify'

const ViewService = () => {

    const { id } = useParams()
    const [service, setService] = useState({})
    const [modalStatus, setModalStatus] = useState(false)
    const [appointmentDetails, setAppointmentDetails] = useState({ fullName: "", email: "", phone: "", date: "", time: "" })
    const [servicename, setServicename] = useState("")
    const [serviceID, setServiceID] = useState("")
    // console.log(service);


    useEffect(() => {
        viewSingleService()
    }, [])

    const viewSingleService = async () => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }

        try {
            const result = await viewSingleServiceAPI(id, reqHeader)
            if (result.status == 200) {
                setService(result.data)
            }

        } catch (error) {
            console.log(error);

        }
    }

    const handleGetService = (service) => {
        setModalStatus(true)
        setServicename(service?.serviceName)
        setServiceID(service?._id)

    }
    // console.log(appointmentDetails)

    const handleReset = ()=>{
        setAppointmentDetails({ fullName: "", email: "", phone: "", date: "", time: "" })
    }

    const handleBookAppointment = async () => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }

        const finalReqBody = {
            ...appointmentDetails,
            serviceName: servicename,
            serviceId: serviceID
        };

        try {

            const result = await bookAppointmentAPI(finalReqBody, reqHeader)
            if (result.status == 200) {
                toast.success("Appointment request send successfully,wait for admin approval.")
                setModalStatus(false)
                handleReset()
                
            }
            else if (result.status == 409) {
                toast.warning(result.response.data)
                handleReset()
            }
            else {
                toast.error("Something went wrong.")
            }

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <Header />


            <div className=' flex items-center justify-center md:px-40 px-5 my-20'>
                <div className="shadow-xl md:my-10 my-5 md:grid grid-cols-2">
                    <div className='w-full'>
                        <img style={{ width: '100%', height: '400px' }} className='object-cover' src={`${SERVERURL}/uploads/${service?.serviceImg}`} alt="service-img" />
                    </div>

                    <div className='p-5'>
                        <div className='md:flex justify-between items-center'>
                            <h1 className='text-3xl font-bold'>{service?.serviceName}</h1>
                            <h3 className='text-2xl'>₹{service?.price}</h3>
                        </div>
                        <hr className='my-5 text-gray-300' />
                        <div className='flex items-center justify-evenly'>
                            <div className='flex items-center'>
                                <FontAwesomeIcon icon={faTags} />
                                <p className='mx-2'>Category : <span>{service?.category}</span></p>
                            </div>
                            <div className='flex items-center'>
                                <FontAwesomeIcon icon={faClock} />
                                <p className='mx-2'>{service?.duration}</p>
                            </div>
                        </div>

                        <h1 className='text-2xl font-bold mt-10'>Service Overview</h1>
                        <hr className='my-3 text-gray-300' />
                        <p>{service?.description}</p>


                        <button onClick={() => handleGetService(service)} className='my-5 px-3 py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-400  '>Book Appointment Now!</button>




                    </div>
                </div>

            </div>
            <Footer />

            {
                modalStatus &&
                <div className='bg-black/75 w-full h-full fixed z-51 inset-0 flex items-center justify-center'>

                    <div className="w-100 h-75 p-5 bg-white">
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-bold'>Book Appointment</h1>
                            <button onClick={() => setModalStatus(false)} className='cursor-pointer'><FontAwesomeIcon icon={faMultiply} className='text-xl' /></button>
                        </div>

                        <div className='my-4'>
                            <input value={appointmentDetails.fullName} onChange={(e) => setAppointmentDetails({ ...appointmentDetails, fullName: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ' placeholder='Full Name' />

                            <div className='flex my-3'>
                                <input value={appointmentDetails.email} onChange={(e) => setAppointmentDetails({ ...appointmentDetails, email: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400  ' placeholder='Email' />
                                <input value={appointmentDetails.phone} onChange={(e) => setAppointmentDetails({ ...appointmentDetails, phone: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ms-2 ' placeholder='Phone' />
                            </div>

                            <div className='flex mb-3'>
                                <input value={appointmentDetails.date} onChange={(e) => setAppointmentDetails({ ...appointmentDetails, date: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400  ' placeholder='Date : dd-mm-yyyy' />
                                <input value={appointmentDetails.time} onChange={(e) => setAppointmentDetails({ ...appointmentDetails, time: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ms-3 ' placeholder='Time' />
                            </div>


                        </div>

                        <div className='flex justify-between my-2'>
                            <button onClick={handleReset} className='text-white bg-orange-500 px-2 py-1 hover:bg-orange-400 cursor-pointer '>RESET</button>
                            <button onClick={handleBookAppointment} className='text-white bg-green-500 px-2 py-1 hover:bg-green-400 cursor-pointer'>ADD</button>

                        </div>


                    </div>



                </div>
            }

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
        </>
    )
}

export default ViewService
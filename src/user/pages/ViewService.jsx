import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faTags } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { viewSingleServiceAPI } from '../../services/allAPI'
import { getSingleBookAPI } from '../../../../bookstore-frontend/src/services/allAPI'
import SERVERURL from '../../services/ServerURL'

const ViewService = () => {

    const { id } = useParams()
    const [service, setService] = useState({})
    console.log(service);
    

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

    return (
        <>
            <Header />
            <div className='w-full flex justify-center md:px-40 px-5 my-20'>
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


                        <button className='my-5 px-3 py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-400  '>Book Appointment Now!</button>




                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ViewService
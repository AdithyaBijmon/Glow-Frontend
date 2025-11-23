import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faMultiply, faPen } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footer'

const Profile = () => {

    const [appoint, setAppoint] = useState(true)
    const [history, setHistory] = useState(false)
    const [userDetails, setUserDetails] = useState({})
    const [offCanvasStatus, setOffCanvasStatus] = useState(false)
    const [viewPasswordStatus, setViewPasswordStatus] = useState(false)

    useEffect(() => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        if (token) {
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUserDetails(user)
        }
    }, [])
    return (

        <>
            <Header navblack />
            <div className='md:mx-20 mx-10 md:flex justify-between my-20 px-20  items-center bg-yellow-500/50 p-5'>
                <img style={{ width: '150px', height: '150px' }} className='rounded-full object-cover' src={userDetails.profile==""?"https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png":userDetails.profile} alt="" />

                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-3xl text-2xl font-bold '>{userDetails.username}</h1>
                    <p className='semibold text-md mb-3 '>{userDetails.email}</p>
                    <button onClick={() => setOffCanvasStatus(true)}><FontAwesomeIcon icon={faPen} /></button>
                </div>
            </div>



            <div className='md:flex justify-between items-center w-full px-20'>
                {/* Centered Group */}
                <div className='flex justify-center flex-grow itemx-center'>
                    <button onClick={() => { setAppoint(true); setHistory(false) }} className={appoint ? 'border-b-5 cursor-pointer' : 'text-sm cursor-pointer'}>Appointments</button>
                    <button onClick={() => { setAppoint(false); setHistory(true) }} className={history ? 'border-b-5 ms-5 cursor-pointer' : 'ms-5 text-sm cursor-pointer'}>Appointment History</button>
                </div>

                {/* Right-aligned Button */}
                <button className='px-3 py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-400 md:my-0 my-5 '>Book an Appointment</button>
            </div>




            {
                appoint &&
                <>
                    <div className='md:flex justify-between my-10 shadow md:mx-40 mx-10 py-5 md:px-10 px-5 text-center md:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-semibold text-yellow-500'>Hair Spa</h2>
                            <h5>Date : <span className='font-semibold'>12-10-2025</span></h5>
                            <h5>Time : <span className='font-semibold'>10:00 AM</span></h5>
                            <p className='my-3'>Status: <span className='text-blue-600 font-semibold'>Pending</span></p>
                        </div>

                        <div className='flex md:flex-col items-center md:justify-center justify-between'>
                            <button className='text-blue-500 cursor-pointer text-sm'>Change Date or Time</button>
                            <button className='text-red-500 cursor-pointer md:mt-3 text-sm'>Delete Appointment</button>
                        </div>
                    </div>

                    <div className='md:flex justify-between my-10 shadow md:mx-40 mx-10 py-5 md:px-10 px-5 text-center md:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-semibold text-yellow-500'>Botox Treatment</h2>
                            <h5>Date : <span className='font-semibold'>22-10-2025</span></h5>
                            <h5>Time : <span className='font-semibold'>1:00 PM</span></h5>
                            <p className='my-3'>Status: <span className='text-green-700 font-semibold'>Approved</span></p>
                        </div>

                        <div className='flex md:flex-col items-center md:justify-center justify-between'>
                            <button className='text-blue-500 cursor-pointer text-sm'>Change Date or Time</button>
                            <button className='text-red-500 cursor-pointer md:mt-3 text-sm'>Delete Appointment</button>
                        </div>
                    </div>
                </>
            }

            {
                history &&
                <>
                    <button className='my-5 md:ms-50 ms-10 text-red-500 text-lg'>Clear History</button>
                    <div className='flex justify-between  my-10 shadow md:mx-40 mx-10 py-5 px-10'>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-semibold text-yellow-500'>Hair Cut</h2>
                            <h5>Date : <span className='font-semibold'>04-5-2025</span></h5>
                            <h5>Time : <span className='font-semibold'>09:00 AM</span></h5>

                        </div>

                        <div className='flex flex-col items-center justify-center'>

                            <button className='text-red-500 cursor-pointer mt-3'>Delete</button>
                        </div>
                    </div>

                    <div className='flex justify-between  my-10 shadow md:mx-40 mx-10 py-5 px-10'>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-semibold text-yellow-500'>Pedicure</h2>
                            <h5>Date : <span className='font-semibold'>1-09-2025</span></h5>
                            <h5>Time : <span className='font-semibold'>03:00 PM</span></h5>

                        </div>

                        <div className='flex flex-col items-center justify-center'>

                            <button className='text-red-500 cursor-pointer mt-3'>Delete</button>
                        </div>
                    </div>
                </>
            }

            {
                offCanvasStatus &&
                <div className='fixed inset-0 z-50 flex justify-end'>


                    <div className='absolute inset-0 bg-black/50' ></div>


                    <div className='absolute md:w-72 w-full h-full bg-white shadow-xl'>

                        <div className='flex justify-between mx-5'>
                            <h3 className="p-4 font-bold">Edit User Profile</h3>
                            <button onClick={() => setOffCanvasStatus(false)}><FontAwesomeIcon className='text-xl' icon={faMultiply} /> </button>
                        </div>

                        <div className='flex justify-center my-5'>
                            <label htmlFor='profile-img'>
                                <img className='relative' style={{ width: '120px', height: '120px', borderRadius: '50%' }} src={userDetails.profile} alt="" />
                                <FontAwesomeIcon className='absolute top-20 md:right-20 right-40 bg-yellow-500 p-2 rounded-full text-sm' icon={faPen} />
                                <input type="file" className='hidden' id='profile-img' />
                            </label>
                        </div>

                        <div className='mx-5'>
                            <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" className='w-full placeholder-gray-400 border border-gray-400 p-1' placeholder='Username' />
                            <input value={userDetails.email} type="email" className='w-full my-3 border border-gray-400 p-1 bg-gray-200' readOnly />
                            <div className='flex items-center'>
                                <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type={viewPasswordStatus ? "text" : "password"} className='w-full placeholder-gray-400 border border-gray-400 p-1' placeholder='Password' />
                                <button onClick={() => setViewPasswordStatus(!viewPasswordStatus)}>
                                    {
                                        viewPasswordStatus?<FontAwesomeIcon style={{ marginLeft: '-30px' }} icon={faEye} />
                                        :
                                        <FontAwesomeIcon style={{ marginLeft: '-30px' }} icon={faEyeSlash} />
                                    }
                                </button>
                               
                            </div>
                            <div className='flex justify-between my-3'>
                                <button className='text-white bg-orange-500 px-2 py-1 hover:bg-orange-400 cursor-pointer mt-3 '>RESET</button>
                                <button className='text-white bg-green-500 px-2 py-1 hover:bg-green-400 cursor-pointer mt-3'>UPDATE</button>

                            </div>
                        </div>
                    </div>

                </div>
            }

            <Footer />
        </>
    )
}

export default Profile
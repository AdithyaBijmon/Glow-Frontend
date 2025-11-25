import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faMultiply, faPen } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footer'
import { editUserDetailsAPI, removeApplicationAPI, removeAppointmentAPI, viewUserAppliedJobsAPI, viewUserAppointmentAPI } from '../../services/allAPI'
import SERVERURL from '../../services/ServerURL'
import { ToastContainer, toast } from 'react-toastify'
import { UserUpdateContext } from '../../contextAPI/ShareContext'

const Profile = () => {

    const [appoint, setAppoint] = useState(true)
    const [appliedJobs, setAppliedJobs] = useState(false)
    const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "", profile: "" })
    const [existingProfilePic, setExistingProfilePic] = useState("")
    const [offCanvasStatus, setOffCanvasStatus] = useState(false)
    const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
    const [userAppointments, setUserAppointments] = useState([])
    const [preview, setPreview] = useState("")
    const { userEditResponse, setUserEditResponse } = useContext(UserUpdateContext)
    const [allJobs, setAllJobs] = useState([])
    // console.log(userAppointments);
    console.log(allJobs);


    useEffect(() => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        if (token) {
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUserDetails({ username: user.username, email: user.email, password: user.password, profile: "" })
            setExistingProfilePic(user.profile)

            getUserAppointments()

            if (appliedJobs) {
                getUserAppliedJobs()


            }
        }
    }, [appliedJobs])



    const getUserAppointments = async () => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }

        try {
            const result = await viewUserAppointmentAPI(reqHeader)
            if (result.status == 200) {
                setUserAppointments(result.data)
            }


        } catch (error) {
            console.log(error);

        }
    }

    const getUserAppliedJobs = async () => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }

        try {
            const result = await viewUserAppliedJobsAPI(reqHeader)
            if (result.status == 200) {
                setAllJobs(result.data)
            }

        } catch (error) {
            console.log(error);

        }
    }

    const handleUploadImage = (e) => {
        const image = e.target.files[0]
        setUserDetails({ ...userDetails, profile: image })
        setPreview(URL.createObjectURL(image))
    }


    const handleDeleteAppointment = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to cancel the appointment?")
        if (isConfirmed) {
            const token = JSON.parse(sessionStorage.getItem("token"))
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }

            try {
                const result = await removeAppointmentAPI(id, reqHeader)
                if (result.status == 200) {
                    getUserAppointments()
                }

            } catch (error) {
                console.log(error);

            }
        }

    }

    const handleDeleteApplication = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to cancel the appointment?")
        if (isConfirmed) {
            const token = JSON.parse(sessionStorage.getItem("token"))
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }

            try {
                const result = await removeApplicationAPI(id, reqHeader)
                if (result.status == 200) {
                    getUserAppliedJobs()
                }

            } catch (error) {
                console.log(error);

            }
        }

    }

    const handleEditUser = async () => {
        const { username, password, profile } = userDetails
        const token = JSON.parse(sessionStorage.getItem("token"))
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }

        const reqBody = new FormData()

        reqBody.append("username", username)
        reqBody.append("password", password)
        preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingProfilePic)



        try {
            const result = await editUserDetailsAPI(reqBody, reqHeader)
            if (result.status == 200) {
                sessionStorage.setItem("user", JSON.stringify(result.data))
                toast.success("User Details updated.")
                setUserEditResponse(result.data)
                const updatedUser = result.data
                setUserDetails({ username: updatedUser.username, email: updatedUser.email, password: updatedUser.password })
                setExistingProfilePic(updatedUser.profile)


                setOffCanvasStatus(false)

            }

        } catch (error) {
            console.log(error);

        }
    }



    return (

        <>
            <Header navblack />
            <div className='md:mx-20 mx-10 md:flex justify-between my-20 px-20  items-center bg-yellow-500/50 p-5'>
                {/* <img  src={userDetails.profile == "" ? "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" : `${SERVERURL}/uploads/${existingProfilePic}`} alt="" /> */}

                {/* {
                    existingProfilePic ?
                        <img style={{ width: '150px', height: '150px' }} className='rounded-full object-cover' src={preview ? preview : `${SERVERURL}/uploads/${existingProfilePic}`} alt="" />
                        :
                        <img style={{ width: '150px', height: '150px' }} className='rounded-full object-cover' src={preview ? preview : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"} alt="" />
                } */}


                <img style={{ width: '150px', height: '150px' }} className='rounded-full object-cover' src={!existingProfilePic ? "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" : existingProfilePic.startsWith('https://lh3.googleusercontent.com/') ? existingProfilePic : `${SERVERURL}/uploads/${existingProfilePic}`} alt="" />


                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-3xl text-2xl font-bold '>{userDetails.username}</h1>
                    <p className='semibold text-md mb-3 '>{userDetails.email}</p>
                    <button onClick={() => setOffCanvasStatus(true)}><FontAwesomeIcon icon={faPen} /></button>
                </div>
            </div>



            <div className='md:flex justify-between items-center w-full px-20'>
                {/* Centered Group */}
                <div className='flex justify-center flex-grow itemx-center'>
                    <button onClick={() => { setAppoint(true); setAppliedJobs(false) }} className={appoint ? 'border-b-5 cursor-pointer' : 'text-sm cursor-pointer'}>Appointments</button>
                    <button onClick={() => { setAppoint(false); setAppliedJobs(true) }} className={appliedJobs ? 'border-b-5 ms-5 cursor-pointer' : 'ms-5 text-sm cursor-pointer'}>Applied Jobs</button>
                </div>


            </div>




            {
                appoint &&
                <>
                    {
                        userAppointments.length > 0 ?
                            userAppointments?.map(userAppoint => (
                                <div key={userAppoint?._id} className='md:flex justify-between my-10 shadow md:mx-40 mx-10 py-5 md:px-10 px-5 text-center md:text-left'>
                                    <div className='flex flex-col'>
                                        <h2 className='text-2xl font-semibold text-yellow-500'>{userAppoint?.serviceName}</h2>
                                        <h5>Date : <span className='font-semibold'>{userAppoint?.date}</span></h5>
                                        <h5>Time : <span className='font-semibold'>{userAppoint?.time}</span></h5>
                                        <p className='my-3'>Status: {
                                            userAppoint?.status == "pending" ?
                                                <span className='text-blue-600 font-semibold'>Pending</span>
                                                :
                                                userAppoint?.status == "approved" ?
                                                    <span className='text-green-600 font-semibold'>Approved</span>
                                                    :
                                                    <span className='text-red-600 font-semibold'>Rejected</span>
                                        }</p>
                                    </div>

                                    <div className='flex  md:justify-center '>

                                        {
                                            userAppoint?.status == "approved" || userAppoint?.status == "rejected" ?
                                                <button onClick={() => handleDeleteAppointment(userAppoint?._id)} className='text-red-500 cursor-pointer text-sm'>Delete Appointment</button>
                                                :
                                                <button onClick={() => handleDeleteAppointment(userAppoint?._id)} className='text-red-500 cursor-pointer text-sm'>Cancel Appointment</button>


                                        }

                                    </div>
                                </div>
                            ))
                            :
                            <p className='px-20 py-20 text-center'>No appointments.</p>
                    }


                </>
            }

            {
                appliedJobs &&
                <>
                    {/* <button className='my-5 md:ms-50 ms-10 text-red-500 text-lg'>Clear History</button> */}
                    {
                        allJobs.length > 0 ?
                            allJobs?.map(job => (
                                <div key={job?._id} className='flex justify-between my-10 shadow md:mx-60 mx-10 py-5 px-10'>
                                    <div className='flex flex-col'>
                                        <h2 className='text-2xl font-semibold text-yellow-500'>{job?.jobTitle}</h2>
                                        <h5>Full Name : <span className='font-semibold'>{job?.fullName}</span></h5>
                                        <h5>Email : <span className='font-semibold'>{job?.email}</span></h5>
                                        <p className='font-bold'>Status :
                                            {

                                                job?.status == "pending" ?
                                                    <span className='text-blue-500 ms-2'>Pending</span>
                                                    :
                                                    job?.status == "approved" ?
                                                        <span className='text-green-500 ms-2'>Approved</span>
                                                        :
                                                        <span className='text-red-500 ms-2'>Rejected</span>

                                            }
                                        </p>

                                    </div>

                                    <div className='flex flex-col items-center justify-center'>

                                        {
                                            job?.status == "pending" ?
                                                <button onClick={() => handleDeleteApplication(job?._id)} className='text-red-500 cursor-pointer mt-3'>Cancel Application</button>
                                                :
                                                job?.status == "approved" ?
                                                    ""
                                                    :
                                                    <button onClick={() => handleDeleteApplication(job?._id)} className='text-red-500 cursor-pointer mt-3'>Delete Application</button>

                                        }


                                    </div>


                                </div>
                            ))
                            :
                            <p className='text-center my-10 text-red-600'>You have'nt applied any job!</p>
                    }


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

                                <img className='relative' style={{ width: '120px', height: '120px', borderRadius: '50%' }} src={!existingProfilePic ?"https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png":existingProfilePic.startsWith('https://lh3.googleusercontent.com/')?existingProfilePic :`${SERVERURL}/uploads/${existingProfilePic}`} alt="" />


                                <FontAwesomeIcon className='absolute top-20 md:right-20 right-40 bg-yellow-500 p-2 rounded-full text-sm' icon={faPen} />
                                <input onChange={(e) => handleUploadImage(e)} type="file" className='hidden' id='profile-img' />
                            </label>
                        </div>

                        <div className='mx-5'>
                            <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" className='w-full placeholder-gray-400 border border-gray-400 p-1' placeholder='Username' />
                            <input value={userDetails.email} type="email" className='w-full my-3 border border-gray-400 p-1 bg-gray-200' readOnly />
                            <div className='flex items-center'>
                                <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type={viewPasswordStatus ? "text" : "password"} className='w-full placeholder-gray-400 border border-gray-400 p-1' placeholder='Password' />
                                <button onClick={() => setViewPasswordStatus(!viewPasswordStatus)}>
                                    {
                                        viewPasswordStatus ? <FontAwesomeIcon style={{ marginLeft: '-30px' }} icon={faEye} />
                                            :
                                            <FontAwesomeIcon style={{ marginLeft: '-30px' }} icon={faEyeSlash} />
                                    }
                                </button>

                            </div>
                            <div className='flex justify-between my-3'>
                                <button></button>
                                <button onClick={handleEditUser} className='text-white bg-green-500 px-2 py-1 hover:bg-green-400 cursor-pointer mt-3'>UPDATE</button>

                            </div>
                        </div>
                    </div>

                </div>
            }

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
        </>
    )
}

export default Profile
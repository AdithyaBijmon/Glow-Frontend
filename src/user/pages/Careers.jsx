import React, { use, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faMultiply, faSearch } from '@fortawesome/free-solid-svg-icons'
import { addJobApplicationAPI, getAllJobsAPI, getAllUserJobsAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'

const Careers = () => {
    const [allJobs, setAllJobs] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [userToken, setUserToken] = useState("")
    const [modalStatus, setModalStatus] = useState(false)
    const [applicationDetails, setApplicationDetails] = useState({ fullName: "", email: "", qualification: "", phone: "", resume: "" })
    const [jobID, setJobID] = useState("")
    const [jobtitle, setJobtitle] = useState("")
    // console.log(searchKey);

    // console.log(allJobs);
    console.log(applicationDetails);
    

    useEffect(() => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        if (token) {
            setUserToken(token)
            getAllJobs()
        }

    }, [searchKey])


    const getAllJobs = async () => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }

        try {
            const result = await getAllUserJobsAPI(searchKey, reqHeader)
            if (result.status == 200) {
                setAllJobs(result.data)
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    const handleJobApplication = (job) => {
        setModalStatus(true)
        setJobID(job._id)
        setJobtitle(job.jobTitle)
    }

    

    const handleAddApplication = async () => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }

        const reqBody = new FormData()

        for (let key in applicationDetails) {
            reqBody.append(key, applicationDetails[key])
        }

        reqBody.append("jobId",jobID)
        reqBody.append("jobTitle",jobtitle)

        const { fullName, email, qualification, phone, resume } = applicationDetails

        if (!fullName || !email || !qualification || !phone || !resume ) {
            toast.info("Please fill the form completely.")
        }
        else {
            try {
                const result = await addJobApplicationAPI(reqBody, reqHeader)
                if (result.status == 200) {
                    toast.success("Job Application send successfully,wait for Admin's approval")
                    handleReset()
                    setModalStatus(false)
                }
                else if(result.status==409){
                    toast.warning(result.response.data)
                    handleReset()
                }
                else{
                    toast.error("Something went wrong")
                    handleReset()
                }

            } catch (error) {
                console.log(error);

            }

        }
    }

    const handleReset = ()=>{
        setApplicationDetails({fullName: "", email: "", qualification: "", phone: "", resume: "" })
    }

    return (
        <>
            <Header />

            {
                userToken ?
                    <>
                        <div className='relative bg-[url(https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHNhbG9ufGVufDB8fDB8fHww)] bg-cover w-full bg-center h-100'>



                            <div className='absolute bg-black/50 w-full h-100'></div>

                            <div className='absolute inset-0 flex justify-center items-center h-100 flex-col'>
                                <h1 className='text-4xl font-bold text-white'>Careers</h1>
                                <div className='bg-yellow-500 w-25 h-1 my-2'></div>
                            </div>

                        </div>

                        {/* Search input and button */}
                        <div className='md:px-50 px-15 my-20 '>
                            <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} type="text" className='border border-black placeholder-gray-400 p-2' placeholder='Search jobs here...' />
                            <button className='bg-yellow-500 px-3 py-2 ms-3 text-black hover:bg-yellow-400'><FontAwesomeIcon icon={faSearch} /></button>
                        </div>

                        <div className='md:grid grid-cols-2 gap-10 my-20 md:mx-20 mx-5'>

                            {
                                allJobs.length > 0 ?
                                    allJobs?.map(job => (
                                        <div key={job?._id} className='p-5 shadow w-full'>
                                            <div className='flex justify-between items-center my-3'>
                                                <h1 className='text-2xl font-bold'>{job?.jobTitle}</h1>
                                                <Link to={'/careers'}><button onClick={() => handleJobApplication(job)} className='bg-yellow-500 px-4 py-2 text-black font-bold cursor-pointer hover:bg-yellow-400'>Apply <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                                            </div>
                                            <p>Description : {job?.jobDescription}</p>
                                            <p>Job Type : {job?.jobType}</p>
                                            <p>Salary : {job?.salary}</p>
                                            <p>Experience : {job?.experience}</p>
                                            <p>Qualification : {job?.qualification}</p>
                                            <p>Eligibility : {job?.eligibility}</p>


                                        </div>
                                    ))
                                    :
                                    <p>No jobs available.</p>
                            }


                        </div>
                    </>
                    :
                    <div className='flex justify-center items-center w-full h-120 flex-col'>
                        <img style={{ width: '250px', height: "200px" }} src="https://i.pinimg.com/originals/eb/17/d0/eb17d0925c49ef13af6e84cdfeaad079.gif" alt="login-gif" />

                        <h3 className='text-xl'>Please Login to get full access :<Link to={'/login'} className='underline text-blue-500'>Login</Link></h3>

                    </div>
            }

            <Footer />

            {
                modalStatus &&
                <div className='bg-black/75 w-full h-full fixed z-51 inset-0 flex items-center justify-center'>

                    <div className="w-100 h-85 p-5 bg-white">
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-bold'>Job Application</h1>
                            <button onClick={() => setModalStatus(false)} className='cursor-pointer'><FontAwesomeIcon icon={faMultiply} className='text-xl' /></button>
                        </div>

                        <div className='my-4'>
                            
                            <div className='flex mb-3'>
                                <input value={applicationDetails.fullName} onChange={(e) => setApplicationDetails({ ...applicationDetails, fullName: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400' placeholder='Full Name' />
                                <input value={applicationDetails.email} onChange={(e) => setApplicationDetails({ ...applicationDetails, email: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ms-2' placeholder='Email ID' />
                            </div>
                            <div className='flex mb-3'>
                                <input value={applicationDetails.qualification} onChange={(e) => setApplicationDetails({ ...applicationDetails, qualification: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ' placeholder='Qualification' />
                                <input value={applicationDetails.phone} onChange={(e) => setApplicationDetails({ ...applicationDetails, phone: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ms-2' placeholder='Phone Number ' />
                            </div>
                            <label className='' htmlFor="resume-pdf"><span className='bg-gray-300 p-1'>Add</span> Resume</label>
                            <input onChange={(e)=> setApplicationDetails({...applicationDetails,resume:e.target.files[0]})} type="file" id='resume-pdf' className='p-2 w-full ' />
                           

                        </div>

                        <div className='flex justify-between my-3'>
                            <button onClick={handleReset} className='text-white bg-orange-500 px-2 py-1 hover:bg-orange-400 cursor-pointer mt-3 '>RESET</button>
                            <button onClick={handleAddApplication} className='text-white bg-green-500 px-2 py-1 hover:bg-green-400 cursor-pointer mt-3'>ADD</button>

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

export default Careers
import React, { use, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faSearch } from '@fortawesome/free-solid-svg-icons'
import { getAllJobsAPI, getAllUserJobsAPI } from '../../services/allAPI'
import { toast } from 'react-toastify'

const Careers = () => {
    const [allJobs, setAllJobs] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [userToken, setUserToken] = useState("")
    // console.log(searchKey);

    console.log(allJobs);

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
                                                <Link to={'/careers'}><button className='bg-yellow-500 px-4 py-2 text-black font-bold cursor-pointer hover:bg-yellow-400'>Apply <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
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
        </>
    )
}

export default Careers
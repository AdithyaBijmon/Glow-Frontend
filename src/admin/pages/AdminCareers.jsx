import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { ToastContainer, toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMultiply, faTrash } from '@fortawesome/free-solid-svg-icons'
import { addJobAPI, getAllJobsAPI, removeJobAPI } from '../../services/allAPI'


const AdminCareers = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [allJobs, setAllJobs] = useState([])
  const [jobs, setJobs] = useState({ jobTitle: "", jobDescription: "", jobType: "", salary: "", experience: "", qualification: "", eligibility: "" })
  console.log(jobs);


  useEffect(() => {
    getAllJobs()
  }, [jobs])

  // console.log(allJobs)

  const getAllJobs = async () => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    try {
      const result = await getAllJobsAPI(reqHeader)
      if (result.status == 200) {
        setAllJobs(result.data)

      }
      else {
        toast.error("Something went wrong")
      }

    }
    catch (err) {
      console.log(err);

    }
  }

  const handleReset = () => {
    setJobs({ jobTitle: "", jobDescription: "", jobType: "", salary: "", experience: "", qualification: "", eligibility: "" })
  }

  const handleAddJob = async () => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    const {jobTitle,jobDescription,jobType,salary,experience,qualification,eligibility} = jobs

    try {

      if (!jobTitle || !jobDescription || !jobType || !salary || !experience || !qualification || !eligibility) {
        toast.info("Fill the form completely.")
      }

      else {

        const result = await addJobAPI(jobs, reqHeader)
        if (result.status == 200) {
          toast.success("Job added successfully.")
          handleReset()
          setModalStatus(false)
        }
        else if (result.status == 409) {
          toast.warn(result.response.data)
          handleReset()
        }
        else {
          toast.error("Something went wrong")
          handleReset()
        }

      }


    }
    catch (err) {
      console.log(err)
    }


  }

  const handleRemoveJob = async (id) => {
          const token = JSON.parse(sessionStorage.getItem("token"))
          const reqHeader = {
              "Authorization": `Bearer ${token}`
          }
          try {
  
              const result = await removeJobAPI(id, reqHeader)
              if (result.status == 200) {
                  toast.success("Job deleted successfully.")
                  getAllJobs()
  
              }
              else {
                  toast.error("Something went wrong.")
              }
  
          }
          catch (err) {
              console.log(err)
          }
      }

  

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

          <div>
            <div className="md:grid grid-cols-4 gap-5 my-2 p-5">


              {
                allJobs.length > 0 ?
                  allJobs?.map(job => (
                    <div key={job?._id} className="shadow w-full p-3">
                      <div className='flex justify-end my-2'><button onClick={()=>handleRemoveJob(job?._id)} className='cursor-pointer' ><FontAwesomeIcon className='text-red-500 text-xl' icon={faTrash} /></button></div>

                      <div >
                        <h3 className='text-xl text-black mt-3 font-bold'>{job?.jobTitle}</h3>
                        <p className='mt-3 '>Salary:{job?.salary}</p>
                        <p className='mt-3 '>Job Type:{job?.jobType}</p>
                        <p className='mt-3 '>Qualification:{job?.qualification}</p>
                        <p className='mt-3 '>Experience:{job?.experience}</p>
                        <p className='mt-3 '>Eligibility:{job?.eligibility}</p>
                        <p className='mt-3 '>Description: {job?.jobDescription}</p>
                      </div>
                    </div>
                  ))
                  :
                  <p>No jobs added.</p>
              }






            </div>

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

          <div className="w-100 h-90 p-5 bg-white">
            <div className='flex justify-between items-center'>
              <h1 className='text-xl font-bold'>New Job Opening</h1>
              <button onClick={() => setModalStatus(false)} className='cursor-pointer'><FontAwesomeIcon icon={faMultiply} className='text-xl' /></button>
            </div>

            <div className='my-3'>

              <div className='flex mb-3'>
                <input value={jobs.jobTitle} onChange={(e) => setJobs({ ...jobs, jobTitle: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ' placeholder='Job Title' />
                <input value={jobs.salary} onChange={(e) => setJobs({ ...jobs, salary: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ms-2' placeholder='Salary ' />
              </div>

              <div className='flex mb-3'>
                <input value={jobs.jobType} onChange={(e) => setJobs({ ...jobs, jobType: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ' placeholder='Job Type' />
                <input value={jobs.experience} onChange={(e) => setJobs({ ...jobs, experience: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ms-2' placeholder='Experience ' />
              </div>

              <div className='flex mb-3'>
                <input value={jobs.qualification} onChange={(e) => setJobs({ ...jobs, qualification: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ' placeholder='Qualification ' />
                <input value={jobs.eligibility} onChange={(e) => setJobs({ ...jobs, eligibility: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400 ms-2' placeholder='Eligibility' />
              </div>

              <textarea value={jobs.jobDescription} onChange={(e) => setJobs({ ...jobs, jobDescription: e.target.value })} type="text" className='p-2 w-full placeholder:text-gray-400 border border-gray-400' placeholder='Job Description ' ></textarea>

            </div>

            <div className='flex justify-between my-1'>
              <button onClick={handleReset} className='text-white bg-orange-500 px-2 py-1 hover:bg-orange-400 cursor-pointer  '>RESET</button>
              <button onClick={handleAddJob} className='text-white bg-green-500 px-2 py-1 hover:bg-green-400 cursor-pointer '>ADD</button>

            </div>


          </div>



        </div>
      }


    </>
  )
}

export default AdminCareers
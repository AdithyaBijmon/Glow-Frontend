import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { ToastContainer, toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMultiply, faTrash } from '@fortawesome/free-solid-svg-icons'
import { addJobAPI, approveApplicationAPI, getAllAdminApplicantsAPI, getAllJobsAPI, rejectApplicationAPI, removeJobAPI } from '../../services/allAPI'
import { Link } from 'react-router-dom'
import SERVERURL from '../../services/ServerURL'
import 'react-toastify/dist/ReactToastify.css'


const AdminCareers = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [allJobs, setAllJobs] = useState([])
  const [jobs, setJobs] = useState({ jobTitle: "", jobDescription: "", jobType: "", salary: "", experience: "", qualification: "", eligibility: "" })
  console.log(jobs);
  const [jobSection, setJobSection] = useState(true)
  const [applicants, setApplicants] = useState(false)
  const [allApplicants, setAllApplicants] = useState([])

  const confirmAction = (id, action) => {
    action();
    toast.dismiss(id);
  };

  const ApproveConfirmationToast = ({ closeToast, action }) => (
    <div>
      <p>Are you sure to approve this application?</p>
      <button onClick={() => confirmAction(closeToast.toastId, action)}>Yes</button>
      <button className='ms-5' onClick={() => toast.dismiss(closeToast.toastId)}>No</button>
    </div>
  )

  const RejectConfirmationToast = ({ closeToast, action }) => (
    <div>
      <p>Are you sure to reject this application?</p>
      <button onClick={() => confirmAction(closeToast.toastId, action)}>Yes</button>
      <button className='ms-5' onClick={() => toast.dismiss(closeToast.toastId)}>No</button>
    </div>
  )


  useEffect(() => {
    getAllJobs()
    if (applicants == true) {
      getAllApplicants()
    }
  }, [jobs, applicants])

  // console.log(allJobs)
  console.log(allApplicants);


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

  const getAllApplicants = async () => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllAdminApplicantsAPI(reqHeader)

      if (result.status == 200) {
        setAllApplicants(result.data)
        
      }
      else {
        console.log(result.response.data)
      }

    } catch (error) {
      console.log(error);

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

    const { jobTitle, jobDescription, jobType, salary, experience, qualification, eligibility } = jobs

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

  const handleApproveApplication = async (id) => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    try {
      const result = await approveApplicationAPI(id, reqHeader)
      if (result.status == 200) {
        toast.success("Application approved.")
        getAllApplicants()
      }

    } catch (error) {
      console.log(error);

    }
  }

  
  const handleRejectApplication = async (id) => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    try {
      const result = await rejectApplicationAPI(id, reqHeader)
      if (result.status == 200) {
        toast.success("Application rejected.")
        getAllApplicants()
      }

    } catch (error) {
      console.log(error);

    }
  }

  const showApproveConfirmation = (id) => {
    toast.info(<ApproveConfirmationToast action={()=>handleApproveApplication(id)} />, {
      closeButton: false,
      autoClose: false
    });
  }

   const showRejectConfirmation = (id) => {
    toast.info(<RejectConfirmationToast action={()=>handleRejectApplication(id)} />, {
      closeButton: false,
      autoClose: false
    });
  }



  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'><AdminSidebar /></div>
        <div className='col-span-4 p-5 md:mt-24'>
          <h1 className='text-center font-bold text-3xl'>Job Postings & Applicants</h1>
          <div className='flex justify-center flex-grow items-center my-7'>
            <button onClick={() => { setJobSection(true); setApplicants(false) }} className={jobSection ? 'border-b-5 cursor-pointer text-lg' : 'text-sm cursor-pointer'}>Jobs</button>
            <button onClick={() => { setJobSection(false); setApplicants(true) }} className={applicants ? 'border-b-5 ms-5 cursor-pointer text-lg' : 'ms-5 text-sm cursor-pointer'}>Applicants</button>
          </div>


          <div>
            {
              jobSection &&

              <>
                <div className="flex justify-end px-5">
                  <button onClick={() => setModalStatus(true)} className='text-white bg-green-500 p-2 hover:bg-green-400 cursor-pointer mt-3'>+Add Job</button>
                </div>
                <div className="md:grid grid-cols-4 gap-5 my-2 p-5">


                  {
                    allJobs.length > 0 ?
                      allJobs?.map(job => (
                        <div key={job?._id} className="shadow w-full p-3">
                          <div className='flex justify-end my-2'><button onClick={() => handleRemoveJob(job?._id)} className='cursor-pointer' ><FontAwesomeIcon className='text-red-500 text-xl' icon={faTrash} /></button></div>

                          <div >
                            <h3 className='text-xl text-black mt-3 font-bold'>{job?.jobTitle}</h3>
                            <p className='mt-3 '><span className="font-semibold">Salary:</span>{job?.salary}</p>
                            <p className='mt-3 '><span className="font-semibold">Job Type:</span>{job?.jobType}</p>
                            <p className='mt-3 '><span className="font-semibold">Qualification:</span>{job?.qualification}</p>
                            <p className='mt-3 '><span className="font-semibold">Experience:</span>{job?.experience}</p>
                            <p className='mt-3 '><span className="font-semibold">Eligibility:</span>{job?.eligibility}</p>
                            <p className='mt-3 '><span className="font-semibold">Description:</span> {job?.jobDescription}</p>
                          </div>
                        </div>
                      ))
                      :
                      <p>No jobs added.</p>
                  }
                </div>
              </>
            }

            {
              applicants &&
              <div className='my-5'>

                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Job Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Full Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Qualification
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Resume
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Status
                        </th>

                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          Approve/Reject
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white ">
                      {
                        allApplicants.length > 0 ?
                          allApplicants?.map((applicant, index) => (
                            <tr key={applicant?._id} className="bg-white ">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {index + 1}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {applicant?.jobTitle}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {applicant?.fullName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {applicant?.email}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {applicant?.qualification}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <Link to={`${SERVERURL}/pdf/${applicant?.resume}`} target='_blank' className='text-blue-500'>Resume</Link>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {
                                  applicant?.status == "pending" ?
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                      pending
                                    </span>
                                    :
                                    applicant?.status == "approved" ?
                                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Approved
                                      </span>
                                      :
                                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                        Rejected
                                      </span>
                                }
                              </td>

                              {
                                applicant?.status == "pending" ?
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center space-x-2">
                                    <button onClick={()=>showApproveConfirmation(applicant?._id)} className="px-3 py-1 text-sm font-semibold rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150">
                                      Approve
                                    </button>
                                    <button onClick={()=>showRejectConfirmation(applicant?._id)} className="px-3 py-1 text-sm font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-150">
                                      Reject
                                    </button>
                                  </td>
                                  :
                                  applicant?.status == "approved" ?
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-900">
                                      APPROVED
                                    </td>
                                    :
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-900">
                                      REJECTED
                                    </td>
                              }


                            </tr>
                          ))
                          :
                          <tr>
                            <td>No applicants.</td>
                          </tr>
                      }





                    </tbody>
                  </table>
                </div>


              </div>
            }

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
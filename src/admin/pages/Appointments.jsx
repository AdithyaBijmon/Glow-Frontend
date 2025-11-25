import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { approveAppointmentAPI, getAllAdminAppointmentsAPI, rejectAppointmentAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'

const Appointments = () => {

  const [allAppointments, setAllAppointments] = useState([])

   useEffect(() => {
    getAllAppointments()
  }, [])

  const confirmAction = (id, action) => {
    action();
    toast.dismiss(id);
  };

  const ApproveConfirmationToast = ({ closeToast, action }) => (
    <div>
      <p>Are you sure to approve this appointment?</p>
      <button className='bg-green-500 p-1 rounded-full' onClick={() => confirmAction(closeToast.toastId, action)}>Yes</button>
      <button className='ms-5 bg-red-500 p-1 rounded-full' onClick={() => toast.dismiss(closeToast.toastId)}>No</button>
    </div>
  )

  const RejectConfirmationToast = ({ closeToast, action }) => (
    <div>
      <p>Are you sure to reject this appointment?</p>
      <button className='bg-green-500 p-1 rounded-full' onClick={() => confirmAction(closeToast.toastId, action)}>Yes</button>
      <button className='ms-5 bg-red-500 p-1 rounded-full' onClick={() => toast.dismiss(closeToast.toastId)}>No</button>
    </div>
  )

  
    const showApproveConfirmation = (id) => {
      toast.info(<ApproveConfirmationToast action={()=>handleApproveAppointment(id)} />, {
        closeButton: false,
        autoClose: false
      });
    }
  
     const showRejectConfirmation = (id) => {
      toast.info(<RejectConfirmationToast action={()=>handleRejectAppointment(id)} />, {
        closeButton: false,
        autoClose: false
      });
    }

 

  const getAllAppointments = async () => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllAdminAppointmentsAPI(reqHeader)
      if (result.status == 200) {
        setAllAppointments(result.data)
      }
    }
    catch (err) {
      console.log(err);

    }
  }

   const handleApproveAppointment = async (id) => {
      const token = JSON.parse(sessionStorage.getItem("token"))
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
  
      try {
        const result = await approveAppointmentAPI(id, reqHeader)
        if (result.status == 200) {
          toast.success("Application approved.")
          getAllAppointments()
        }
  
      } catch (error) {
        console.log(error);
  
      }
    }

    const handleRejectAppointment = async (id) => {
        const token = JSON.parse(sessionStorage.getItem("token"))
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
    
        try {
          const result = await rejectAppointmentAPI(id, reqHeader)
          if (result.status == 200) {
            toast.success("Application rejected.")
            getAllAppointments()
          }
    
        } catch (error) {
          console.log(error);
    
        }
      }

  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'><AdminSidebar /></div>
        <div className='col-span-4 p-5 md:mt-24'>
          <h1 className='text-center font-bold text-3xl'>Appointments</h1>

          <div className='my-10'>

            <div className="overflow-x-auto rounded-lg shadow-lg">
              <table className="min-w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      S.No
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Full Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Status
                    </th>

                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Approve/Reject
                    </th>

                  </tr>
                </thead>
                <tbody className="bg-white ">
                  {
                    allAppointments.length > 0 ?
                      allAppointments?.map((appoint, index) => (
                        <tr key={appoint?._id} className="bg-white ">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {appoint?.serviceName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {appoint?.fullName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {appoint?.email}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {appoint?.phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {appoint?.date}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {appoint?.time}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap">
                            {
                              appoint?.status == "pending" ?
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                  pending
                                </span>
                                :
                                appoint?.status == "approved" ?
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
                            appoint?.status == "pending" ?
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center space-x-2">
                                <button onClick={()=>showApproveConfirmation(appoint?._id)}  className="px-3 py-1 text-sm font-semibold rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150">
                                  Approve
                                </button>
                                <button onClick={()=>showRejectConfirmation(appoint?._id)}  className="px-3 py-1 text-sm font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-150">
                                  Reject
                                </button>
                              </td>
                              :
                              appoint?.status == "approved" ?
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
                        <td>No Appointments.</td>
                      </tr>
                  }





                </tbody>
              </table>
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
    </>
  )
}

export default Appointments
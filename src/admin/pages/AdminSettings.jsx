import React, { use, useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faPen } from '@fortawesome/free-solid-svg-icons'
import { editAdminDetailsAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'
import SERVERURL from '../../services/ServerURL'
import { adminUpdateContext } from '../../contextAPI/ShareContext'

const AdminSettings = () => {

  const [editStatus, setEditStatus] = useState(false)
  const [adminDetails, setAdminDetails] = useState({ username: "", email: "", password: "", profile: "" })
  const [preview, setPreview] = useState("")
  const [existingProfilePic, setExistingProfilePic] = useState("")
  const {setAdminEditResponse} = useContext(adminUpdateContext)


  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    if (token) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setAdminDetails({username:user.username,email:user.email,password:user.password,profile:""})
      setExistingProfilePic(user.profile)
    }
  }, [])

  const handleUploadImage = (e) => {
    const image = e.target.files[0]
    setAdminDetails({ ...adminDetails, profile: image })
    setPreview(URL.createObjectURL(image))
  }

  const handleReset = () => {
    setPreview("")
  }

  const handleUpdateAdmin = async () => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    const {username,password,profile} = adminDetails
    try {

      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()

      reqBody.append("username",username)
      reqBody.append("password",password)
      preview?reqBody.append("profile",profile):reqBody.append("profile",existingProfilePic)

      const result = await editAdminDetailsAPI(reqBody, reqHeader)
      if (result.status == 200) {
        sessionStorage.setItem("user",JSON.stringify(result.data))
        toast.success("Admin Profile updated.")
        setAdminEditResponse(result.data)
        const updatedUser = result.data
        setAdminDetails({username: updatedUser.username,email: updatedUser.email,password: updatedUser.password});
        setExistingProfilePic(updatedUser.profile)
        
        // console.log(result.data)
        setEditStatus(false)
      }
      else{
        toast.error("Something went wrong")
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
          <h1 className='text-2xl font-bold'><FontAwesomeIcon icon={faGears} /> Settings</h1>

          <div className="md:grid grid-cols-2 gap-2 p-5">
            <div className="shadow p-5 my-5 flex items-center justify-center mx-10 ">
              <div>
                <div className={editStatus?"hidden":'flex justify-end'}><FontAwesomeIcon onClick={() => setEditStatus(true)} icon={faPen} /></div>

                {
                  editStatus ?

                    <div className='my-10'>
                      <label htmlFor='admin-img'>
                        {
                          existingProfilePic ?
                            <img style={{ width: '120px', height: '120px', borderRadius: '50%' }} className='my-3' src={preview?preview:`${SERVERURL}/uploads/${existingProfilePic}`} alt="" />
                            :
                            <img style={{ width: '120px', height: '120px', borderRadius: '50%' }} className='my-3' src={preview?preview:"https://freesvg.org/img/1459344336.png"} alt="" />
                        }
                        <input onChange={(e) => handleUploadImage(e)} type="file" className='hidden' id='admin-img' />
                      </label>
                      <input value={adminDetails.username} onChange={(e) => setAdminDetails({ ...adminDetails, username: e.target.value })} type="text" placeholder='Name' className='w-full p-1 placeholder-gray-400 border border-gray-400' />
                      <input value={adminDetails.email} type="text" placeholder='Email' className='w-full p-1 placeholder-gray-400 border border-gray-400 my-3' readOnly />
                      <input value={adminDetails.password} onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })} type="text" placeholder='Password' className='w-full p-1 placeholder-gray-400 border border-gray-400' />
                      <div className='flex justify-between my-3'>
                        <button onClick={() => setEditStatus(false)} className='text-white bg-red-500 px-2 py-1 hover:bg-red-400 cursor-pointer  '>CANCEL</button>
                        <button onClick={handleReset} className='text-white bg-orange-500 px-2 py-1 hover:bg-orange-400 cursor-pointer  '>RESET</button>
                        <button onClick={handleUpdateAdmin} className='text-white bg-green-500 px-2 py-1 hover:bg-green-400 cursor-pointer '>UPDATE</button>

                      </div>


                    </div>
                    :

                    <div className='my-10'>
                      {
                          existingProfilePic ?
                            <img style={{ width: '120px', height: '120px', borderRadius: '50%' }} className='my-3' src={preview?preview:`${SERVERURL}/uploads/${existingProfilePic}`} alt="" />
                            :
                            <img style={{ width: '120px', height: '120px', borderRadius: '50%' }} className='my-3' src={preview?preview:"https://freesvg.org/img/1459344336.png"} alt="" />
                        }
                      <h1 className='text-2xl font-semibold my-3'>{adminDetails.username}</h1>
                      <h3>Email : {adminDetails.email}</h3>
                      <h4>Password : {adminDetails.password}</h4>
                    </div>

                }

              </div>


            </div>

            <div className='flex items-center p-5 text-justify'>
              <p>Welcome to your central control panel !!! As the administrator, you are the steward of this entire system, responsible for its accuracy and smooth operation. Every setting you define, every service you price, and every appointment you confirm directly impacts the salon's efficiency and profitability. Your primary goal is to ensure that the system's data—from client contacts and staff schedules to service pricing—is always current, allowing service providers to focus solely on delivering excellent client experiences while you manage the logistics seamlessly.</p>
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

export default AdminSettings
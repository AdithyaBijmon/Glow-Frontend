import commonAPI from "./commonAPI"
import SERVERURL from "./ServerURL"

// --------------guest user---------------

// -------User Register----------
export const registerAPI = async (reqBody)=>{
  return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

// --------user login------------
export const loginAPI = async (reqBody)=>{
  return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

// ---------user google login -------------
export const googleLoginAPI = async (reqBody)=>{
  return await commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
}
// --------- ADMIN---------------------------

// --------Add Service------------
export const addServiceAPI = async (reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVERURL}/add-service`,reqBody,reqHeader)
}

// --------- All services----------
export const getAllAdminServicesAPI = async ()=>{
  return await commonAPI("GET",`${SERVERURL}/admin-all-services`,{})
}




// -------- Delete Service ------------
export const removeServiceAPI = async (id,reqHeader)=>{
  return await commonAPI("DELETE",`${SERVERURL}/remove/${id}/service`,{},reqHeader)
}

// ------- Add Job ----------
export const addJobAPI = async (reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVERURL}/add-job`,reqBody,reqHeader)
}

// -------- Get all Jobs ---------
export const getAllJobsAPI = async (reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/all-jobs`,{},reqHeader)
}

// -------- Delete Job-------------
export const removeJobAPI = async (id,reqHeader)=>{
  return await commonAPI("DELETE",`${SERVERURL}/remove/${id}/job`,{},reqHeader)
}

// -------- Update Admin Details-----------
export const editAdminDetailsAPI = async (reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${SERVERURL}/edit/admin`,reqBody,reqHeader)
}

// ---------- All job applications ---------------

export const getAllAdminApplicantsAPI = async (reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/all-applications`,{},reqHeader)
}
// ------- Approve application -----------
export const approveApplicationAPI = async (id,reqHeader)=>{
  return await commonAPI("PUT",`${SERVERURL}/approve/${id}/application`,{},reqHeader)
}

// ------- Reject application -----------
export const rejectApplicationAPI = async (id,reqHeader)=>{
  return await commonAPI("PUT",`${SERVERURL}/reject/${id}/application`,{},reqHeader)
}

// --------- All Appointments-------------

export const getAllAdminAppointmentsAPI = async (reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/all-appointments`,{},reqHeader)
}

// ------- Approve appointment -----------
export const approveAppointmentAPI = async (id,reqHeader)=>{
  return await commonAPI("PUT",`${SERVERURL}/approve/${id}/appointment`,{},reqHeader)
}

// ------- Reject appointment -----------
export const rejectAppointmentAPI = async (id,reqHeader)=>{
  return await commonAPI("PUT",`${SERVERURL}/reject/${id}/appointment`,{},reqHeader)
}

// ------------ USER --------------------
// -------- Home page services -------------
export const getHomeServicesAPI = async ()=>{
  return await commonAPI("GET",`${SERVERURL}/home-services`,{})
}

// --------- All services----------
export const getAllServicesAPI = async (search)=>{
  return await commonAPI("GET",`${SERVERURL}/all-services?search=${search}`,{})
}

// ------------ All User jobs-------------
export const getAllUserJobsAPI = async (search,reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/all/user/jobs?search=${search}`,{},reqHeader)
}

// ---------- Add job Application -------------
export const addJobApplicationAPI = async (reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVERURL}/add-application`,reqBody,reqHeader)
}

// ---------- View Single service -------------
export const viewSingleServiceAPI = async (id,reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/view/${id}/service`,{},reqHeader)
}

// ---------- Book Appointment -------------
export const bookAppointmentAPI = async (reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVERURL}/add-appointment`,reqBody,reqHeader)
}

// ---------- View user appointments -------------
export const viewUserAppointmentAPI = async (reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/view/user/appointments`,{},reqHeader)
}

export const removeAppointmentAPI = async (id,reqHeader)=>{
  return await commonAPI("DELETE",`${SERVERURL}/remove/${id}/appointment`,{},reqHeader)
}

// -------- Update Admin Details-----------
export const editUserDetailsAPI = async (reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${SERVERURL}/edit/user`,reqBody,reqHeader)
}

// ---------- View user applied jobs -------------
export const viewUserAppliedJobsAPI = async (reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/applied-jobs`,{},reqHeader)
}

export const removeApplicationAPI = async (id,reqHeader)=>{
  return await commonAPI("DELETE",`${SERVERURL}/remove/${id}/application`,{},reqHeader)
}


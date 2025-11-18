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

// --------- ADMIN---------------------------

// --------Add Service------------
export const addServiceAPI = async (reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVERURL}/add-service`,reqBody,reqHeader)
}

// --------- All services----------
export const getAllServicesAPI = async (reqHeader)=>{
  return await commonAPI("GET",`${SERVERURL}/all-services`,{},reqHeader)
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
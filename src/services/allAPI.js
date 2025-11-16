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
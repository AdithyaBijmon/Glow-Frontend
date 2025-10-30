import commonAPI from "./commonAPI"
import SERVERURL from "./ServerURL"

// --------------guest user---------------

// -------User Register----------
export const registerAPI = async (reqBody)=>{
  return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async (reqBody)=>{
  return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}
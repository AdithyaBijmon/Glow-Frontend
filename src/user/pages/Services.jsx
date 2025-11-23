import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { getAllServicesAPI } from '../../services/allAPI'
import SERVERURL from '../../services/ServerURL'

const Services = () => {
  const [userToken, setUserToken] = useState("")
  const [allServices, setAllServices] = useState([])
  const [searchKey,setSearchKey] = useState("")

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"))
    if (token) {
      setUserToken(token)
      getAllServices()

    }
  }, [searchKey])

  const getAllServices = async () => {
    try {
      const result = await getAllServicesAPI(searchKey)
      // console.log(result)
      setAllServices(result.data)

    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <Header />

      {/* Top services section */}

      {
        userToken ?
          <>
            <div className='relative bg-[url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/BXoCcli6Gjgt702lg/videoblocks-trendy-barber-cuts-bearded-mans-hair-with-a-clipper-in-barbershop-mens-hairstyling-and-hair-cutting-in-salon-grooming-the-hair-with-trimmer-hairdresser-doing-haircut-in-retro-hair-salon-tracking_huj19xwci_thumbnail-1080_05.png)] bg-cover w-full bg-center h-100'>

              <div className='absolute bg-black/50 w-full h-100'></div>

              <div className='absolute inset-0 flex justify-center items-center h-100 flex-col'>
                <h1 className='text-4xl font-bold text-white'>Our Services</h1>
                <div className='bg-yellow-500 w-25 h-1 my-2'></div>
              </div>

            </div>

            {/* Search input and button */}
            <div className='md:px-50 px-15 my-20 '>
              <input value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} type="text" className='border border-black placeholder-gray-400 p-2' placeholder='Search services here...' />
              <button className='bg-yellow-500 px-3 py-2 ms-3 text-black hover:bg-yellow-400'><FontAwesomeIcon icon={faSearch} /></button>
            </div>


            {/* Services section */}

            <div className='md:mx-40 mx-10 my-20'>
              <h4 className='font-semibold text-md text-yellow-500 text-center mt-3 md:mt-0'>OUR SERVICES</h4>
              <h1 className='font-bold md:text-5xl text-3xl text-center'>From head to toe, we've <br className='hidden md:inline' /> got you covered</h1>

              <div className="md:grid grid-cols-4 gap-5 my-10">
                {
                  allServices.length > 0 ?
                    allServices?.map(service => (
                      <div key={service?._id} className="shadow w-full p-3">
                        <Link to={`/view/${service?._id}/service`}>
                          <img className='w-full h-80 object-cover' src={`${SERVERURL}/uploads/${service?.serviceImg}`} alt="" />
                          <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold'>{service?.serviceName}</h3>
                        </Link>
                      </div>
                    ))
                    :
                    <p>No services available.</p>
                }



              </div>
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

export default Services
import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footer'

const Services = () => {
  return (
    <>
      <Header />

      {/* Top services section */}

      <div className='relative bg-[url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/BXoCcli6Gjgt702lg/videoblocks-trendy-barber-cuts-bearded-mans-hair-with-a-clipper-in-barbershop-mens-hairstyling-and-hair-cutting-in-salon-grooming-the-hair-with-trimmer-hairdresser-doing-haircut-in-retro-hair-salon-tracking_huj19xwci_thumbnail-1080_05.png)] bg-cover w-full bg-center h-100'>

        <div className='absolute bg-black/50 w-full h-100'></div>

        <div className='absolute inset-0 flex justify-center items-center h-100 flex-col'>
          <h1 className='text-4xl font-bold text-white'>Our Services</h1>
          <div className='bg-yellow-500 w-25 h-1 my-2'></div>
        </div>

      </div>

      {/* Search input and button */}
      <div className='md:px-50 px-15 my-20 '>
        <input type="text" className='border border-black placeholder-gray-400 p-2' placeholder='Search services here...' />
        <button className='bg-yellow-500 px-3 py-2 ms-3 text-black hover:bg-yellow-400'><FontAwesomeIcon icon={faSearch} /></button>
      </div>


      {/* Services section */}

      <div className='md:mx-40 mx-10 my-20'>
        <h4 className='font-semibold text-md text-yellow-500 text-center mt-3 md:mt-0'>OUR SERVICES</h4>
        <h1 className='font-bold md:text-5xl text-3xl text-center'>From head to toe, we've <br className='hidden md:inline' /> got you covered</h1>

        <div className="md:grid grid-cols-3 gap-5 my-10">
          <div className="shadow w-full p-3">
            <img className='w-full h-80 object-cover' src="https://www.bodycraft.co.in/hubfs/Imported_Blog_Media/beautiful-keratin-treated-hair-1-1.jpg" alt="" />
            <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold'>Smoothening</h3>
          </div>
          <div className="shadow w-full p-3 md:my-0 my-5">
            <img className='w-full h-80 object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-hairdresser-salon_1163-2019.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold'>Hair Cut</h3>
          </div>
          <div className="shadow w-full p-3">
            <img className='w-full h-80 object-cover' src="https://m.media-amazon.com/images/I/61qd8hwOc9L._UF1000,1000_QL80_.jpg" alt="" />
            <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold' >Manicure</h3>
          </div>

          <div className="shadow w-full p-3">
            <img className='w-full h-80 object-cover' src="https://www.bodycraft.co.in/hubfs/Imported_Blog_Media/beautiful-keratin-treated-hair-1-1.jpg" alt="" />
            <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold'>Smoothening</h3>
          </div>
          <div className="shadow w-full p-3 md:my-0 my-5">
            <img className='w-full h-80 object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-hairdresser-salon_1163-2019.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold'>Hair Cut</h3>
          </div>
          <div className="shadow w-full p-3">
            <img className='w-full h-80 object-cover' src="https://m.media-amazon.com/images/I/61qd8hwOc9L._UF1000,1000_QL80_.jpg" alt="" />
            <h3 className='text-center text-xl text-yellow-500 mt-3 font-bold' >Manicure</h3>
          </div>
        </div>
      </div>

      <Footer/>


    </>
  )
}

export default Services
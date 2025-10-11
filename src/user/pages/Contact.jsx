import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faLocationArrow, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <>
      <Header navblack />

      {/* Contact form */}
      <div className='my-30 flex justify-center items-center flex-col'>
        <h2 className='text-3xl font-bold'>Contact Us</h2>
        <p className='font-bold'>Any questions or remark? Just write us a message.</p>
        <div className='my-10 md:px-0 px-10 '>
          <input type="text" className='border border-gray-300 border-2 placeholder-gray-400 p-2 md:w-auto w-full' placeholder='Name' />
          <input type="text" className='md:ms-5 md:mt-0 mt-5 border border-gray-300 border-2 placeholder-gray-400 p-2 md:w-auto w-full' placeholder='Email' />
        </div>

        <textarea className='border border-gray-300 border-2 placeholder-gray-400 p-2 w-100 ' placeholder='Message...' rows={5} ></textarea>

        <button className='bg-yellow-500 px-4 py-2  text-black font-bold w-100 mt-5'>Send Message</button>
      </div>

      {/* Contact informations */}
      <div className='px-40 bg-yellow-500 w-full min-h-40 my-20 relative flex justify-between'>
        <div className='grid grid-cols-3 gap-20 absolute bottom-16'>

          <div className='px-10 flex justify-center items-center flex-col'>
            <div className=' bg-white w-20 h-20 rounded-full border-yellow-500 border border-4  flex justify-center items-center'>
              <FontAwesomeIcon className='text-2xl text-yellow-500' icon={faLocationDot} />
            </div>

            <p className='text-center mt-6'>ABC street ,D1234 ,Kakkand,Kerala</p>
          </div>

          <div className='px-10 flex justify-center items-center flex-col'>
            <div className=' bg-white w-20 h-20 rounded-full border-yellow-500 border border-4  flex justify-center items-center'>
              <FontAwesomeIcon className='text-2xl text-yellow-500' icon={faPhone} />
            </div>

            <p className='text-center mt-6'>+91 9878675675</p>
          </div>

          <div className='px-10 flex justify-center items-center flex-col'>
            <div className=' bg-white w-20 h-20 rounded-full border-yellow-500 border border-4  flex justify-center items-center'>
              <FontAwesomeIcon className='text-2xl text-yellow-500' icon={faEnvelope} />
            </div>

            <p className='text-center mt-6'>glow@gmail.com</p>
          </div>
        </div>



      </div>

      <Footer/>

    </>
  )
}

export default Contact
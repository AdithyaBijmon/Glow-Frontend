import { faFacebook, faFacebookF, faInstagram, faTelegram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 w-full md:px-20 px-5 md:py-5 py-10 z-50 absolute'>

      <div className="md:grid grid-cols-3 gap-10">
        <div className='text-white p-3'>

          {/* Salon description */}
          <h1 className='font-bold text-3xl'>Glow.</h1>
          <p className='my-4 text-justify'>The  destination for complete beauty and well-being. We offer a curated menu of hair, skin, and nail services designed to help you look and feel radiant from head to toe</p>
        </div>

        {/* Quick links */}
        <div className='p-3 md:text-center'>
          <h1 className='font-bold text-xl text-yellow-500 mb-5'>Quick links</h1>
          <ul className='text-white'>
            <li>Home Page</li>
            <li className='my-3'>Services Page</li>
            <li>Contact Page</li>
          </ul>
        </div>

        {/* Connect us */}
        <div className='p-3 md:text-center text-white'>
          <h1 className='font-bold text-xl  mb-5'>Connect Us</h1>
          <div className='flex md:justify-center'>
            <input type="text" className='bg-white py-1 w-50 placeholder-gray-400 px-2 ' placeholder='Enter your email' />
            <button className='bg-yellow-500 px-2 py-1 text-black hover:bg-yellow-400'><FontAwesomeIcon icon={faPaperPlane} /></button>
          </div>
        </div>
      </div>


      <div className='flex md:justify-center justify-around text-white text-2xl my-10'>

        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon className='mx-5' icon={faXTwitter}/>
        <FontAwesomeIcon icon={faFacebookF}/>
        <FontAwesomeIcon className='ms-5' icon={faWhatsapp}/>

      </div>

      <div className='text-center text-yellow-500 md:my-5 my-10'>
        <p>© 2025  GLOW. All Rights Reserved  Designed <br /> and  Developed with  ❤️  by  Adithya  Bijimon  </p>
      </div>




    </div>
  )
}

export default Footer
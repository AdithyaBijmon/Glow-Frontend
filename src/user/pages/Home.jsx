import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../components/Header'

const Home = () => {
    return (
        <>

        {/* Home top contact header */}
            <div className='md:flex hidden'>
                <div className='w-full p-1 bg-black '>
                    <div className='flex justify-between mx-15'>
                        <p className='text-sm'><span className='text-gray-300'>Phone no :</span> <span className='text-white'>+91 9878675675 </span>  <span className='text-gray-300 ms-1'> or email us :</span> <span className='text-white'>glow@gmail.com</span></p>

                        <div className='text-white flex'>
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon className='mx-4' icon={faInstagram} />
                            <FontAwesomeIcon icon={faXTwitter} />

                        </div>



                    </div>
                </div>
            </div>

            {/* Hero section */}

            <div className='bg-[url(https://images.unsplash.com/photo-1580618672591-eb180b1a973f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Fsb258ZW58MHx8MHx8fDA%3D)] bg-cover md:bg-top bg-center w-full h-175 relative'>

                <div className='absolute w-full bg-black/60 h-175'></div>

                <div className='absolute z-10 text-white inset-0'>

                    {/* User home page header */}

                    <div className='flex justify-between items-center md:px-30 my-5'>
                        <h1 className='font-bold text-4xl '>Glow.</h1>
                        <ul className='flex items-center cursor-pointer '>
                           <li className='text-gray-300 hover:text-white'> Home</li>
                           <li className='mx-10 text-gray-300 hover:text-white'> About</li>
                           <li className='text-gray-300 hover:text-white'> Services</li>
                           <li className='mx-10 text-gray-300 hover:text-white'> Contact</li>
                           <li><button className='px-5 py-2 bg-yellow-500 text-black font-bold'>Login</button></li>
                        </ul>
                    </div>

                    {/* Hero section headings */}

                    <h3 className='text-yellow-500 text-2xl mt-50 mx-30'>WELCOME  TO  GLOW</h3>
                    <h2 className='text-6xl font-bold mx-30 mt-10'>Timeless Beauty.</h2>
                    <h1 className='text-8xl font-bold mx-45 '>Modern style.</h1>
                    <button className='px-5 py-2 bg-yellow-500 text-black font-bold mx-46'>Login</button>




                </div>

            </div>




        </>
    )
}

export default Home
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {

    const [menu, setMenu] = useState(false)

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

            <div className='bg-[url(https://images.unsplash.com/photo-1580618672591-eb180b1a973f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Fsb258ZW58MHx8MHx8fDA%3D)] bg-cover md:bg-top bg-center w-full md:h-175 h-155 relative'>

                <div className='absolute w-full bg-black/60 md:h-175 h-155'></div>

                <div className='absolute z-10 text-white inset-0   '>

                    {/* User home page header */}

                    <div className='md:flex justify-between items-center md:px-30 my-5 px-5'>
                        <div className='flex justify-between '>
                            <h1 className='font-bold text-4xl '>Glow.</h1>

                            {/*small devices menu bar */}
                            <FontAwesomeIcon onClick={() => setMenu(!menu)} icon={faBars} className='text-3xl md:!hidden' />
                        </div>
                        <ul className={menu ? 'md:flex items-center md:mt-0 mt-3 md:text-base text-xl text-center' : 'md:flex hidden items-center  cursor-pointer'}>
                            <Link to={'/'}><li className='text-gray-300 hover:text-white'>Home</li></Link>
                            <Link to={'/about'}><li className='md:mx-10 md:my-0 my-2 text-gray-300 hover:text-white'> About</li></Link>
                            <Link to={'/services'}><li className='text-gray-300 hover:text-white'> Services</li></Link>
                            <Link to={'/contact'}><li className='md:mx-10 md:my-0 my-2 text-gray-300 hover:text-white'> Contact</li></Link>
                            <li><button className='px-5 py-2 bg-yellow-500 text-black font-bold'>Login</button></li>
                        </ul>
                    </div>

                    {/* Hero section headings */}

                    <h3 className='text-yellow-500 md:text-2xl text-xl md:mt-50 mt-35 md:mx-30 mx-5'>WELCOME  TO  GLOW</h3>
                    <h2 className='md:text-6xl text-4xl font-bold md:mx-30 mx-5 md:mt-10 mt-5'>Timeless Beauty.</h2>
                    <h1 className='md:text-8xl text-5xl font-bold md:mx-45 mx-15'>Modern style.</h1>
                    <div className='md:block flex justify-center mt-10 '><button className='md:px-30 px-10 py-4 bg-yellow-500 text-black font-bold md:mx-46 mx-10'>Book an Appointment</button></div>




                </div>

            </div>


            {/* About section */}

            <div className='md:grid grid-cols-2 gap-10 md:mx-40 mx-10  my-20'>
                {/* image,border and box */}
                <div className='md:px-30'>
                    <div className=' bg-[url(https://i2-prod.mirror.co.uk/article32501533.ece/ALTERNATES/s1200c/1_GettyImages-1469265810.jpg)] w-full h-90 bg-cover bg-center border-20 border-yellow-500 '>
                    </div>
                    {/* <div style={{marginBottom:'500px'}} className=" border-4 border-yellow-500 h-90"></div> */}

                </div>
                {/* About heading and description */}
                <div>
                    <h4 className='font-semibold text-md text-yellow-500 md:text-left text-center mt-3 md:mt-0'>OUR STORY</h4>
                    <h1 className='font-bold md:text-5xl text-3xl md:text-left text-center'>The Faces  Behind the Chair</h1>
                    <p className='text-justify my-5'>Our journey began with a simple idea: to create a space where expertise meets a genuine love for what we do. Every cut, color, and style is a testament to our dedication.</p>

                    <p className='text-justify'>More than just a salon, we've built a home for our community. We created this space to be a relaxing escape where you can unwind, be yourself, and leave feeling refreshed.</p>

                </div>

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
                </div>
            </div>

            <Footer />




        </>
    )
}

export default Home